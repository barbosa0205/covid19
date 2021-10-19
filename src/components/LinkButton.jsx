import React from 'react'
import styled from 'styled-components'
const LinkButtonContainer = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    padding: 0.7rem 1rem;
    background: transparent;
    border: 1px solid #fdfdfd;
    color: #fdfdfd;
    backdrop-filter: blur(2px);
    border-radius: 0.3rem;
    cursor: pointer;
`
export const LinkButton = ({ title, link }) => {
    return (
        <LinkButtonContainer href={`mailto:${link}`}>
            {title}
        </LinkButtonContainer>
    )
}
