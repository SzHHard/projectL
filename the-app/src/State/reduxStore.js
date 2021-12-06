import { applyMiddleware, combineReducers, createStore } from "redux";
import playersReducer from "./PlayersReducer";
import teamsReducer from "./TeamsReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    Players: playersReducer, 
    Teams: teamsReducer,
    form: formReducer,
}) 

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;