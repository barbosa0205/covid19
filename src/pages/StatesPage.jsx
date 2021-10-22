import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { TableStates } from '../components/TableStates'
import '../scss/pages/StatesPage.scss'
export const StatesPage = () => {
    const history = useHistory()
    const [country, setCountry] = useState('')
    const [statesData, setStatesData] = useState(null)
    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const country = history.location.pathname.slice(8)
                setCountry(country)
                const url = `https://covid-api.mmediagroup.fr/v1/cases?country=${country}`
                const resp = await fetch(url)
                const data = await resp.json()
                if (data.All.country === country) {
                    if (Object.keys(data).length > 1) {
                        setStatesData(Object.entries(data).splice(1))
                    }
                }
            } catch (error) {
                history.push('/404')
            }
        }
        fetchCountry()
    }, [history])

    return (
        <>
            {statesData ? (
                <div className="statesPage-container">
                    <h1>States of {country}</h1>
                    <TableStates states={statesData} countryName={country} />
                </div>
            ) : (
                <div className="statesPage-container">
                    <h1>LOADING...</h1>
                </div>
            )}
        </>
    )
}
