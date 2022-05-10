const Router = require('express');
const router = new Router();
const controller = require('./authController');
const { check } = require('express-validator');
const cors = require('cors');
const authMiddleware = require('./authMiddlware');
const roleMiddleware = require('./roleMiddleware');

router.post(
  '/registration',
  [
    check('username', 'Имя пользователя не может быть пустым'),
    check('password', 'Пароль может быть больше 4 или меньше 10 символов').isLength({
      min: 3,
      max: 10,
    }),
  ],
  controller.registration
);
router.post('/login', controller.login);
router.get('/users', authMiddleware, roleMiddleware(['ADMIN']), controller.getUsers);
router.post('/currentuser', roleMiddleware(['ADMIN']), controller.getCurrentUser);

module.exports = router;
