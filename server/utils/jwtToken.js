export const generateToken = (user, message, statusCode, res) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  res.status(statusCode)
    .cookie("patientToken", token, {
      httpOnly: true,
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
      sameSite: "None", // for cross-site cookies (Vercel + Render)
      secure: true,     // only on https
    })
    .json({
      success: true,
      message,
      user,
    });
};
