import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function POST(request: NextRequest) {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  } as SMTPTransport.Options);

  const { name, email, message } = await request.json();

  try {
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MY_EMAIL,
      subject: `${name} message`,
      html: `
              <p>Name: ${name} </p>
              <p>Email: ${email} </p>
              <p>Message: ${message} </p>
              `,
    });

    return NextResponse.json(
      { message: "Success: email was sent" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE" },
      { status: 500 }
    );
  }
}
