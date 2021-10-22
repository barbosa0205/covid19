import React from 'react'
import { LinkButton } from '../components/LinkButton'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15rem;
    background: #202020;
    margin: 0;
`

export const Footer = () => {
    return (
        <FooterContainer>
            <LinkButton
                title="Contact me"
                link="mailto:barbosa02058@gmail.com"
            />
        </FooterContainer>
    )
}
