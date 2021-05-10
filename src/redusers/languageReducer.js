import Cookie from './../scripts/CookieClass';
const SET_LANGUAGE = "SET_LANGUAGE"; 

const defaultState = {
    NameLanguage: Cookie.getCookie('lang') || 'ru',
    isFetching: true
}


export default function languageReducer(state = defaultState, action){
    switch (action.type){
        case SET_LANGUAGE: return{
            ...state, 
            NameLanguage: action.payload
        }
        default:
            return state
    }
}

export const setLang = (lang) => ({type:SET_LANGUAGE, payload:lang})