const dbInteraction = require("../database/db");
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const { secret } = require('./config');
const jwt = require('jsonwebtoken');
const UserService = require('../service/user-service');
const ApiError = require('../exceptions/api-error')

// const generateAccessToken = (id) => {
//     const payload = {
//         id
//     }
//     return jwt.sign(payload, secret, { expiresIn: '1h' })
// }

const UserController = {

    async registration(req, res, next) {


        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array())) 
            }
            const { email, password } = req.body;
            const userData = await UserService.registration(email, password);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }) //если https, добавить secure: true
            return res.json(userData);
        } catch (err) {
            next(err)
        }

    },


    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await UserService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }) //если https, добавить secure: true
            return res.json(userData);

        } catch (err) {
            next(err)
        }

    },
    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            await UserService.logout(refreshToken);
            res.clearCookie('refreshToken')
            return res.status(204).send() // можно просто код 200
        } catch (err) {
            next(err)
        }
    },

    async getUsers(req, res, next) {
        try {
           const users = await UserService.getAllUsers();
           return res.json({users: users})
        } catch (err) {
            next(err)
        }
    },

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await UserService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }) //если https, добавить secure: true
            return res.json(userData);
        } catch (err) {
            next(err)
        }
    },



}

module.exports = UserController;