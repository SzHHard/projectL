const express = require('express');


let players = [ 
{ profileImg: 'img1', mainInfo: 'textHere', rankIcon: 'iron4', categories: ['cat1', 'cat2'] },
{ profileImg: 'img2', mainInfo: 'textHere2', rankIcon: 'iron1', categories: ['cat1', 'cat2', 'cat3'] },
{ profileImg: 'img3', mainInfo: 'textHere3', rankIcon: 'bronze4', categories: ['cat1', 'cat2', 'cat3'] },
{ profileImg: 'img4', mainInfo: 'textHere4', rankIcon: 'silver2', categories: ['cat1', 'cat2'] },
{ profileImg: 'img5', mainInfo: 'textHere5', rankIcon: 'gold4', categories: ['cat1', 'cat2'] },
{ profileImg: 'img6', mainInfo: 'textHere6', rankIcon: 'diamon1', categories: ['cat1', 'cat2', 'cat9'] },
{ profileImg: 'img7', mainInfo: 'textHereHi', rankIcon: 'master+', categories: ['cat1', 'cat2', 'cat3', 'cat4'] }, ]  // временный массив




playerCardsRouter = express.Router();


 

playerCardsRouter.get('/', (req, res, next) => {
    res.json(players);
})

module.exports = playerCardsRouter;