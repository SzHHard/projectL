
const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware')
const avatarMiddleware = require('../middlewares/avatar-middleware')
const UserService = require('../service/user-service')

const avatarsRouter = express.Router();



avatarsRouter.post('/upload', authMiddleware, avatarMiddleware.single('avatar'), async (req, res) => {
    try {
        if(req.file) {
            console.log(req.file.path) // здесь еще засунуть path в базу. 14:29

            console.log(req.user.id)
            
            await UserService.updateAvatar(req.user.id, req.file.path);

            res.json(req.file)   // тут будем отправлять req.file.path после проверки
        }
    } catch(err) {
        console.log(err)
    }
})



module.exports = avatarsRouter;
