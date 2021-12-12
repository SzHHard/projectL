const express = require('express');
const PlayerCardsController = require('./player-cards-controller');

const authMiddleware = require('../middlewares/auth-middleware');



playerCardsRouter = express.Router();


playerCardsRouter.post('/playerCards', authMiddleware, PlayerCardsController.creatingCard);

playerCardsRouter.get('/playerCards', PlayerCardsController.getCards);
playerCardsRouter.get('/playerCards/myCards', PlayerCardsController.getMyCards);

playerCardsRouter.delete('/playerCards/:id', authMiddleware, PlayerCardsController.deleteCard);

playerCardsRouter.put('/playerCards/:id', authMiddleware,  PlayerCardsController.updateCard);

module.exports = playerCardsRouter;