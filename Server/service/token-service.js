const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token-model');
const TokenModel = require('../models/token-model');
const ApiError = require('../exceptions/api-error')

const TokenService = {

    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});
        return {
            accessToken,
            refreshToken
        }
    },

    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({user: userId});
        if(tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await tokenModel.create({user: userId, refreshToken})
        return token;
    },
    async removeToken(refreshToken) {
        await tokenModel.deleteOne({refreshToken})
        return;

    },

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            return userData;
        } catch(err) {
            return null;
        }
    },

    validateRefreshToken(token) {
          try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
            return userData;
        } catch(err) {
            return null;
        }
    },
    async findToken(refreshToken) {
        await tokenModel.findOne({refreshToken})
        return;

    },

}

module.exports = TokenService;