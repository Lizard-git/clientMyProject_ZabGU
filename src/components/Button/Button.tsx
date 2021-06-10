import React, { FC } from 'react'
import { Link } from 'react-router-dom';

interface ButtonProps{
    children: React.ReactChild | React.ReactNode,
    onClick?: any, 
    href?: string,
    className?: string
}

const Button:FC<ButtonProps> = ({children, onClick, href, className}) => {
    const event = (onClick !== null)? "Event ":""; 
    const classes = "Button "+ event + className;
    return (
        <>
        {(href !== undefined)? 
            <Link to={href} className={classes}  onClick={onClick}>
                {children}
            </Link>            
        : 
        <button className={classes}  onClick={onClick}>
            {children}
        </button>}
        </>
    )
}

Button.defaultProps = {
    children: "Button", 
    onClick: null,
    href:undefined,
    className:""
}

export default Button
