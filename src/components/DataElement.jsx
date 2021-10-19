import React from 'react'
import '../scss/components/DataElement.scss'
export const DataElement = ({ title, data, iconClass }) => {
    return (
        <div className="data-element">
            <div className="text-container">
                <i className={`${iconClass}`}></i>
                <p>{`${title}`}:</p>
            </div>
            <span>{`${data}`}</span>
        </div>
    )
}
