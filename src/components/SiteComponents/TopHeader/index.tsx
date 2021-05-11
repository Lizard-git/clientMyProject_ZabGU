import React from 'react'
import { Container } from 'react-bootstrap';
import LanguageButtonGroup from './LanguageButtonGroup';
import Week from './Week';

const TopHeader = () => {
    return (
        <div className="TopHeader">
            <Container className="ContainerTopHeader">
                <div className="ContainerGroup left">
                    <LanguageButtonGroup />
                    <Week week={true}/>
                </div>
                <div className="ContainerGroup right">
                    
                </div>
            </Container>
        </div>
    )
}

export default TopHeader
