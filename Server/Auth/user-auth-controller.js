const dbInteraction = require("../database/db");
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const { secret } = require('./config');
const jwt = require('jsonwebtoken');
const userService = require('../service/user-service');

// const generateAccessToken = (id) => {
//     const payload = {
//         id
//     }
//     return jwt.sign(payload, secret, { expiresIn: '1h' })
// }

const UserController = {

    async registration(req, res) {


        try {
            const {email, password} = req.body;
            const userData = await userService.registration(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true}) //если https, добавить secure: true
            return res.json(userData);
        } catch (err) {
            console.log(err);
        }


        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ message: "ошибка при регистрации", errors });
        // }

        // const { nickName, login, password } = req.body;
        // dbInteraction.findUserByLogin(login, (err, row) => {

        //     if (err) {
        //         console.log(err);
        //         return;
        //     }

        //     let candidate = row;

        //     if (candidate) {
        //         res.status(400).json({ error: 'user with this login alreadt exists' })
        //         return;
        //     } else {
        //         const hashedPassword = bcrypt.hashSync(password, 8);
        //         const newUserId = dbInteraction.registerUser(nickName, login, hashedPassword);
        //         console.log('newUserId: ' + newUserId);  // обработать асинхронность когда будет нужно.
        //         res.json({ message: `Пользователь с id = ${newUserId} успешно зарегистрирован` })
        //     }

        // });



    },


    async login(req, res) {
        // const { login, password } = req.body
        // dbInteraction.findUserByLogin(login, (err, user) => {
        //     if (err) {
        //         console.log(err);
        //     }

        //     const isValid = bcrypt.compareSync(password, user.password);
        //     if (!isValid || !user) {
        //         return res.status(400).json({ message: `Пользователь не найден` });
        //     } else {
        //         const token = generateAccessToken(user.id)
        //         return res.json({token})
        //     }
        // })

        try {

        } catch (err) {

        }

    },
    async logout(req, res) {
        try {
            res.json("works")
        } catch (err) {

        }
    },

    async getUsers(req, res) {
        try {
            res.json("works")
        } catch (err) {

        }
    },

    async refresh(req, res) {
        try {
            res.json("works")
        } catch (err) {

        }
    },



}

module.exports = UserController;