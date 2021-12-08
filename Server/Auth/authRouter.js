const express = require("express");
const UserController = require('./user-auth-controller')
const { check, body } = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware');

const authRouter = express.Router();

authRouter.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min:4, max: 32}),
    UserController.registration)

authRouter.post('/login', UserController.login)
authRouter.delete('/logout', UserController.logout)

authRouter.get('/refresh', UserController.refresh)
authRouter.get('/users', authMiddleware,  UserController.getUsers)
// authRouter.get('/usersForPage')

module.exports = authRouter;