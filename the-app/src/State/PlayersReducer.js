import axios from 'axios'


const addACard = 'ADD-A-CARD';
const putAllCardsIntoState = 'PUT-ALL-CARDS-INTO-STATE';

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/cards/',
    withInfoAfterRegistration: true,
})




const initialState = {
    cardsArr: [
        {
            profileUrl: 'url',
            nickName: 'szh',
            briefInfo: 'brief Info Here',
            fullInfo: 'full info here',
            rank: 'diamond24',
            sex: 'male',
            mainRoles: ['jungler'],
            offRoles: ['mid'],
            categories: ['cat1', 'cat2']
        },
        {
            profileUrl: 'url2',
            nickName: 'szh2',
            briefInfo: 'briefdsadsadasdas Info Here',
            fullInfo: 'full info hfdsffdsfdsfdsfdsdfsere',
            rank: 'diamond4',
            sex: 'male',
            mainRoles: ['jungler'],
            offRoles: ['mid'],
            categories: ['cat1']
        },
    ],

    totalUsers: 0,
    pagesAmount: null,
}

const playersReducer = (state = initialState, action) => {

    switch (action.type) {
        case addACard:
            state.cardsArr.push(action.card)
            return state;
        case putAllCardsIntoState:
            state.pagesAmount = Math.ceil(action.totalCardsInDb / action.amountOnAPage)
            debugger
            return { ...state, cardsArr: action.cards }
        default: return state;
    }
}


export const fetchCardsTC = (amountOnAPage, page) => {
    debugger;
    return (dispatch) => {
        instance.get(`/playerCards?amountOnAPage=${amountOnAPage}&page=${page}`, {
            body: {
                amountOnAPage,
                page
            }
        }).then((res) => {
                debugger;
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