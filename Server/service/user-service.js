const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error');

const UserService = {

    async registration(profileName, email, password) {
        const candidate = await UserModel.findOne({ email })
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 8)
        // const activationLink 
        const user = await UserModel.create({ profileName, email, password: hashPassword });
        // await mailService.sendActivationMail(email, activationLink);

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto }
    },

    async login(email, password) {
        const user = await UserModel.findOne({ email })
        if (!user) {
            throw ApiError.BadRequest('Неверный email или пароль')
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный email или пароль')
        }
        const userDto = new UserDto(user);

        const tokens = tokenService.generateTokens({ ...userDto })
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto }
    },

    async logout(refreshToken) {
        await tokenService.removeToken(refreshToken);
        return;
    },

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthoruzedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);

        const tokenFromDb = await tokenService.findToken(refreshToken);

        if (!userData || !tokenFromDb) {

            throw ApiError.UnauthoruzedError();
        }
        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto })
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto }
    },


    async getAllUsers() {
        const users = await UserModel.find();
        return users;
    },

    async updateAvatar(id, avatarPath) {
        console.log('here')
       const user =  await UserModel.findOne({_id: id})
       console.log(user);
        await UserModel.updateOne({ _id: id }, { $set: { avatarPath: avatarPath } })
    }


}

module.exports = UserService;