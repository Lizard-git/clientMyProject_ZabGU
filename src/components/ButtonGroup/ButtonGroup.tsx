import React, { FC } from 'react'

interface BTNGroup{
    children?: React.ReactChild | React.ReactNode, 
    className?: string,
    vertical?: boolean
}

const ButtonGroup:FC<BTNGroup> = ({children, className, vertical, ...attrs}) => {

    const VerticalActive = vertical? " Vertical" : "";
    const classes = "ButtonGroup " + className + VerticalActive; 

    return (
        <div className={classes} {...attrs}>
            {children}
        </div>
    )
}

ButtonGroup.defaultProps = {
    children: null,
    className: '',
    vertical: false
}

export default ButtonGroup

