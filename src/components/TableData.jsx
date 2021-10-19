import React from 'react'
import { DataElement } from '../components/DataElement'
import { numberWithCommas } from '../helpers/Numbers'
import '../scss/components/TableData.scss'
export const TableData = ({ countryData }) => {
    return (
        <>
            {!countryData ? (
                <div className="global-data-container">
                    <div className="data-container">
                        <h3>LOADING...</h3>
                    </div>
                </div>
            ) : (
                <div className="global-data-container">
                    <div className="data-container">
                        <h3>Country Data</h3>
                        <DataElement
                            title={'Population'}
                            data={numberWithCommas(countryData.population)}
                            iconClass={`ri-account-pin-circle-line`}
                        />
                        <DataElement
                            title={'Confirmed'}
                            data={numberWithCommas(countryData.confirmed)}
                            iconClass={`ri-virus-line`}
                        />
                        <DataElement
                            title="Deaths"
                            data={numberWithCommas(countryData.deaths)}
                            iconClass={`ri-skull-fill`}
                        />
                        <DataElement
                            title="Life Expectancy"
                            data={Math.floor(countryData.life_expectancy)}
                            iconClass={`ri-heart-2-line`}
                        />
                    </div>
                </div>
            )}
        </>
    )
}
