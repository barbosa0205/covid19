import React from 'react'
import '../scss/pages/HomePage.scss'
import covidMainImg from '../assets/svg/main-covid-logo.svg'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <>
            <main className="container">
                <h1>WELCOME TO MY COVID-19 APP</h1>
                <img src={covidMainImg} alt="covid-scientists" />
                <h3>Data of All Covid-19 Cases in the world</h3>
                <Link to="/countries" className="link-countries">
                    See all countries
                </Link>
            </main>
        </>
    )
}
