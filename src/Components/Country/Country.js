import React from 'react';
import "./Country.css"

const Country = (props) => {
    const {name,capital,population,flag}=props.countryInfo;
    return (
        <div className="countryStyle">
            <h1>Country: {name}</h1>
            <h3>Capital: {capital}</h3>
            <p>Population: {population}</p>
            <img src={flag} alt="" />
        </div>
    );
};

export default Country;