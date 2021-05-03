import React from 'react'

const Card = ({flag, name, population, region, capital})=>{
    return(
        <>
            <div className="container-card">
                <img className="card-image" src={flag} />
                <div className="container-text">
                    <h3>{name}</h3>
                    <p>
                        <strong>Population:</strong> {population}  <br/>
                        <strong>Region:</strong> {region} <br/>
                        <strong>Capital:</strong> {capital}<br/>
                    </p>
                </div>
            
            </div>
        </>
    );

}

export default Card;
