/**
 * @jest-environment node
 */

import { POST } from '@/app/api/contact/route';
import { Resend } from 'resend';

type EmailPayload = {
  from: string;
  to: string;
  subject: string;
  replyTo: string;
  text: string;
};

const mockSend = jest.fn<(payload: EmailPayload) => Promise<{ id: string }>>();

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: { send: mockSend }
  }))
}));

const mockedResend = Resend as unknown as jest.MockedClass<typeof Resend>;

const jsonRequest = (body: unknown, headers: HeadersInit = {}) =>
  new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  });

const malformedJsonRequest = () =>
  new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: '{',
  });

const lastEmailPayload = () => {
  const payload = mockSend.mock.calls[0]?.[0];
  expect(payload).toBeDefined();
  return payload as EmailPayload;
};

beforeAll(() => {
  process.env.RESEND_API_KEY = 'TEST_API_KEY';
});

beforeEach(() => {
  mockSend.mockReset();
  mockedResend.mockClear();
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe('Contact API Route', () => {
  it('returns 500 if email service is not configured', async () => {
    const originalKey = process.env.RESEND_API_KEY;
    delete process.env.RESEND_API_KEY;

    const res = await POST(jsonRequest({
      name: 'TestName',
      email: 'a@b.c',
      message: 'Hello World!',
    }));

    expect(res.status).toBe(500);
    await expect(res.json()).resolves.toEqual({
      error: expect.stringMatching(/Email service not configured/i),
    });
    expect(mockSend).not.toHaveBeenCalled();
    process.env.RESEND_API_KEY = originalKey;
  });

  it('returns success if honeypot field (website) is filled', async () => {
    const res = await POST(jsonRequest({
      name: 'Bot',
      email: 'bot@example.com',
      message: 'Spam message',
      website: 'http://spam.com',
    }));

    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ success: true });
    expect(mockSend).not.toHaveBeenCalled();
  });

  it('returns 400 for invalid or missing fields', async () => {
    const res = await POST(jsonRequest({ name: '', email: 'not-an-email', message: '' }));
    const body = await res.json();

    expect(res.status).toBe(400);
    expect(body.error).toMatch(/Missing or invalid fields/i);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it('returns 400 if any field is too long', async () => {
    const res = await POST(jsonRequest({
      name: 'A'.repeat(101),
      email: 'test@example.com',
      message: 'Hello',
      website: '',
    }));
    const body = await res.json();

    expect(res.status).toBe(400);
    expect(body.error).toBe('Field too long.');
    expect(mockSend).not.toHaveBeenCalled();
  });

  it('sends email and returns success for valid input', async () => {
    mockSend.mockResolvedValueOnce({ id: 'email-id-123' });

    const res = await POST(jsonRequest({
      name: 'Alice',
      email: 'alice@example.com',
      message: 'Hello',
      website: '',
    }));

    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ success: true });
    expect(mockSend).toHaveBeenCalledTimes(1);
    expect(mockSend).toHaveBeenCalledWith({
      from: expect.any(String),
      to: expect.any(String),
      subject: expect.stringContaining('Alice'),
      replyTo: 'alice@example.com',
      text: expect.stringContaining('Hello')
    });
  });

  it('returns 500 if the email sending fails', async () => {
    mockSend.mockRejectedValueOnce(new Error('Resend service error'));

    const res = await POST(jsonRequest({
      name: 'John',
      email: 'john@example.com',
      message: 'Hi',
      website: '',
    }));

    expect(res.status).toBe(500);
    await expect(res.json()).resolves.toEqual({ error: 'Failed to send email.' });
  });

  it('sanitizes input fields before sending', async () => {
    mockSend.mockResolvedValueOnce({ id: 'sanitized-1' });

    const res = await POST(jsonRequest({
      name: 'Alice\nBob',
      email: 'alice@example.com\n',
      message: '<b>Hello</b>',
      website: '',
    }));

    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ success: true });
    expect(mockSend).toHaveBeenCalledTimes(1);
    const args = lastEmailPayload();
    expect(args.subject).toContain('Alice Bob');
    expect(args.subject).not.toMatch(/[\r\n]/);
    expect(args.replyTo).toBe('alice@example.com');
    expect(args.text).toContain('Hello');
    expect(args.text).not.toMatch(/<[^>]*>/);
  });

  it('returns 400 for invalid JSON', async () => {
    const res = await POST(malformedJsonRequest());

    expect(res.status).toBe(400);
    await expect(res.json()).resolves.toEqual({ error: 'Invalid JSON.' });
    expect(mockSend).not.toHaveBeenCalled();
  });

  it('returns 415 for non-json content types', async () => {
    const res = await POST(jsonRequest(
      { name: 'Alice', email: 'alice@example.com', message: 'Hello' },
      { 'content-type': 'text/plain' }
    ));

    expect(res.status).toBe(415);
    await expect(res.json()).resolves.toEqual({ error: 'Unsupported content type.' });
    expect(mockSend).not.toHaveBeenCalled();
  });

  it('returns 413 for oversized requests', async () => {
    const res = await POST(jsonRequest(
      { name: 'Alice', email: 'alice@example.com', message: 'Hello' },
      { 'content-length': '4097' }
    ));

    expect(res.status).toBe(413);
    await expect(res.json()).resolves.toEqual({ error: 'Request too large.' });
    expect(mockSend).not.toHaveBeenCalled();
  });

  it('uses "Anonymous" in subject when name is blank', async () => {
    mockSend.mockResolvedValueOnce({ id: 'anon-1' });

    const res = await POST(jsonRequest({
      name: '',
      email: 'anon@example.com',
      message: 'Hi',
      website: '',
    }));

    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ success: true });
    const args = lastEmailPayload();
    expect(args.subject).toMatch(/Anonymous/);
    expect(args.replyTo).toBe('anon@example.com');
  });

  it('trims whitespace around inputs', async () => {
    mockSend.mockResolvedValueOnce({ id: 'trim-1' });

    const res = await POST(jsonRequest({
      name: '  Bob  ',
      email: '  bob@example.com  ',
      message: '  Hi  ',
      website: '',
    }));

    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ success: true });
    const args = lastEmailPayload();
    expect(args.subject).toContain('Bob');
    expect(args.replyTo).toBe('bob@example.com');
    expect(args.text).toContain('Hi');
  });
});
