const { getCards } = require('../Cards/player-cards-controller');
const PlayerCardModel = require('../models/player-card-model')

const PlayerCardService = {

    async creatingCard(userId, cardData) {

        const card = await PlayerCardModel.create({ user: userId, ...cardData });

        return card;
    },

    async getAllCards() {
        const cards = await PlayerCardModel.find();
        return cards;
    }
  
}

module.exports = PlayerCardService;