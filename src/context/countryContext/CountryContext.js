import React from 'react'

const initialValue = {
    countryName: null,
    setCountryName: () => {},
}

export const countryContext = React.createContext(initialValue)
