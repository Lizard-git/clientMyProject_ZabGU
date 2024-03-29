import React from 'react'
import { Link } from 'react-router-dom';
import i18n from '../../../i18n';
import { useDispatch } from "react-redux";
import {useTypedSelector} from '../../../hooks/useTypedSelector';
import buttons from "../../../assets/json/Buttons.json";
import Cookie from '../../../scripts/CookieClass';
import { setLang } from '../../../store/redusers/languageReducer';
import { ButtonGroup } from '../../ButtonGroup';
import { Button } from '../../Button';

const LanguageButtonGroup = () => {
    const dispatch = useDispatch();
    const language = useTypedSelector(state => state.repos.lang);
    const temp = buttons.languageButton.find(item => item.Description === language);

    function changeLanguage(lang:string){
        i18n.changeLanguage(lang);
        dispatch(setLang(lang));
        Cookie.setCookie('lang', lang);
    };
    
    return (
        <ButtonGroup className="LanguageGroup">
            <Button className="ButtonLanguage Active">{temp?.Name}</Button>
            {buttons.languageButton.map((Item) => 
                (language === Item.Description) ? "":
                    <Button className="ButtonLanguage" onClick={() => changeLanguage(Item.Description)}>{Item.Name}</Button>
            )}
        </ButtonGroup>
        
    )
}

export default LanguageButtonGroup

