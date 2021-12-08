import { applyMiddleware, combineReducers, createStore } from "redux";
import playersReducer from "./PlayersReducer";
import teamsReducer from "./TeamsReducer";
import currentUserReducer from './CurrentUserReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import usersReducer from "./usersReducer";
import interceptor from '../utils/interceptors';

let reducers = combineReducers({
    Users: usersReducer,
    Players: playersReducer, 
    Teams: teamsReducer,
    CurrentUserInfo: currentUserReducer,
   
    form: formReducer,
}) 

let store = createStore(reducers, applyMiddleware(thunkMiddleware));




interceptor(store);

export default store;