import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/components/TableStates.scss'
export const TableStates = ({ states, countryName }) => {
    return (
        <div className="states-container">
            <h3>States</h3>
            {states ? (
                <>
                    {states.map((state, index) => {
                        if (
                            state[0] !== 'Recovered' &&
                            state[0] !== 'Unknown'
                        ) {
                            return (
                                <div key={index} className="state-container">
                                    <h4>{state[0]}</h4>
                                    <div className="state-data-container">
                                        <p>
                                            <i className="ri-virus-line"></i>
                                            {state[1].confirmed}
                                        </p>
                                        <p>
                                            <i className="ri-skull-fill"></i>
                                            {state[1].deaths}
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    {states.length <= 4 && (
                        <Link to={`/states/${countryName}`}>
                            See more states of {countryName}
                        </Link>
                    )}
                </>
            ) : (
                <h4>This Country not cantains states in the data</h4>
            )}
        </div>
    )
}
