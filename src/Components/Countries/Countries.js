import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = () => {
    // useState 
    const [countries,setCountries] = useState([])
    // useEffect 
    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h1 className="countriesStyle">REST Countries Data : {countries.length}</h1>

            {/* {
                countries.map(country=><Country name={country.name} capital={
                    country.capital} population={country.population}></Country>)
            } */}
            <div className="countriesAll">
            {
                countries.map(country=><Country countryInfo={country} key={country.alpha3Code}></Country>)
            }
            </div>
           
        </div>
    );
};

export default Countries;