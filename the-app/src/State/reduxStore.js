import { combineReducers, createStore } from "redux";
import playersReducer from "./PlayersReducer";
import teamsReducer from "./TeamsReducer";


let reducers = combineReducers({
    Players: playersReducer, 
    Teams: teamsReducer,
}) 

let store = createStore(reducers);


export default store;