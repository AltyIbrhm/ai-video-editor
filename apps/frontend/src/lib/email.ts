import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@editai.app';

export async function sendVerificationEmail(to: string, verificationUrl: string) {
  // Always log the URL in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Verification URL:', verificationUrl);
  }

  // Check if SendGrid is configured
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SendGrid API key not configured');
    return;
  }

  const msg = {
    to,
    from: FROM_EMAIL,
    subject: 'Verify your EditAI account',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb; margin-bottom: 24px;">Welcome to EditAI!</h1>
        <p style="color: #374151; font-size: 16px; line-height: 24px;">
          Please verify your email address to get started with EditAI.
        </p>
        <div style="margin: 32px 0;">
          <a href="${verificationUrl}" 
             style="background-color: #2563eb; color: white; padding: 12px 24px; 
                    text-decoration: none; border-radius: 6px; display: inline-block;">
            Verify Email
          </a>
        </div>
        <p style="color: #6B7280; font-size: 14px;">
          If the button doesn't work, you can copy and paste this link into your browser:
        </p>
        <p style="color: #2563eb; word-break: break-all;">
          <a href="${verificationUrl}" style="color: inherit;">${verificationUrl}</a>
        </p>
        <p style="color: #6B7280; font-size: 14px; margin-top: 24px;">
          This link will expire in 24 hours.
        </p>
        <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 24px 0;" />
        <p style="color: #6B7280; font-size: 12px;">
          If you didn't create an account with EditAI, you can safely ignore this email.
        </p>
      </div>
    `,
  };

  try {
    console.log('Attempting to send email to:', to);
    const result = await sgMail.send(msg);
    console.log('Email sent successfully:', result);
  } catch (error) {
    console.error('Error sending verification email:', error);
    throw new Error('Failed to send verification email');
  }
}

export async function sendPasswordResetEmail(to: string, resetUrl: string) {
  // Always log the URL in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Password reset URL:', resetUrl);
  }

  // Check if SendGrid is configured
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SendGrid API key not configured');
    return;
  }

  const msg = {
    to,
    from: FROM_EMAIL,
    subject: 'Reset your EditAI password',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb; margin-bottom: 24px;">Reset Your Password</h1>
        <p style="color: #374151; font-size: 16px; line-height: 24px;">
          You requested to reset your password. Click the button below to create a new password:
        </p>
        <div style="margin: 32px 0;">
          <a href="${resetUrl}" 
             style="background-color: #2563eb; color: white; padding: 12px 24px; 
                    text-decoration: none; border-radius: 6px; display: inline-block;">
            Reset Password
          </a>
        </div>
        <p style="color: #6B7280; font-size: 14px;">
          If the button doesn't work, you can copy and paste this link into your browser:
        </p>
        <p style="color: #2563eb; word-break: break-all;">
          <a href="${resetUrl}" style="color: inherit;">${resetUrl}</a>
        </p>
        <p style="color: #6B7280; font-size: 14px; margin-top: 24px;">
          This link will expire in 1 hour. If you didn't request this, please ignore this email.
        </p>
        <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 24px 0;" />
        <p style="color: #6B7280; font-size: 12px;">
          If you didn't request a password reset, you can safely ignore this email.
        </p>
      </div>
    `,
  };

  try {
    console.log('Attempting to send password reset email to:', to);
    const result = await sgMail.send(msg);
    console.log('Password reset email sent successfully:', result);
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw new Error('Failed to send password reset email');
  }
} 