import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Verifique as variáveis de ambiente
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const recipientEmail = 'aquiliviomaria@gmail.com'; // O seu e-mail para onde as mensagens serão enviadas

    console.log('DEBUG: EMAIL_USER:', emailUser ? 'DEFINIDO' : 'NÃO DEFINIDO');
    console.log('DEBUG: EMAIL_PASS:', emailPass ? 'DEFINIDO' : 'NÃO DEFINIDO');
    // --- Fim dos logs temporários ---

    if (!emailUser || !emailPass) {
      console.error('As variáveis de ambiente EMAIL_USER ou EMAIL_PASS não estão definidas.');
      return NextResponse.json(
        { message: 'Erro de configuração do servidor. Por favor, tente novamente mais tarde.' },
        { status: 500 }
      );
    }

    if (!emailUser || !emailPass) {
      console.error('As variáveis de ambiente EMAIL_USER ou EMAIL_PASS não estão definidas.');
      return NextResponse.json(
        { message: 'Erro de configuração do servidor. Por favor, tente novamente mais tarde.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Ou o serviço do seu provedor de e-mail (e.g., 'outlook', 'sendgrid')
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: emailUser, // O e-mail que você configurou no .env.local
      to: recipientEmail, // O seu e-mail para onde as mensagens do formulário irão
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

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { message: 'Falha ao enviar o email. Por favor, tente novamente.' },
      { status: 500 }
    );
  }
}