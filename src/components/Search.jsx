import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
    width: 70%;
    max-width: 45rem;
    height: 3.6rem;
    padding-left: 1rem;
    margin: 2rem;
    border-radius: 0.4rem;
    border: 1px solid #dfdfdf;
    outline: none;
`

export const Search = ({ searchValue, setSearchValue }) => {
    return (
        <Input
            type="text"
            name="search"
            placeholder="search a country"
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
        />
    )
}
