import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { CountryProvider } from './context/countryContext/CountryProvider'

ReactDOM.render(
    <React.StrictMode>
        <CountryProvider>
            <App />
        </CountryProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

//i'm using yarn
