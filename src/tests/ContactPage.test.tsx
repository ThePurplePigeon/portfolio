import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Contact from '@/app/contact/page';

const originalFetch = global.fetch;

const fetchMock = () => global.fetch as jest.MockedFunction<typeof fetch>;

const jsonResponse = (body: unknown, status = 200) =>
    ({
        ok: status >= 200 && status < 300,
        status,
        json: async () => body,
    }) as Response;

beforeEach(() => {
    global.fetch = jest.fn() as jest.MockedFunction<typeof fetch>;
});

afterEach(() => {
    global.fetch = originalFetch;
    jest.clearAllMocks();
});

test('renders contact form fields and submit button', () => {
    render(<Contact />);

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
});

test('shows validation errors if required fields are empty on submit', async () => {
    render(<Contact />);

    await userEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(screen.getByText(/Name is required\./i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required\./i)).toBeInTheDocument();
    expect(screen.getByText(/Message is required\./i)).toBeInTheDocument();
    expect(screen.getAllByRole('alert')).toHaveLength(3);
    expect(screen.getByLabelText(/Name/i)).toHaveAttribute('aria-describedby', 'name-error');
    expect(screen.getByLabelText(/Email/i)).toHaveAttribute('aria-describedby', 'email-error');
    expect(screen.getByLabelText(/Message/i)).toHaveAttribute('aria-describedby', 'message-error');
    expect(fetchMock()).not.toHaveBeenCalled();
});

test('shows error for invalid email format', async () => {
    render(<Contact />);

    await userEvent.type(screen.getByLabelText(/Name/i), 'Test User');
    const emailInput = screen.getByLabelText(/Email/i);
    await userEvent.type(emailInput, 'bad-email');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Hello World!');
    await userEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(emailInput).toBeInvalid();
    expect(fetchMock()).not.toHaveBeenCalled();
});

test('submits form and shows success message', async () => {
    fetchMock().mockResolvedValueOnce(jsonResponse({ success: true }));

    render(<Contact />);

    await userEvent.type(screen.getByLabelText(/Name/i), 'Alice');
    await userEvent.type(screen.getByLabelText(/Email/i), 'alice@example.com');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Hello, this is a test message.');
    await userEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText(/Thank you for your message/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toHaveValue('');
    expect(screen.getByLabelText(/Email/i)).toHaveValue('');
    expect(screen.getByLabelText(/Message/i)).toHaveValue('');
    expect(fetchMock()).toHaveBeenCalledTimes(1);
    expect(fetchMock()).toHaveBeenCalledWith('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Alice',
            email: 'alice@example.com',
            message: 'Hello, this is a test message.',
            website: '',
        }),
    });
});

test('displays server error message if API returns an error', async () => {
    fetchMock().mockResolvedValueOnce(jsonResponse({ error: 'Failed to send message.' }, 500));
    render(<Contact />);

    await userEvent.type(screen.getByLabelText(/Name/i), 'Bob');
    await userEvent.type(screen.getByLabelText(/Email/i), 'bob@example.com');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Hi');
    await userEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText(/Failed to send message\./i)).toBeInTheDocument();
});

test('displays network error message on fetch exception', async () => {
    fetchMock().mockRejectedValueOnce(new Error('Network error'));
    render(<Contact />);

    await userEvent.type(screen.getByLabelText(/Name/i), 'Carol');
    await userEvent.type(screen.getByLabelText(/Email/i), 'carol@example.com');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Hey there');
    await userEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText(/Network error\. Please try again later\./i)).toBeInTheDocument();
});

test('honeypot website field is hidden from users', () => {
    render(<Contact />);
    const websiteInput = document.querySelector<HTMLInputElement>('input[name="website"]');

    expect(websiteInput).not.toBeNull();
    expect(websiteInput).toHaveClass('hidden');
    expect(websiteInput).toHaveAttribute('aria-hidden', 'true');
});

test('shows loading state while submitting', async () => {
    let resolveFetch: ((response: Response) => void) | undefined;
    fetchMock().mockImplementationOnce(
        () =>
            new Promise<Response>((resolve) => {
                resolveFetch = resolve;
            })
    );

    render(<Contact />);
    const form = screen.getByRole('button', { name: /send message/i }).closest('form');
    await userEvent.type(screen.getByLabelText(/Name/i), 'Dan');
    await userEvent.type(screen.getByLabelText(/Email/i), 'dan@example.com');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Loading test');
    const button = screen.getByRole('button', { name: /send message/i });

    await userEvent.click(button);

    expect(button).toBeDisabled();
    expect(button).toHaveTextContent(/sending/i);
    expect(form).toHaveAttribute('aria-busy', 'true');
    expect(resolveFetch).toBeDefined();
    resolveFetch?.(jsonResponse({ success: true }));
    expect(await screen.findByText(/Thank you for your message/i)).toBeInTheDocument();
});

test('clears previous errors after successful submit', async () => {
    render(<Contact />);
    const button = screen.getByRole('button', { name: /send message/i });

    await userEvent.click(button);

    expect(screen.getByText(/Name is required\./i)).toBeInTheDocument();
    fetchMock().mockResolvedValueOnce(jsonResponse({ success: true }));
    await userEvent.type(screen.getByLabelText(/Name/i), 'Eva');
    await userEvent.type(screen.getByLabelText(/Email/i), 'eva@example.com');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Hi');
    await userEvent.click(button);

    expect(await screen.findByText(/Thank you for your message/i)).toBeInTheDocument();
    expect(screen.queryByText(/Name is required\./i)).not.toBeInTheDocument();
});
