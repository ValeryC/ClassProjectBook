require('dotenv').config;


module.exports = (jwt) => {
  const auth_service = {
    generateToken: async (res, id, firstname) => {
      const SECRET = process.env.WT_SIGN_SECRET;
    
      const token = await jwt.sign(
      {
        id, firstname
      },
      SECRET, { expiresIn: "24h" }
      );
      res.cookie('token', token, {
        maxAge: 3600000,
        secure: false,
        httpOnly: true,
      })
  }
  }
  return auth_service;
};
