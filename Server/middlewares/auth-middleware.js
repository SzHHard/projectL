const ApiError = require('../exceptions/api-error');
const TokenService = require('../service/token-service')

module.exports = function (req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;
        console.log('log from middleware; authToken: ' + authorizationHeader);
        if(!authorizationHeader) {
            return next(ApiError.UnauthoruzedError());
        }
        const accessToken = authorizationHeader.split(' ')[1];
        if(!accessToken) {
            return next(ApiError.UnauthoruzedError());
        }
        const userData = TokenService.validateAccessToken(accessToken);
        // console.log('log from middleware; userData1: ' + userData);
        if(!userData) {
            return next(ApiError.UnauthoruzedError());
        }
        
        console.log('log from middleware; userData.id: ' + userData.id);
        req.user = userData;
        next();

    } catch(err) {
        console.log(err);
        return next(ApiError.UnauthoruzedError());
    }
}