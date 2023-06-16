const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET = process.env.SECRET;

function generateAccessToken(email, role, id) {
  return jwt.sign({ email, role, id }, SECRET, { expiresIn: "36000s" });
}

module.exports = { generateAccessToken };
