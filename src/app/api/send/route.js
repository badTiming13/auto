// route.js
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const { data, error } = await resend.emails.send({
    from: 'Automate Me <customer-request@automate-me.at>',
    to: ['el.touch.shop@gmail.com'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'John' }),
  });

  if (error) {
    return Response.json({ error });
  }

  return Response.json(data);
}