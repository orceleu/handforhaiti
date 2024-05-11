import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../component/Email-template";
const resend = new Resend("re_CnDmrKKW_AM5h7Mh1iB1AbAEJrXqqH9FK");
export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["handforhaiti7@gmail.com"],
      subject: `${message}  `,
      react: EmailTemplate({
        firstName: `${name}, ${email}`,
      }) as React.ReactElement,
    });

    return Response.json({ message: "Thanks for submitting!" });
  } catch (error) {
    return Response.json({ error });
  }
}
