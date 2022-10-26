import React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { year: '1950', population: 2.525 },
  { year: '1960', population: 3.018 },
  { year: '1970', population: 3.682 },
  { year: '1980', population: 4.44 },
  { year: '1990', population: 5.31 },
  { year: '2000', population: 6.127 },
  { year: '2010', population: 6.93 },
];
export const WeatherChart = () => {
  return (
    <Paper>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis />

        <BarSeries valueField="population" argumentField="year" />
        <Title text="World population" />
        <Animation />
      </Chart>
    </Paper>
  );
};
