import React, { FC } from 'react'
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
interface TypeWeek{
    week:boolean
}

/* style for IconWeek */
const IconWeekTop = styled.div`
    span::after{
        bottom: 5px;
        content: '';
        position: absolute;
        width: 60%;
        left: 50%;
        margin-left: -30%;
        height: 5px;
        background-color: #c99900;
    }
`
const IconWeekBottom = styled.div`
    span::before{
        top: 5px;
        content: '';
        position: absolute;
        width: 60%;
        left: 50%;
        margin-left: -30%;
        height: 5px;
        background-color: #c99900;
    }
`
/* _________________________________________ */

const Week:FC<TypeWeek> = (week) => {
    const {t} = useTranslation();
    return (
        <div className="Week">
            <div className="selectedWeek">
                {
                    week ? 
                    <p className="textIconTop">{t('Top-Header')}</p>:<p className="textIconTop">{t('Bottom-Header')}</p>
                }
            </div>
            {week ? 
                <>
                    <IconWeekTop className="WrapperIconWeek">
                        <span></span>
                    </IconWeekTop>
                </>:
                <>
                    <IconWeekBottom className="WrapperIconWeek">
                        <span></span>
                    </IconWeekBottom>
                </>}
        </div>
    )
}

Week.defaultProps ={
    week: true
}

export default Week
