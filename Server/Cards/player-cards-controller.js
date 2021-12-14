const { PlayerCardService } = require('../service/player-card-service');
const ApiError = require('../exceptions/api-error')

const { getAllCardsAC } = require('../service/player-card-service');
const {rolesIncludeAnyOfTheGivenAC} = require('../service/player-card-service');

const PlayerCardsController = {

    async creatingCard(req, res, next) {
        try {

            const card = await PlayerCardService.creatingCard(req.user.id, req.body.cardData);  // cardData - объект, содержащий поля
            res.status(201).json({ card })
        } catch (err) {
            console.log(err);
            res.status(500).send();
        }



    },


    async getCards(req, res, next) {
        try {
            let cards = [];
            // const cards = await PlayerCardService.getAllCards();
            
            if(req.query.role && req.query.role !== 'null' && req.query.role !== 'undefined') {
            
                cards = await PlayerCardService.getCardsWithFilters(rolesIncludeAnyOfTheGivenAC(req.query.role))
            } else {
                cards = await PlayerCardService.getCardsWithFilters(getAllCardsAC());
            }
           

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

                return res.json({ cards: cardsOnCurrentPage, totalCardsInDb: totalCards })
            }
            //
            return res.json({ cards, })
        } catch (err) {
            next(err)
        }
    },

    async getMyCards(req, res, next) {
        try {
            const cards = await PlayerCardService.getMyCards(req.user.id);

            return res.json({ cards, })
        } catch (err) {
            return res.status(404).json({ message: 'not found' })
        }
    },

    async deleteCard(req, res, next) {          // подкорректировать функцию так, чтобы можно было удалять только свои карты.

        try {
            const cardId = req.params.id;

            const user = req.user;  // засовывается в middleware, с клиента пихать не нужно


            const card = await PlayerCardService.findCard(cardId);

            if (user.id == card.user) {
                const deletedCard = await PlayerCardService.deleteCard(cardId);
                return res.status(204).json({ deletedCard });
            } else {
                console.log('you are not the card\'s owner')
                next(ApiError.UnauthoruzedError());
            }


        } catch (err) {
            next(ApiError.BadRequest('something went wrong'));
            console.log(err);
        }
    },

    async updateCard(req, res, next) {

        try {
            const cardId = req.params.id;

            const user = req.user;

            const card = await PlayerCardService.findCard(cardId);

            console.log(req.body.cardData)


            if (user.id == card.user) {
                const changedCard = PlayerCardService.updateCard(cardId, req.body.cardData);
                res.status(200).json({ changedCard })
            } else {
                console.log('you are not the card\'s owner')
                next(ApiError.UnauthoruzedError());
            }

        } catch (err) {
            next(ApiError.BadRequest('something went wrong'))
            console.log(err)
        }

    }

}

module.exports = PlayerCardsController;