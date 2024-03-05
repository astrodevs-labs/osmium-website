import { EmailTemplate } from '@/components/emailTemplate';
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const json = req.json();
    const { name, email, message, token } = await json;

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_API_KEY}&response=${token}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        method: "POST",
      }
    );
    const captchaValidation = await response.json();
    if (captchaValidation.success) {
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['astrodevs-labs@proton.me'],
        subject: 'Nouveau message de ' + name,
        react: EmailTemplate({ name, email, message}),
        text: 'useless text ??',
      });
  
      if (data.error) {
        console.error("data.error :", data.error);
        return NextResponse.json({ data, error: data.error }, { status: 500 });
      } else {
        return NextResponse.json({ data, error: null }, { status: 200 });
      }
    } else {
      return NextResponse.json({
      message: "Unproccesable request, Invalid captcha code",
      error: null }, { status: 422 });
    }  
  } catch (error) {
    return NextResponse.json({error});
  }
}
