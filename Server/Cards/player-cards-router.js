const express = require('express');
const PlayerCardsController = require('./player-cards-controller');

const authMiddleware = require('../middlewares/auth-middleware');



playerCardsRouter = express.Router();


playerCardsRouter.post('/playerCards', authMiddleware, PlayerCardsController.creatingCard);

playerCardsRouter.get('/playerCards', PlayerCardsController.getCards);

playerCardsRouter.delete('/playerCards/:id', authMiddleware, PlayerCardsController.deleteCard);

module.exports = playerCardsRouter;