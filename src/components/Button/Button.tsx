import React, { FC } from 'react'

interface ButtonProps{
    children?: React.ReactChild | React.ReactNode,
    onClick?: any, 
    className?: string,
    disabled?: boolean, 
    active?: boolean
}

const Button:FC<ButtonProps> = ({children, onClick, className, disabled, active}) => {
    const ActiveButton = active ? "ActiveButton": "";
    const classes = "Button " + className + " " + ActiveButton;
    return (
        <button className={classes} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    children: "Button", 
    onClick: null,
    disabled: false,
    active: false 
}

export default Button
