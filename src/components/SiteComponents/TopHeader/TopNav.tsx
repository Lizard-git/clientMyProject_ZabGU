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
                <Link className={"LinkButtonTopNav " + Item.description} key={Item.description} to="">
                    <Button className="ButtonTopNav">
                        {Item.text === "" ? "" :
                            <p className={"textIconTop " + Item.description}>{t(Item.text)}</p>
                        }
                        {Item.urlImg === "" ? "" :
                            <img className={"IconTopNav " + Item.description} src={Item.urlImg} alt="" />
                        }
                    </Button>
                </Link>
            )}
        </ButtonGroup>
    )
}

export default TopNav