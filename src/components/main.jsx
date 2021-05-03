import React from "react";
import Bar from "./bar";



const Main = ({
  filterCountries,
  countries,
  createCountryList,
  filteredCountries,
  setregion
}) => {


    const hanndleButton=(text)=>{
        setregion(text);
    }
  return (
    <>
      <div className="search-container">
        <Bar func={filterCountries(countries)} />
        <ul>
            <li><button onClick={()=>hanndleButton("americas")}>Americas</button></li>
            <li><button onClick={()=>hanndleButton("asia")}>Asia</button></li>
            <li><button onClick={()=>hanndleButton("europe")}>Europe</button></li>
            <li><button onClick={()=>hanndleButton("africa")}>Africa</button></li>
            <li><button onClick={()=>hanndleButton("oceania")}>Oceania</button></li>
        </ul>
      </div>
      {countries.length !== 0 ? (
        <div className="container">{createCountryList(filteredCountries)}</div>
      ) : (
        <div>Loading</div>
      )}
    

    </>
  );
};
export default Main;
