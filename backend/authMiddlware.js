const jwt = require('jsonwebtoken');
const { secret } = require('./config');

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(req.headers.authorization, 'token in authMiddleware');
    if (!token) {
      return res.status(403).json({ error: true, message: 'User is not authorized' });
    }

    jwt.verify(token, secret, function (err, decoded) {
      // need to pass User's id in token
      console.log('decoded inside tokenChecker', decoded);
      if (err) {
        return res.status(401).json({ error: true, message: 'Unauthorized access.' });
      }

      req.decodedUserData = decoded;
      next();
    });
  } catch (error) {
    console.log('error inside authMiddlware', error);
    return res.status(403).json({ message: 'User is not authorized' });
  }
};
// to compare refreshToken => if token is expired ask to login => if not send new accessToken
