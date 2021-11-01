import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { OldDates } from '../components/OldDates'
import { TableData } from '../components/TableData'
import { TableStates } from '../components/TableStates'
import '../scss/pages/CountryPage.scss'
export const CountryPage = () => {
    const [countryData, setCountryData] = useState(null)
    const [states, setstates] = useState(null)
    const [confirmedDates, setConfirmedDates] = useState(null)
    const [deathsDates, setDeathsDates] = useState(null)
    let history = useHistory()
    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const country = history.location.pathname.slice(11)
                const url = `https://covid-api.mmediagroup.fr/v1/cases?country=${country}`
                const resp = await fetch(url)
                const data = await resp.json()
                if (data.All.country === country) {
                    setCountryData(data.All)
                    if (Object.keys(data).length > 1) {
                        setstates(Object.entries(data).splice(1).slice(0, 4))
                    }
                }
            } catch (error) {
                history.push('/404')
            }
        }
        fetchCountry()
    }, [history])

    useEffect(() => {
        const historyConfirmed = async () => {
            try {
                const country = history.location.pathname.slice(11)
                const url = `https://covid-api.mmediagroup.fr/v1/history?status=confirmed&country=${country}`
                const resp = await fetch(url)
                const data = await resp.json()
                const dates = data.All.dates
                const datesArray = Object.entries(dates).slice(0, 5)
                setConfirmedDates(datesArray)
            } catch (error) {}
        }
        const historyDeaths = async () => {
            try {
                const country = history.location.pathname.slice(11)
                const url = `https://covid-api.mmediagroup.fr/v1/history?status=deaths&country=${country}`
                const resp = await fetch(url)
                const data = await resp.json()
                const dates = data.All.dates
                const datesArray = Object.entries(dates).slice(0, 5)
                setDeathsDates(datesArray)
            } catch (error) {}
        }

        historyConfirmed()
        historyDeaths()
    }, [history])

    return (
        <>
            {countryData ? (
                <div className="country-container">
                    <div className="background-image">
                        <picture>
                            <source
                                srcSet={`https://source.unsplash.com/600x600/?${countryData.country}%20wallpaper`}
                                media="(min-width: 1024px)"
                                type="image/png"
                            />
                            <source
                                srcSet={`https://source.unsplash.com/600x600/?${countryData.country}%20wallpaper`}
                                media="(min-width: 600px)"
                                type="image/png"
                            />
                            <img
                                className={`cover-image`}
                                src={`https://source.unsplash.com/400x400/?${countryData.country}%20wallpaper`}
                                alt={`${countryData.country} Country`}
                            />
                        </picture>

                        <div className="image-container">
                            <div className="box-img">
                                <img
                                    src={`https://flagcdn.com/${countryData.abbreviation.toLowerCase()}.svg`}
                                    alt={`${countryData.country} flag`}
                                />
                            </div>
                            <p>{countryData.country}</p>
                            <p className="continent">{`Continent | ${countryData.continent}`}</p>
                        </div>
                    </div>

                    <div className="tables-container">
                        <TableData countryData={countryData} />

                        <OldDates
                            title="dates of confirmed"
                            dates={confirmedDates}
                        />
                        <OldDates title="dates of deaths" dates={deathsDates} />
                        <TableStates
                            states={states}
                            countryName={countryData.country}
                        />
                    </div>
                </div>
            ) : (
                <>
                    <div className="country-container">
                        <div className="background-image"></div>

                        <div className="tables-container">
                            <TableData />

                            <OldDates />
                            <OldDates />
                            <TableStates />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
