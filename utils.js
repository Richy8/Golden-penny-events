const qrcode = require("qrcode");
const jwt = require("jsonwebtoken");
const { APP_SECRET, TOKEN_LIFE } = require("./config");

const qrOptions = {
  errorCorrectionLevel: "H",
  version: 14,
  margin: 2,
};

const signToken = (data, expiresIn = TOKEN_LIFE) => {
  try {
    return jwt.sign(data, APP_SECRET, { expiresIn });
  } catch (error) {
    return error?.message;
  }
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, APP_SECRET);
  } catch (error) {
    return error?.message;
  }
};

const generateCode = (userPayload, outputPath) => {
  const qrPath = `./qr-codes/${outputPath}.png`;

  qrcode.toFile(qrPath, userPayload, qrOptions, (err) => {
    if (err) {
      console.error("Error generating QR code:", err);
    } else {
      console.log("QR code generated successfully");
    }
  });
};

const generateRandomHash = (length = 6) => {
  let randomstring = "";
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

  for (let i = 0; i < length; i++) {
    const rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
};

module.exports = { generateCode, signToken, verifyToken, generateRandomHash };
