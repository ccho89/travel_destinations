import React, { useEffect, useState } from 'react';
import Cards from './Cards.jsx';
import PositionedSnackbar from './PositionedSnackbar.jsx';
import ResponsiveGrid from './ResponsiveGrid.jsx';

export default function Places() {
  const [destinations, setDestinations] = useState([]);

  const [selectedCountries, setSelectedCountries] = useState([]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.log("Error fetching data");
      }
    };
    getPlaces();

    // console.log(destinations);
}, []);

    const handleCountryChange = (e) => {
      const selectedCountry = e.target.value;
      setSelectedCountries((prevSelectedCountries) => {
        if (!prevSelectedCountries.includes(selectedCountry)) {
        return [...prevSelectedCountries, selectedCountry];
      }
      return prevSelectedCountries;
      })
    }; 

    const handleRemoveCountry = (countryName) => {
      setSelectedCountries((prevSelectedCountries) => prevSelectedCountries.filter((country) => country !== countryName));
    };

      if (destinations.length === 0) {
        return <h1>Loading...</h1>;
      }

      const handleShowSnackbar = () => {
        setSnackbarOpen(true);
      };

      const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
      };

  return (
    <>
    <h1 className="heading">TRAVEL DESTINATIONS</h1>
    <div className="dropdown">
    <label htmlFor='countryDropdown'>Select a Country: </label>
    <select style={{
      fontWeight:'bold', width: '200px', height: '25px', textAlign: 'center'
      }} 
      id="countryDropdown" onChange={handleCountryChange} value={''}>
    <option value="">Pick a Location!</option>


    {destinations.map((country, index) => (
      <option key={index} value={country.name.common}>
        {country.name.common}
      </option>
    ))}
    </select>
    </div>

   
      {/* {selectedCountries.map((selectedCountry, index) => (
        <Cards key={index}
        destinations={destinations.filter(
          (country) => country.name.common === selectedCountry)}
          onRemove={handleRemoveCountry}
          showSnackbar={handleShowSnackbar}
          />
      ))}
</>
  )}; */}
      <ResponsiveGrid
        destinations={destinations.filter((country) => selectedCountries.includes(country.name.common)
         )}
        onRemove={handleRemoveCountry}
        showSnackbar={handleShowSnackbar}
        />
      
      <PositionedSnackbar open={snackbarOpen} handleClose={handleCloseSnackbar}/>
    
</>
  )};