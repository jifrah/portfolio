import { useState } from 'react';
import { sendEmail } from '../services/emailjs';

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const useEmailJS = () => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  const send = async (data: EmailData) => {
    setSending(true);
    setError(null);
    setSuccess(false);

    try {
      await sendEmail(data);
      setSuccess(true);
    } catch (err) {
      setError(err as Error);
    } finally {
      setSending(false);
    }
  };

  return { send, sending, error, success };
};