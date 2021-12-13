
import { instance } from '../utils/interceptors';

const addACard = 'ADD-A-CARD';
const putAllCardsIntoState = 'PUT-ALL-CARDS-INTO-STATE';
const DELETE_PLAYER_CARD = 'DELETE_PLAYER_CARD';
const UPDATE_PLAYER_CARD = 'UPDATE_PLAYER_CARD';
const PUT_MY_CARDS_INTO_STATE = 'PUT_MY_CARDS_INTO_STATE';
const ADD_MY_CARD = "ADD_MY_CARD"

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

    totalCards: 0,
    pagesAmount: null,
}



const playersReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MY_CARD:
            console.log({...state, MyCardsArr: [action.card, ...state.MyCardsArray]})
            return {...state, MyCardsArr: [action.card, ...state.MyCardsArray]};
        case putAllCardsIntoState:
            state.pagesAmount = Math.ceil(action.totalCardsInDb / action.amountOnAPage)
            return { ...state, cardsArr: action.cards, totalCards: action.totalCardsInDb }
        case DELETE_PLAYER_CARD:
            const newCardsArr = state.cardsArr.filter((card) => {
                return card._id !== action.id;
            })
            const newMyCardsArr = state.MyCardsArr.filter((card) => {
                return card._id !== action.id;
            })
            return { ...state, cardsArr: newCardsArr, MyCardsArr: newMyCardsArr /*totalCards: state.totalCards - 1 */    }
        case PUT_MY_CARDS_INTO_STATE:
            return { ...state, MyCardsArr: action.cards, }

        case UPDATE_PLAYER_CARD:


        default: return state;
    }
}


export const fetchCardsTC = (amountOnAPage, page) => {

    return (dispatch) => {
        instance.get(`/cards/playerCards?amountOnAPage=${amountOnAPage}&page=${page}`)
            .then((res) => {

                dispatch(putAllCardsIntoStateAC(res.data.cards, res.data.totalCardsInDb, amountOnAPage))
            }).catch((err) => {
                console.log(err)
            })

    }
}

export const getMyCardsTC = () => {

    return (dispatch) => {
        instance.get(`/cards/playerCards/myCards`)
            .then((res) => {
                dispatch(putMyCardsIntoStateAC(res.data.cards))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const createPlayerCardTC = (cardObj) => {  //not sure about args

    return (dispatch) => {


        instance.post(`/cards/playerCards`, {


            cardData: { nickName: 'SzH (don\'t forget to customize)', ...cardObj },


        })
            .then(res => {
                console.log(res);
                debugger;
                dispatch(addMyCardAC(cardObj))
            
            })
            .catch(err => {
                console.log(err);
            })

    }
}

export const deletePlayerCardTC = (id) => {

    return (dispatch) => {
        instance.delete(`/cards/playerCards/${id}`)
            .then((res) => {
                dispatch(deletePlayerCardAC(id))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const updatePlayerCardTC = (id, cardObj) => {

    return (dispatch) => {
        instance.put(`/cards/playerCards/${id}`, {
            cardData: { nickName: 'SzH (don\'t forget to customize)', ...cardObj }
        })
            .then((res) => {
                //dispatch
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const addMyCardAC = (card) => {
    debugger;
    return {type: ADD_MY_CARD, card}
}
export const putMyCardsIntoStateAC = (cards) => {
    return { type: PUT_MY_CARDS_INTO_STATE, cards }
}

export const updatePlayerCardAC = () => {  // добавить параметров
    return { type: UPDATE_PLAYER_CARD, }
}

export const deletePlayerCardAC = (id) => {
    return { type: DELETE_PLAYER_CARD, id }
}

export const putAllCardsIntoStateAC = (cards, totalCardsInDb, amountOnAPage) => {
    return { type: putAllCardsIntoState, cards, totalCardsInDb, amountOnAPage }
}

export const addAPlayerAC = (card) => {
    return { type: addACard, card: card }
}

export default playersReducer;