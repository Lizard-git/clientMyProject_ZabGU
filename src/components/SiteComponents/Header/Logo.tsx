import React from 'react';
import { Link } from 'react-router-dom';
const Logo = () => {
    return (
        <Link to="" className="Logo">
            <img src="./../../../resurse/icon/png/LOGO.png" alt="logo" />
            <h4 className="TextLogo">Забайкальский<br />государственный<br />университет</h4>
        </Link>
    )
}

export default Logo
