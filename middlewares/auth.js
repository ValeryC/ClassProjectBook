const jwt = require('jsonwebtoken');
require('dotenv').config;

const SECRET = process.env.WT_SIGN_SECRET;

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token || '';
  try {
    if (!token) {
      return res.status(401).json('You need to Login')
    }
    const decrypt = await jwt.verify(token, SECRET);
    req.user = {
      id: decrypt.id,
      firstname: decrypt.firstname,
    };
    next();
  } catch (err) {
    return res.status(500).json(err.toString());
  }
};

module.exports = verifyToken;

