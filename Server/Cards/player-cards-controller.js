const PlayerCardService = require('../service/player-card-service');

const PlayerCardsController = {

    async creatingCard(req, res, next) {
        try {
            const card = await PlayerCardService.creatingCard(req.body.userId, req.body.cardData);
            res.status(201).json({ card })
        } catch (err) {
            console.log(err);
            res.status(500).send();
        }



    },


    async getCards(req, res, next) {
        try {
            const cards = await PlayerCardService.getAllCards();
            //
           
            if (req.query.amountOnAPage && req.query.page) {
                //amountOnAPage=1&page=1
                const totalCards = cards.length;
                const amountOnAPage = req.query.amountOnAPage;
                const page = req.query.page;

                cardsOnCurrentPage = cards.filter((card, index) => {
                    if ((index >= (page - 1) * amountOnAPage) && (index < page * amountOnAPage)) {
                        return true
                    }
                    else {
                        return false
                    }
                })
                console.log(cardsOnCurrentPage)
                return res.json({ cards: cardsOnCurrentPage, totalCardsInDb: totalCards })
            }
            //
            return res.json({ cards, })
        } catch (err) {
            next(err)
        }
    },
}

module.exports = PlayerCardsController;