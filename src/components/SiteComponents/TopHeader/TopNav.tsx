import React from 'react'
import { ButtonGroup } from '../../ButtonGroup'
import buttons from "../../../assets/json/Buttons.json";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';
import { Icon } from '../../Icon';

const TopNav = () => {
    const { t } = useTranslation();
    return (
        <ButtonGroup className="TopNavGroup">
            {buttons.TopNav.map(Item =>
                    <Button  key={Item.description} className="ButtonTopNav">
                        {Item.text === "" ? "" :
                            t(Item.text)
                        }
                        {Item.Icon === "" ? "" :
                            <Icon name={Item.Icon} size={Item.sizeIcon}/>
                        }
                    </Button>
            )}
        </ButtonGroup>
    )
}

export default TopNav