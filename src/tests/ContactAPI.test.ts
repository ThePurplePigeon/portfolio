/**
 * @jest-environment node
 */

import { POST } from '@/app/api/contact/route';
import { Resend } from 'resend';

const sendMock = jest.fn();

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: { send: sendMock }
  }))
}));

beforeAll(() => {
  process.env.RESEND_API_KEY = 'TEST_API_KEY';
});

beforeEach(() => {
  sendMock.mockReset();
  (Resend as jest.Mock).mockClear();
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe('Contact API Route', () => {
  it('returns 500 if email service is not configured', async () => {
    const originalKey = process.env.RESEND_API_KEY;
    delete process.env.RESEND_API_KEY;
    const req = { json: async () => ({ name: 'TestName', email: 'a@b.c', message: 'Hello World!' }) } as any;
    const res = await POST(req);
    expect(res.status).toBe(500);
    const body = await res.json();
    expect(body.error).toMatch(/Email service not configured/i);
    expect(sendMock).not.toHaveBeenCalled();
    process.env.RESEND_API_KEY = originalKey;
  });

  it('returns success if honeypot field (website) is filled', async () => {
    const req = { json: async () => ({ name: 'Bot', email: 'bot@example.com', message: 'Spam message', website: 'http://spam.com' }) } as any;
    const res = await POST(req);
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body).toEqual({ success: true });
    expect(sendMock).not.toHaveBeenCalled();
  });

  it('return 400 for invalid or missing fields', async () => {
    const req = { json: async () => ({ name: '', email: 'not-an-email', message: '' }) } as any;
    const res = await POST(req);
    const body = await res.json();
    expect(res.status).toBe(400);
    expect(body.error).toMatch(/Missing or invalid fields/i);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it('returns 400 if any field is too long', async () => {
    const longName = 'A'.repeat(101);
    const req = {
      json: async () => ({
        name: longName,
        email: 'test@example.com',
        message: 'Hello',
        website: ''
      })
    } as any;
    const res = await POST(req);
    const body = await res.json();
    expect(res.status).toBe(400);
    expect(body.error).toBe('Field too long.');
    expect(sendMock).not.toHaveBeenCalled();
  });

  it('sends email and returns success for valid input', async () => {
    sendMock.mockResolvedValueOnce({ id: 'email-id-123' });
    const req = {
      json: async () => ({
        name: 'Alice',
        email: 'alice@example.com',
        message: 'Hello',
        website: ''
      })
    } as any;
    const res = await POST(req);
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body).toEqual({ success: true });
    expect(sendMock).toHaveBeenCalledTimes(1);
    const expectedSubject = expect.stringContaining('Alice');
    expect(sendMock).toHaveBeenCalledWith({
      from: expect.any(String),
      to: expect.any(String),
      subject: expectedSubject,
      replyTo: 'alice@example.com',
      text: expect.stringContaining('Hello')
    });
  });

  it('returns 500 if the email sending fails', async () => {
    sendMock.mockRejectedValueOnce(new Error('Resend service error'));
    const req = { json: async () => ({ name: 'John', email: 'john@example.com', message: 'Hi', website: '' }) } as any;
    const res = await POST(req);
    const body = await res.json();
    expect(res.status).toBe(500);
    expect(body.error).toBe('Failed to send email.');
  });
});
