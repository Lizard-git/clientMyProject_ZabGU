import React from 'react'
import { Container } from 'react-bootstrap'
import Logo from './Logo'

const index = () => {
    return (
        <header>
            <Container className="HeaderContainer">
                <Logo />
            </Container>
        </header>
    )
}
export default index;
