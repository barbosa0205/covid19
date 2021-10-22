import React from 'react'
import styled from 'styled-components'
const LinkButtonContainer = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    padding: 0.7rem 1rem;
    margin: 1rem;
    background: transparent;
    border: 1px solid #fdfdfd;
    color: #fdfdfd;
    border-radius: 0.3rem;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`
export const LinkButton = ({ title, link }) => {
    return <LinkButtonContainer href={`${link}`}>{title}</LinkButtonContainer>
}
