import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  // Extract the firstName, email, and message from the request body
  const { email, message } = req.body;

  // Validate the incoming data
  if ( !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Use the firstName in the EmailTemplate
    const { data, error } = await resend.emails.send({
      from: 'veebiteed.ee <onboarding@resend.dev>',
      to: 'lajenode@tuta.io', // Send the email to the user-provided email address
      subject: 'saatja: ' + email,
      react: EmailTemplate({ email, message }), // Pass the firstName to the template
    });

    if (error) {
      return res.status(400).json({ error });
    }

    return res.status(200).json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};