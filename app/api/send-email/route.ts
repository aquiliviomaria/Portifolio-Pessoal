import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Input validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Todos os campos (nome, email, assunto, mensagem) são obrigatórios.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Formato de email inválido.' },
        { status: 400 }
      );
    }

    // Environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const recipientEmail = 'aquiliviomaria@gmail.com';

    console.log('DEBUG: EMAIL_USER:', emailUser ? 'DEFINIDO' : 'NÃO DEFINIDO');
    console.log('DEBUG: EMAIL_PASS:', emailPass ? 'DEFINIDO' : 'NÃO DEFINIDO');

    if (!emailUser || !emailPass) {
      console.error('As variáveis de ambiente EMAIL_USER ou EMAIL_PASS não estão definidas.');
      return NextResponse.json(
        { message: 'Erro de configuração do servidor. Por favor, tente novamente mais tarde.' },
        { status: 500 }
      );
    }

    // Configure nodemailer transporter for Gmail
    // Note: For Gmail, use an App Password (not your regular password) due to 2FA.
    // Generate at: https://myaccount.google.com/security > 2-Step Verification > App Passwords
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: emailUser,
      to: recipientEmail,
      subject: `Portfólio - ${subject}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email enviado com sucesso!' }, { status: 200 });
  } catch (error: any) {
    console.error('Erro ao enviar email:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    return NextResponse.json(
      { message: 'Falha ao enviar o email. Por favor, tente novamente.' },
      { status: 500 }
    );
  }
}