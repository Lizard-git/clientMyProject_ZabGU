import { combineReducers } from "redux";
import {languageReducer} from "./languageReducer";

export const rootReducer = combineReducers ({
    repos: languageReducer,
})

export type RootState = ReturnType<typeof rootReducer>