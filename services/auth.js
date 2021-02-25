require('dotenv').config;

const SECRET = process.env.WT_SIGN_SECRET;

module.exports = (jwt) => {
  const auth_service = {
    generateToken: async (res, id, firstname) => {
     const expiration = process.env.DB_ENV === 'testing' ? 100 : 604800000;
    const token = await jwt.sign(
      {
        id, firstname
      },
      SECRET, { expiresIn: process.env.DB_ENV === 'testing' ? '1d' : '7d' }
    );
    console.log('toto', token)
    return await res.cookie('token', token, {
      expires: new Date(Date.now() + expiration),
      secure: false,
      httpOnly: true,
    });
  },

  // authenticateJWT: (req, res, next) => {
  //   const authHeader = req.headers.authorization;

  //   if (authHeader) {
  //     const token = authHeader.split(' ')[1];

  //     jwt.verify(token, SECRET, (err, user) => {
  //       if (err) {
  //         console.log('g detou', err);
  //         throw new ForbiddenError('Forbidden', 'The access is not allowed');
  //       }

  //       req.user = user;

  //       next();
  //     });
  //   } else {
  //     throw new UnauthorizedError(
  //       'Unauthorized',
  //       'You must be connected to have access to this resource'
  //     );
  //   }
  // },
  }
  return auth_service;
};
