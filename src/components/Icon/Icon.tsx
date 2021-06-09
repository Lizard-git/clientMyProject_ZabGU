import React, { FC } from 'react'
import IconsSVG from './../../assets/icon/icons.svg';

interface IconProps{
    name: string,
    className?: string, 
}

const Icon:FC<IconProps> = ({name, className}) => {
    return (
        <svg className={`icon icon-${name} ${className}`}>
            <use xlinkHref={`${IconsSVG}#icon-${name}`} />
        </svg>
    )
}

/* Icon.defaultProps = {
} */

export default Icon
