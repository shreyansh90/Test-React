import React, { useState, useEffect } from 'react';

const CountryClockSelector = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentTime((prevTime) => new Date(prevTime.getTime() + 1000));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  useEffect(() => {
    if (selectedCountry) {

      fetch(`http://worldtimeapi.org/api/timezone/${selectedCountry}`)
        .then((response) => response.json())
        .then((data) => {
          const time = new Date(data.utc_datetime);
          setCurrentTime(time);
        });
    }
  }, [selectedCountry]);

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/timezone')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
  };

  const handlePauseStartClick = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  return (
    <div className="country-clock" style={{ display: 'flex', flexDirection: 'row' }}>
      <div>
        <select id="country-selector" onChange={handleCountryChange}>
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div id="clock" style={{ marginLeft: "10px", backgroundColor: "#0047AB" }}>
        {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </div>
      <button id="pause-start" style={{ marginLeft: "10px", backgroundColor: "#7FFFD4" }} onClick={handlePauseStartClick}>
        {isPaused ? 'Start' : 'Pause'}
      </button>
    </div>
  );
};

export default CountryClockSelector;
