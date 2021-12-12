
const PlayerCardModel = require('../models/player-card-model')


const PlayerCardService = {

    async creatingCard(userId, cardData) {

        const card = await PlayerCardModel.create({ user: userId, ...cardData });

        return card;
    },

    async getAllCards() {
        const cards = await PlayerCardModel.find();
        return cards;
    },

    async deleteCard(id) {
        const card = await PlayerCardModel.deleteOne({_id: id})
        return card;
    },

    async findCard(id) {
        const card = await PlayerCardModel.findOne({_id: id})
        return card;
    },

    async updateCard(id, newData) {
       const card = await PlayerCardModel.findOneAndUpdate({_id: id}, newData);
       return card;
    }
  
}

module.exports = PlayerCardService;