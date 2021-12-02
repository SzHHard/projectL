import playersReducer from './PlayersReducer';
import teamsReducer from './TeamsReducer';


let _callSubscriber = () => {
    console.log('rerender')
}

const store = {

    _state: {
        Players: {
            playerCards: [
                { profileImg: 'img1', mainInfo: 'textHere', rankIcon: 'iron4', categories: ['cat1', 'cat2'] },
                { profileImg: 'img2', mainInfo: 'textHere2', rankIcon: 'iron1', categories: ['cat1', 'cat2', 'cat3'] },
                { profileImg: 'img3', mainInfo: 'textHere3', rankIcon: 'bronze4', categories: ['cat1', 'cat2', 'cat3'] },
                { profileImg: 'img4', mainInfo: 'textHere4', rankIcon: 'silver2', categories: ['cat1', 'cat2'] },
                { profileImg: 'img5', mainInfo: 'textHere5', rankIcon: 'gold4', categories: ['cat1', 'cat2'] },
                { profileImg: 'img6', mainInfo: 'textHere6', rankIcon: 'diamon1', categories: ['cat1', 'cat2', 'cat9'] },
                { profileImg: 'img7', mainInfo: 'textHereHi', rankIcon: 'master+', categories: ['cat1', 'cat2', 'cat3', 'cat4'] },
            ],
        },

        Teams: {
            teamCards: [
                { teamLogo: 'img1', mainInfo: 'textHere!', rankIcon: 'iron', categories: ['tryhard', 'cybersport'] },
                { teamLogo: 'img2', mainInfo: 'textHere!', rankIcon: 'gold', categories: ['coaching', 'jungle'] },
                { teamLogo: 'img3', mainInfo: 'textHere!', rankIcon: 'diamond1+', categories: ['tryhard', 'semi-pro'] },
                { teamLogo: 'img4', mainInfo: 'textHere!', rankIcon: 'challenger', categories: ['chill', 'ARAM'] },
            ],
        }

    },

    get state() {
        return this._state;
    },

    subscribe(observer) {
        _callSubscriber = observer;
    },

    dispatch(action) {
        this._state.Players = playersReducer(this._state.Players, action) // action является объектом, не забыть
        this._state.Teams = teamsReducer(this._state.Teams, action) // action является объектом, не забыть
        _callSubscriber();
    }


}




window.store = store;


// store.state.addACard = store.state.addACard.bind(store);



export default store;