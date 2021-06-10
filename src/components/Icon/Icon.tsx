import React, { FC } from 'react'
import IconsSVG from './../../assets/icon/icons.svg';

interface IconProps{
    name: string,
    className?: string, 
    size?: number
}

const Icon:FC<IconProps> = ({name, className, size}) => {
    return (
        <svg className={`icon icon-${name} ${className}`} width={size} height={size}>
            <use xlinkHref={`${IconsSVG}#icon-${name}`} />
        </svg>
    )
}

Icon.defaultProps = {
    size: 32
}

export default Icon
