import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './../../Icon';
const Logo = () => {
    return (
        <Link to="" className="Logo">
            <Icon name="Logo-Zabgu" className="LogoImg" />
            <h4 className="TextLogo">Забайкальский<br />государственный<br />университет</h4>
        </Link>
    )
}

export default Logo
