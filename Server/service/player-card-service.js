
const PlayerCardModel = require('../models/player-card-model')


const GREATER_THAN_RANK = 'GREATER_THAN_RANK'
const ROLES_INCLUDE_ANY_OF_THE_GIVEN = 'ROLES_INCLUDE_ANY_OF_THE_GIVEN'
const GET_ALL_CARDS = 'GET_ALL_CARDS'

const getAllCardsAC = () => {
    return { type: GET_ALL_CARDS }
}
const rolesIncludeAnyOfTheGivenAC = (role) => {
    return { type: ROLES_INCLUDE_ANY_OF_THE_GIVEN, role }
}
const greaterThanRankAC = (rank) => {
    return { type: GREATER_THAN_RANK }
}




const PlayerCardService = {

    async creatingCard(userId, cardData) {

        const card = await PlayerCardModel.create({ user: userId, ...cardData });

        return card;
    },

    async getAllCards() {
        const cards = await PlayerCardModel.find();
        return cards;
    },

    async getCardsWithFilters(action) {
        let cards = []
        switch (action.type) {
            case GREATER_THAN_RANK:
                cards = await PlayerCardModel.find({ rank: { $gte: action.rank } });
                return cards;
            case ROLES_INCLUDE_ANY_OF_THE_GIVEN:
                cards = await PlayerCardModel.find( { $or: [{ mainRoles: { $elemMatch: { $eq: action.role}}}, { offRoles: { $elemMatch: { $eq: action.role}}} ] });       // action.roles = array of strings 
                return cards;
            case GET_ALL_CARDS:
                cards = await PlayerCardModel.find();
                return cards;
            default:
                console.log("WRONG ACTION!!!!!!!");
        }
        //const cards = await PlayerCardModel.find();
    },

    async getMyCards(userId) {
        const cards = await PlayerCardModel.find({ user: userId })
        return cards;
    },

    async deleteCard(id) {
        const card = await PlayerCardModel.deleteOne({ _id: id })
        return card;
    },

    async findCard(id) {
        const card = await PlayerCardModel.findOne({ _id: id })
        return card;
    },

    async updateCard(id, newData) {
        const card = await PlayerCardModel.findOneAndUpdate({ _id: id }, newData);
        return card; //returns the old one...
    }

}

module.exports = { PlayerCardService, getAllCardsAC, rolesIncludeAnyOfTheGivenAC, greaterThanRankAC };