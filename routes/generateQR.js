const fs = require("fs");
const qrcode = require("qrcode");
const {
  generateCode,
  signToken,
  verifyToken,
  generateRandomHash,
} = require("../utils");

const encode = async (req, res) => {
  try {
    const hashed_user_id = signToken({ user_id: req.params.user_id });
    const encoded_user_url = `https://golden-pen.com/?token=${hashed_user_id}`;
    const output_path = `code-${generateRandomHash()}`;

    // UPLOADED ENCODED URL ON SERVER

    generateCode(encoded_user_url, output_path);
    res
      .status(200)
      .json({ code: 200, message: "Generated QRcode", hash: hashed_user_id });
  } catch (error) {
    return error;
  }
};

const decode = async (req, res) => {
  try {
    const { user_id } = verifyToken(req.body.token);

    // CONFIRM IF USER ID EXIST IN DATABASE

    res.status(200).json({ code: 200, message: "Decoded", user_id });
  } catch (error) {
    return error;
  }
};

module.exports = { encode, decode };
