const User = require('./models/User');
const Role = require('./models/Role');
const AccessToken = require('./models/AccessToken');
const { json } = require('express');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { secret, refreshTokenSecret } = require('./config');
const bcrypt = require('bcryptjs');
const emailSender = require('./utils/emailSender');

const genereteToken = (id, roles, secret) => {
  const payload = { id, roles };
  return jwt.sign(payload, secret, { expiresIn: '24h' });
};

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Ошибка при регистрации' });
      }

      const { username, password, email } = req.body;
      const candidate = await User.findOne({ username });
      // emailSender(email, username, password, 'First email', 'Body of email');
      // TODO; // Doesn't work

      if (candidate) {
        return res.status(400).json('User with this name already exists');
      }

      const hashPassword = bcrypt.hashSync(password, 5);
      const userRole = await Role.findOne({ value: 'USER' });
      const user = new User({ username, email, password: hashPassword, roles: [userRole.value] });

      await user.save();
      return res.json('User was successfully registered');
    } catch (error) {
      res.status(400).json('Registration error my own');
    }
  }

  async login(req, res) {
    try {
      console.log('req.body', req.body);
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      const userId = user.id;
      console.log(user, 'user inside login authController');
      if (!user) {
        return res.status(400).json({ message: `Пользователь ${username} не найден` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: 'Неверный пароль' });
      }
      const accessToken = genereteToken(user._id, user.roles, secret);
      const refreshToken = genereteToken(user._id, user.roles, refreshTokenSecret);
      const AccessTokenById = new AccessToken({ userId, accessToken, refreshToken });
      AccessTokenById.save();
      // console.log('Tokens in login', res.json({ token, refreshToken }));
      return res.status(200).json({ userId, accessToken, refreshToken });
    } catch (error) {
      console.log(error);
      res.status(400).json('Login error');
    }
  }

  async getAccessToken(req, res) {
    const refreshToken = req.cookies.refreshToken.split(' ')[0];
    let accessToken;
    console.log(refreshToken, 'refreshToken');
    if (!refreshToken) {
      return res.status(403).json({ error: true, message: 'You need to login' });
    }

    jwt.verify(refreshToken, refreshTokenSecret, function (err, decoded) {
      if (err) {
        console.log(err, 'err');
        return res.status(403).json({ error: true, message: 'You need to login token is invalid' });
      }
      console.log('decoded inside getAccessToken', decoded);

      accessToken = genereteToken(decoded.id, decoded.roles, secret);
      res.accessToken = accessToken;
    });
    console.log('request Cookies', req.cookies.refreshToken);
    console.log('getAccessToken req and DOCUMENT COOKIE');

    return res.status(200).json(accessToken);
  }

  // {    res.set();
  //   'Access-Control-Allow-Credentials': 'true',
  //   'Access-Control-Allow-Origin': 'http://localhost:5002',
  //   'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  //   'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
  // }

  async getUsers(req, res) {
    try {
      console.log('req inside getUsers', req);
      const users = await User.find();
      console.log('decoded User Data', req.decodedUserData);
      res.json({ users });
    } catch (error) {
      console.log(error);
    }
  }

  async getCurrentUser(req, res) {
    try {
      await console.log('req.decodedUserData', req.decodedUserData.id);
      const user = await User.findById(req.decodedUserData.id);
      await console.log(user, 'user in getCurrentUser');
      return res.status(200).json(user);
    } catch (error) {
      console.log('error inside getCurrentUser', error);
    }
  }
}

module.exports = new authController();

// add access and Refresh tokens to DB and on front on login => add refreshToken into cookies and accessToken store
// on dataRequest check accessToken and compare with DB token
// if accessToken good => give access
// if accessToken bad => renew it by refreshToken
