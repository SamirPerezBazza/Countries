import React, { useEffect, useState } from "react";
import Card from "./components/card";
import Header from "./components/header";
import Main from './components/main'
import {
    BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";
import './styles/app.css';

const App = () => {
  const [countries, setcountries] = useState([]);
  const [filteredCountries, setfilteredCountries] = useState([]);
  const [region, setregion] = useState("europe");
  useEffect(() => {
    const resp = fetch(`https://restcountries.eu/rest/v2/region/${region}`).then(
      (d) =>
        d.json().then((d) => {
          setcountries(d);
          setfilteredCountries(d);
        })
    );
  }, [region]);

  const createCountryList = (arr) => {
    let id = 0;
    return arr.map((country) => {
      return <Card {...country} key={id+=1} />;
    });
  };

  const filterCountries = (arr)=>(text)=>{
    if (text.length===0) {
        setfilteredCountries(arr);    
    }else{
        let copy = arr.slice();
        let filteredList = copy.filter(country=>country.name.startsWith(text));
    
        setfilteredCountries(filteredList);
  }
}

  return (
    <Router>
        <Header/>
        <Switch>
            <Route path="/">
            <Main filterCountries={filterCountries} countries={countries} createCountryList={createCountryList} filteredCountries={filteredCountries} setregion={setregion} />
            </Route>
        </Switch>  
    </Router>  
  );
};
export default App;
