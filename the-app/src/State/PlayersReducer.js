import axios from 'axios'


const addACard = 'ADD-A-CARD';
const putAllCardsIntoState = 'PUT-ALL-CARDS-INTO-STATE';

const instance = axios.create({
    baseURL: 'http://localhost:3001/cards/',
    withInfoAfterRegistration: true,
})




const initialState = {
    playerCards: [
        { profileImg: 'img1', mainInfo: 'textHere', rankIcon: 'iron4', categories: ['cat1', 'cat2'] },
        { profileImg: 'img2', mainInfo: 'textHere2', rankIcon: 'iron1', categories: ['cat1', 'cat2', 'cat3'] },
        { profileImg: 'img3', mainInfo: 'textHere3', rankIcon: 'bronze4', categories: ['cat1', 'cat2', 'cat3'] },
        { profileImg: 'img4', mainInfo: 'textHere4', rankIcon: 'silver2', categories: ['cat1', 'cat2'] },
        { profileImg: 'img5', mainInfo: 'textHere5', rankIcon: 'gold4', categories: ['cat1', 'cat2'] },
        { profileImg: 'img6', mainInfo: 'textHere6', rankIcon: 'diamon1', categories: ['cat1', 'cat2', 'cat9'] },
        { profileImg: 'img7', mainInfo: 'textHereHi', rankIcon: 'master+', categories: ['cat1', 'cat2', 'cat3', 'cat4'] },
    ],
}

const playersReducer = (state = initialState, action) => {
 
    switch (action.type) {
        case addACard:
            state.playerCards.push(action.card)
            return state;
        case putAllCardsIntoState:
            state.pagesAmount = Math.ceil(action.totalCardsInDb / action.amountOnAPage)
            return { ...state, cardsArr: action.cards }  
        default: return state;
    }
}


export const fetchCardsTC = (amountOnAPage, page) => {

    return (dispatch) => {
        instance.get(`/playerCards?amountOnAPage=${amountOnAPage}&page=${page}`, {
            body: {
                amountOnAPage,
                page
            }
        }).then((res) => {

            dispatch(putAllCardsIntoStateAC(res.data.cards, res.data.totalCardsInDb, amountOnAPage))
        }).catch((err) => {
            console.log(err)
        })

    }
}

export const putAllCardsIntoStateAC = (cards, totalCardsInDb, amountOnAPage) => {
    return { type: putAllCardsIntoState, cards, totalCardsInDb, amountOnAPage }
}

export const addAPlayerAC = (card) => {
    return { type: addACard, card: card }
}

export default playersReducer;