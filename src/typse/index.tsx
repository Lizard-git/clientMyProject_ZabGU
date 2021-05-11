export interface LanguageAction{
    type: string, 
    payload: string; 
}
export interface LanguageState {
    lang: string;
}