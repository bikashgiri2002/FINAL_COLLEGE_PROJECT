import nodemailer from "nodemailer";

// Create transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send confirmation email
export const sendConfirmationEmail = async (to, name) => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>Welcome, ${name}!</h2>
      <p>🎉 Thank you for registering your shop on <strong>StockMate</strong>.</p>
      <p>We’re thrilled to have you on board!</p>
      <p style="margin-top: 20px;">Best regards,<br>The StockMate Team</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"StockMate" <${process.env.EMAIL_USER}>`,
      to,
      subject: "🎉 Welcome to StockMate - Your Shop is Registered!",
      html: htmlContent,
    });

  } catch (error) {
    console.error("❌ Failed to send confirmation email:", error.message);
    throw error; // Important: rethrow to handle in your route
  }
};

// Optionally export reset password email sender
export const sendPasswordResetEmail = async (to, name, resetURL) => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>Hello, ${name}</h2>
      <p>We received a request to reset your password.</p>
      <p>Click the button below to reset it. This link will expire in 15 minutes:</p>
      <p><a href="${resetURL}" style="padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 4px;">Reset Password</a></p>
      <p>If you didn't request a password reset, you can ignore this email.</p>
      <p style="margin-top: 20px;">Best regards,<br>The StockMate Team</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"StockMate" <${process.env.EMAIL_USER}>`,
      to,
      subject: "🔐 Reset Your Password - StockMate",
      html: htmlContent,
    });

  } catch (error) {
    console.error("❌ Failed to send password reset email:", error.message);
    throw error;
  }
};
