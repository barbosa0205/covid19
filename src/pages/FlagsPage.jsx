import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router'
import { Search } from '../components/Search'
import { countryContext } from '../context/countryContext/CountryContext'
import '../scss/pages/FlagsPage.scss'

export const FlagsPage = () => {
    const CountryCtx = useContext(countryContext)
    const [country, setCountry] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    let history = useHistory()
    useEffect(() => {
        const array = []
        const fetchAllCountrys = async () => {
            try {
                setLoading(true)
                const url = 'https://covid-api.mmediagroup.fr/v1/cases'
                const resp = await fetch(url)
                const data = await resp.json()
                Object.values(data).forEach(value => {
                    const abb = value.All.abbreviation
                    const title = value.All.country
                    if (abb && title) {
                        setCountry([
                            ...array,
                            {
                                flag: abb,
                                title,
                            },
                        ])
                        array.push({
                            flag: abb,
                            title,
                        })
                    }
                })
                array.sort()
                setCountry(array.filter(flag => flag !== undefined))
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        fetchAllCountrys()
    }, [])

    let searchedFlags = []

    if (!searchValue.length >= 1) {
        searchedFlags = country
    } else {
        searchedFlags = country.filter(flag => {
            const flagTitle = flag.title.toLowerCase()
            const inputText = searchValue.toLowerCase()
            return flagTitle.includes(inputText)
        })
    }

    return (
        <div className={`flags-container`}>
            <h1>All countrys</h1>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="grid-container">
                {loading ? (
                    <>
                        <div className="image-container">
                            <p className="loadingFlag">LOADING...</p>
                        </div>
                        <div className="image-container">
                            <p className="loadingFlag">LOADING...</p>
                        </div>
                        <div className="image-container">
                            <p className="loadingFlag">LOADING...</p>
                        </div>
                    </>
                ) : (
                    <>
                        {searchedFlags.map(({ flag, title }, index) => (
                            <div
                                className="image-container"
                                key={index}
                                onClick={() => {
                                    CountryCtx.setCountryName(title)
                                    history.push(`/countries/${title}`)
                                }}
                            >
                                <img
                                    src={`https://www.countryflags.io/${flag}/flat/64.png`}
                                    alt={flag}
                                />
                                <p>{title}</p>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}
