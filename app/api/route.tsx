import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
        setting service as 'gmail' is same as providing these setings:
  
        host: "smtp.gmail.com",
        port: 465,
        secure: true
        
        If you want to use a different email provider other than gmail, you need to provide these manually.
        Or you can go use these well known services and their settings at
        https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
    */
    auth: {
      user: "handforhaiti7@gmail.com",
      pass: "gpnt xopm eiaa oqcv",
    },
  });
  const mailOptions: Mail.Options = {
    from: "handforhaiti7@gmail.com",
    to: "handforhaiti7@gmail.com",
    //cc: email, //(uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Thanks for submitting");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    sendMailPromise();
    return NextResponse.json({ message: "Thanks for submitting" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
