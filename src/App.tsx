import React, { useEffect, useState } from 'react';
import './App.css';

import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { Carousel } from './components/Carousel/Carousel';
import { WeatherChart } from './components/WeatherChart/WeatherChart';
import axios from 'axios';

function App() {
  const url = `${process.env.REACT_APP_API_URL}?lat=44.34&lon=10.99&cnt=7&units=metric&appid=${process.env.REACT_APP_APP_ID}`;

  const [data, setData] = useState(null);
  const [location, setLocation] = useState<string>('Tunisia');

  const getWeatherData = () => {
    axios
      .get(url)
      .then((response) => {
        const weatherData = response.data.list;
        setData(weatherData);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Search />
        <button onClick={getWeatherData}>search</button>
        {data && <Carousel data={data} city={location} />}

        {/* <WeatherChart /> */}
      </div>
    </div>
  );
}

export default App;
