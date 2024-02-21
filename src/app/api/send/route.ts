import { EmailTemplate } from '@/components/emailTemplate';
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const json = req.json();
    const { name, email, message } = await json;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['astrodevs-labs@proton.me'],
      subject: 'Nouveau message de ' + name,
      react: EmailTemplate({ name, email, message}),
      text: 'useless text ??',
    });

    if (data.error) {
      console.error("data.error :");
      console.error(data.error);
      return NextResponse.json({ data, error: data.error }, { status: 500 });
    } else {
      return NextResponse.json({ data, error: null }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({error});

  }
}
