import React, { FC } from 'react'
import { Link } from 'react-router-dom';

interface ButtonProps{
    children?: React.ReactChild | React.ReactNode,
    onClick?: any, 
    href?: string,
    className?: string,
    active?: boolean
}

const Button:FC<ButtonProps> = ({children, onClick, href, className, active}) => {
    const ActiveButton = active ? "ActiveButton":"";
    const classes = "Button " + className + " " + ActiveButton;
    return (
        <div className={classes}  onClick={onClick}>
            {(href === "")? 
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
    href:"",
    active: false 
}

export default Button
