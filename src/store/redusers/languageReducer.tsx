import {LanguageAction, LanguageState} from './../../typse/index';
import Cookie from './../../scripts/CookieClass';

const SET_LANGUAGE = "SET_LANGUAGE"; 

const defaultState: LanguageState = {
    lang: Cookie.getCookie('lang') || 'ru',
}

export const languageReducer = (state = defaultState, action: LanguageAction): LanguageState => {
    switch (action.type){
        case SET_LANGUAGE: 
            return{...state, lang: action.payload}
            default:
                return state
    }
}

export const setLang = (lang: string) => ({type:SET_LANGUAGE, payload:lang})