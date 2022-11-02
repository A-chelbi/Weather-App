import React, { useEffect, useState } from 'react';
import './App.css';

import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { Carousel } from './components/Carousel/Carousel';
import { WeatherChart } from './components/WeatherChart/WeatherChart';
import { setWeatherData } from './redux/slices/weather';
import { useAppDispatch } from './utils/useAppDispatch';
import { useAppSelector } from './utils/useAppSelector';
import { getWeatherDataRequest } from './api-rest/weather';

function App() {
  const lat = useAppSelector((state) => state.weather.lat);
  const lon = useAppSelector((state) => state.weather.lon);
  const cityName = useAppSelector((state) => state.weather.cityName);

  const [unitData, setUnitData] = useState('metric');

  const dispatch = useAppDispatch();

  // Initialise weather Data and Update after changing units
  useEffect(() => {
    const unit = unitData;

    getWeatherDataRequest({ lat, lon, unit }).then((res) =>
      dispatch(setWeatherData(res.data.list))
    );
  }, [unitData, cityName]);

  return (
    <div className="App">
      <div className="App-header">
        <Header setUnitData={setUnitData} />
        <Search />
        <Carousel unitData={unitData} city={cityName} />
        <WeatherChart />
      </div>
    </div>
  );
}

export default App;
