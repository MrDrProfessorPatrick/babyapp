const User = require('./models/User');
const Role = require('./models/Role');
const { json } = require('express');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { secret } = require('./config');
const bcrypt = require('bcryptjs');
const emailSender = require('./utils/emailSender');

const genereteAcessToken = (id, roles) => {
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
      res.status(400).json('Registration error me own');
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json({ message: `Пользователь ${username} не найден` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: 'Неверный пароль' });
      }
      const token = genereteAcessToken(user._id, user.roles);

      return res.json({ token });
    } catch (error) {
      console.log(error);
      res.status(400).json('Login error');
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.find();
      console.log('GET USERS WORKS');
      res.json({ users });
    } catch (error) {
      console.log(error);
    }
  }

  async getCurrentUser(req, res) {
    try {
      console.log('req.body.username', req.body.token);
      console.log('DECODED', jwt.decode(req.body.token));
      // console.log('req.headers.Authorization', req.headers);
      const user = await User.findOne({ username: req.body.username });
      console.log(user, 'user in getCurrentUser');
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new authController();
