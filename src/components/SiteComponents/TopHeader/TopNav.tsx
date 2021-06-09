import React from 'react'
import { ButtonGroup } from '../../ButtonGroup'
import buttons from "../../../assets/json/Buttons.json";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';

const TopNav = () => {
    const { t } = useTranslation();
    return (
        <ButtonGroup className="TopNavGroup">
            {buttons.TopNav.map(Item =>
                    <Button key={Item.description} className="ButtonTopNav">
                        {Item.text === "" ? "" :
                            <p className={"textIconTop " + Item.description}>{t(Item.text)}</p>
                        }
                        {Item.urlImg === "" ? "" :
                            <svg className="svg">
                                <use xlinkHref={Item.urlImg} />
                            </svg>
                        }
                    </Button>
            )}
        </ButtonGroup>
    )
}

export default TopNav