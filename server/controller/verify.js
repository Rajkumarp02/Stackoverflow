import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  host: 'localhost',
  service: "gmail",
  port: 465,
  secure: true, // true for 465, false for other ports
  // logger: true,
  // debug: true,
  secureConnection: false,
  auth: {
    user: 'rajkumarprjpm@gmail.com',
    pass: 'czdvkthkbzqqgheq'
  },
  tls: {
    rejectUnauthorized: false,
  },
});
var randomNum = Math.floor(1000 + Math.random() * 5000);
export const mobileGet = (req, res) => {
  const email = req.body.email;
  // @ ----------- NodeMailer --------------

  var mailOptions = {
    from:"rajkumarprjpm@gmail.com",
    to: email,
    subject: "Chatbot Verification",
    text: `This OTP is for your Chatbot Verification, Your OTP is ${randomNum}`,
  };

  transporter
    .sendMail(mailOptions)
    .then((response) => {
      res.status(200).json({ Successfully: response.messageId });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json("Something went wrong... Internal Server Error");
    });
};

export const otpVerify = (req, res) => {
  const data = req.body;
  const OTP = data.otp;
  const oTp = randomNum;
  if (OTP == oTp) {
    res.status(200).json("User Verify");
  }
}

