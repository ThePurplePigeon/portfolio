import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Contact from '@/app/contact/page';

beforeEach(() => {
    global.fetch = jest.fn();
});

afterEach(() => {
    jest.clearAllMocks();
});

test('renders contact form fields and submit button', () => {
    render(<Contact />);

    //check each field and button is present
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
});

test('shows validation errors if required fields are empty on submit', async () => {

    render(<Contact />);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    // click without filling form
    await userEvent.click(submitButton);
    //check for validation errors
    expect(screen.getByText(/Name is required\./i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required\./i)).toBeInTheDocument();
    expect(screen.getByText(/Message is required\./i)).toBeInTheDocument();
    //make sure fetch wasn't called
    expect(global.fetch).not.toHaveBeenCalled();
});

test('shows error for invalid email format', async () => {
    render(<Contact />);

    await userEvent.type(screen.getByLabelText(/Name/i), 'Test User');
    const emailInput = screen.getByLabelText(/Email/i);
    await userEvent.type(emailInput, 'bad-email');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Hello World!');
    await userEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(emailInput).toBeInvalid();
    expect(global.fetch).not.toHaveBeenCalled();
});


test('submits form and shows success message', async () => {
    //mock fetch post request to return success
    (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true })
    })

    render(<Contact />);
    //fill form
    await userEvent.type(screen.getByLabelText(/Name/i), 'Alice');
    await userEvent.type(screen.getByLabelText(/Email/i), 'alice@example.com');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Hello, this is a test message.');
    await userEvent.click(screen.getByRole('button', { name: /send message/i }));
    //wait for success message
    const successMsg = await screen.findByText(/Thank you for your message/i);
    expect(successMsg).toBeInTheDocument();
    //Check that form fields are cleared
    expect(screen.getByLabelText(/Name/i)).toHaveValue('');
    expect(screen.getByLabelText(/Email/i)).toHaveValue('');
    expect(screen.getByLabelText(/Message/i)).toHaveValue('');
    //check fetch was called once with right args
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/contact', expect.objectContaining({ method: "POST" }))
});

test('displays server error message if API returns an error', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        json: async () => ({ error: "Failed to send message." })
    });
    render(<Contact />);
    //valid inputs
    await userEvent.type(screen.getByLabelText(/Name/i), 'Bob');
    await userEvent.type(screen.getByLabelText(/Email/i), 'bob@example.com');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Hi');
    await userEvent.click(screen.getByRole('button', { name: /send message/i }));
    //expect error message
    const errorMsg = await screen.findByText(/Failed to send message\./i);
    expect(errorMsg).toBeInTheDocument();
});

test('displays network error message on fetch exception', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));
    render(<Contact />);
    //valid inputs
    await userEvent.type(screen.getByLabelText(/Name/i), 'Carol');
    await userEvent.type(screen.getByLabelText(/Email/i), 'carol@example.com');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Hey there');
    await userEvent.click(screen.getByRole('button', { name: /send message/i }));
    //catch fetch error, show network error message
    const netErrorMsg = await screen.findByText(/Network error\. Please try again later\./i);
    expect(netErrorMsg).toBeInTheDocument();
});

test('honeypot website field is hidden from users', () => {
    render(<Contact />);
    const websiteInput = document.querySelector('input[name="website"]') as HTMLInputElement;
    expect(websiteInput).not.toBeVisible();
});

test('shows loading indicator while submitting', async () => {
    let resolveFetch: any;
    (global.fetch as jest.Mock).mockImplementationOnce(() => new Promise(res => { resolveFetch = () => res({ ok: true, json: async () => ({ success: true }) }); }));

    render(<Contact />);
    await userEvent.type(screen.getByLabelText(/Name/i), 'Dan');
    await userEvent.type(screen.getByLabelText(/Email/i), 'dan@example.com');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Loading test');
    const button = screen.getByRole('button', { name: /send message/i });
    await userEvent.click(button);
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent(/sending/i);
    resolveFetch();
    const success = await screen.findByText(/Thank you for your message/i);
    expect(success).toBeInTheDocument();
});

test('clears previous errors after successful submit', async () => {
    render(<Contact />);
    const button = screen.getByRole('button', { name: /send message/i });
    await userEvent.click(button);
    expect(screen.getByText(/Name is required\./i)).toBeInTheDocument();
    (global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true, json: async () => ({ success: true }) });
    await userEvent.type(screen.getByLabelText(/Name/i), 'Eva');
    await userEvent.type(screen.getByLabelText(/Email/i), 'eva@example.com');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Hi');
    await userEvent.click(button);
    const success = await screen.findByText(/Thank you for your message/i);
    expect(success).toBeInTheDocument();
    expect(screen.queryByText(/Name is required\./i)).not.toBeInTheDocument();
});
