import React from 'react'
import { numberWithCommas } from '../helpers/Numbers'
import '../scss/components/oldDates.scss'
export const OldDates = ({ title, dates }) => {
    return (
        <div className="old-dates-container">
            <h3>{title}</h3>
            {dates ? (
                <div className="dates-container">
                    {dates.map(date => (
                        <div className="date-container" key={date[0]}>
                            <p className="date">{date[0]}</p>
                            <p className="value">{numberWithCommas(date[1])}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="old-dates">
                    <h3>LOADING...</h3>
                </div>
            )}
        </div>
    )
}
