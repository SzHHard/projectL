import { applyMiddleware, combineReducers, createStore, compose  } from "redux";
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

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));




interceptor(store);

export default store;