import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@editai.com';

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export async function sendVerificationEmail(to: string, verificationUrl: string) {
  if (process.env.NODE_ENV === 'development') {
    console.log('Verification URL:', verificationUrl);
    return;
  }

  const mailOptions = {
    from: FROM_EMAIL,
    to,
    subject: 'Verify your EditAI account',
    html: `
      <h1>Welcome to EditAI!</h1>
      <p>Please click the button below to verify your email address:</p>
      <a href="${verificationUrl}" style="
        display: inline-block;
        padding: 12px 24px;
        background-color: #2563eb;
        color: white;
        text-decoration: none;
        border-radius: 6px;
        margin: 16px 0;
      ">
        Verify Email
      </a>
      <p>If the button doesn't work, you can also click this link:</p>
      <p><a href="${verificationUrl}">${verificationUrl}</a></p>
      <p>This link will expire in 24 hours.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function sendPasswordResetEmail(to: string, resetUrl: string) {
  if (process.env.NODE_ENV === 'development') {
    console.log('Password reset URL:', resetUrl);
    return;
  }

  const mailOptions = {
    from: FROM_EMAIL,
    to,
    subject: 'Reset your EditAI password',
    html: `
      <h1>Reset Your Password</h1>
      <p>You requested to reset your password. Click the button below to create a new password:</p>
      <a href="${resetUrl}" style="
        display: inline-block;
        padding: 12px 24px;
        background-color: #2563eb;
        color: white;
        text-decoration: none;
        border-radius: 6px;
        margin: 16px 0;
      ">
        Reset Password
      </a>
      <p>If the button doesn't work, you can also click this link:</p>
      <p><a href="${resetUrl}">${resetUrl}</a></p>
      <p>This link will expire in 1 hour. If you didn't request this, please ignore this email.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
} 