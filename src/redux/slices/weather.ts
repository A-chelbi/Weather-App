import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  weatherData: [];
  unit: string;
  lat: string;
  lon: string;
}

const initialState: WeatherState = {
  weatherData: [],
  unit: 'metric',
  lat: '36',
  lon: '10',
};

const WeatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<any>) => {
      state.weatherData = action.payload;
    },
    setUnit: (state, action: PayloadAction<string>) => {
      state.unit = action.payload;
    },
    setLat: (state, action: PayloadAction<string>) => {
      state.lat = action.payload;
    },
    setLon: (state, action: PayloadAction<string>) => {
      state.lon = action.payload;
    },
  },
});

export const { setWeatherData, setUnit } = WeatherSlice.actions;

// Reducer
export default WeatherSlice.reducer;
