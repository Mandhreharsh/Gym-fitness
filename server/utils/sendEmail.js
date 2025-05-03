import nodemailer from "nodemailer";

const sendEmail = async (to, message) => {
    // Create a test SMTP account from ethereal.email
    const testAccount = await nodemailer.createTestAccount();

    // Create a transporter with Ethereal SMTP
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });

    // Send the email
    const info = await transporter.sendMail({
        from: 'fitness@gmail.com', // Fake sender
        to,
        subject: "OTP Verification",
        text: message,
    });

    // Log the preview URL (view the fake email in browser)
    console.log("✅ Preview URL:", nodemailer.getTestMessageUrl(info));
};

export default sendEmail;
