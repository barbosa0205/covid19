import React, { useState } from 'react'
import { countryContext } from './CountryContext'

export const CountryProvider = ({ children }) => {
    const [countryName, setCountryName] = useState(null)

    return (
        <countryContext.Provider
            value={{
                countryName: countryName,
                setCountryName: setCountryName,
            }}
        >
            {children}
        </countryContext.Provider>
    )
}
