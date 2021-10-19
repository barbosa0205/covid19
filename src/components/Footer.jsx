import React from 'react'
import { LinkButton } from '../components/LinkButton'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    position: static;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10rem;
    background: #202020;
`

export const Footer = () => {
    return (
        <FooterContainer>
            <LinkButton title="Contact me" link="barbosa02058@gmail.com" />
        </FooterContainer>
    )
}
