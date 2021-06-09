import React, { FC } from 'react'
import { Link } from 'react-router-dom';

interface ButtonProps{
    children: React.ReactChild | React.ReactNode,
    onClick?: any, 
    href?: string | undefined,
    className?: string
}

const Button:FC<ButtonProps> = ({children, onClick, href, className}) => {
    const event = (onClick !== null)? "Event ":""; 
    const classes = "Button "+ event + className;
    return (
        <div className={classes}  onClick={onClick}>
            {(href !== undefined)? 
                <Link to={href}>
                    {children}
                </Link>
            : children}
        </div>
    )
}

Button.defaultProps = {
    children: "Button", 
    onClick: null,
    href:undefined,
    className:""
}

export default Button
