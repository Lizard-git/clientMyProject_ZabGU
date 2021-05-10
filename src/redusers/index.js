import {combineReducers,  createStore, applyMiddleware} from  "redux"; 
import languageReducer from "./languageReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers ({
    repos: languageReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))