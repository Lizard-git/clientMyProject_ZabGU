import React from 'react'
import { Link } from 'react-router-dom';
import i18n from './../../../i18n';
import { useDispatch } from "react-redux";
import {useTypedSelector} from './../../../hooks/useTypedSelector';
import buttons from "./../../../assets/json/Buttons.json";
import Cookie from './../../../scripts/CookieClass';
import { setLang } from './../../../store/redusers/languageReducer';
import { ButtonGroup } from '../../ButtonGroup';
import { Button } from '../../Button';
import './css/style.css';

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
            <Button className="ButtonLanguage" active={true}>{temp?.Name}</Button>
            {buttons.languageButton.map((Item) => 
                (language === Item.Description) ? "":
                <Link to="">
                    <Button className="ButtonLanguage" onClick={() => changeLanguage(Item.Description)}>{Item.Name}</Button>
                </Link>
            )}
        </ButtonGroup>
        
    )
}

export default LanguageButtonGroup

