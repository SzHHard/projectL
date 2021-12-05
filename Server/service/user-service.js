const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')

const UserService = {

    async registration(email, password) {
        const candidate = await UserModel.findOne({ email })
        if(candidate) {
            throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 8)
         // const activationLink 
        const user = await UserModel.create({email, password: hashPassword});       
       // await mailService.sendActivationMail(email, activationLink);

        const userDto = new UserDto(user) // id, email, isActivated. We don't want to pass the password into jwt payload
        const tokens = tokenService.generateTokens( {...userDto} );
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto}
    }


}