const addATeam = 'ADD-A-TEAM';

const initialState = {
    teamCards: [
        { teamLogo: 'img1', mainInfo: 'textHere!', rankIcon: 'iron', categories: ['tryhard', 'cybersport'] },
        { teamLogo: 'img2', mainInfo: 'textHere!', rankIcon: 'gold', categories: ['coaching', 'jungle'] },
        { teamLogo: 'img3', mainInfo: 'textHere!', rankIcon: 'diamond1+', categories: ['tryhard', 'semi-pro'] },
        { teamLogo: 'img4', mainInfo: 'textHere!', rankIcon: 'challenger', categories: ['chill', 'ARAM'] },
    ],
}

const teamsReducer = (state = initialState, action) => {
    // debugger;

    switch (action.type) {
        case addATeam:

            state.teamCards.push(action.team)
            return state;
        default: return state;
    }
}
export const addATeamAC = (card) => {
    return { type: addATeam, team: card }
}

export default teamsReducer;