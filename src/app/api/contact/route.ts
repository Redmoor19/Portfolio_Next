import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
  const username = process.env.EMAIL_USERNAME;
  const password = process.env.EMAIL_PASSWORD;
  const myEmail = process.env.PERSONAL_EMAIL;

  const transporter = nodemailer.createTransport({
    host: "smtp.mailersend.net",
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: username,
      pass: password,
    },
  });

  const { name, email, message } = await request.json();

  try {
    await transporter.sendMail({
      from: username,
      to: myEmail,
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
    NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 });
  }
}
