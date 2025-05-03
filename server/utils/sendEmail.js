import nodemailer from "nodemailer";

const sendEmail = async (to, message) => {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: "your-email@gmail.com",
        to,
        subject: "OTP Verification",
        text: message,
    });
};

export default sendEmail;
