const express = require("express");
const UserController = require('./user-auth-controller')
const {check} = require('express-validator')

const authRouter = express.Router();

authRouter.post('/registration', [ 
    check('nickName', 'Имя пользователя не может быть пустым').notEmpty(),
    check('login', "Логин не может быть меньше четырех символов").isLength({min: 4}),
    check('password', "Пароль должен быть больше четырех символов").isLength({min: 4})
])
authRouter.post('/registration', UserController.registration)
authRouter.post('/login', UserController.login)
authRouter.post('/logout', UserController.logout)

authRouter.get('/refresh', UserController.refresh)
authRouter.get('/users', UserController.getUsers)

module.exports = authRouter;