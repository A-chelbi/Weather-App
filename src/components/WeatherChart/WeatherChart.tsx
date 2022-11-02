import React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useAppSelector } from '../../utils/useAppSelector';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.color = '#fff';

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'WEATHER',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const WeatherChart = () => {
  const weatherData = useAppSelector(
    (state) => state.weather.weatherData
  );

  const labels = weatherData.map(
    (element: any, i: number) => element?.dt_txt
  );

  const data = {
    labels,
    datasets: [
      {
        label: 'WeatherChart',
        data: weatherData.map(
          (element: any, i: any) => element?.main?.temp
        ),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Paper
      sx={{
        minWidth: {
          sm: 300, // theme.breakpoints.up('sm')
          lg: 600, // theme.breakpoints.up('xl')
        },
        bgcolor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        color: '#fff',
        mb: 10,
        mt: 5,
      }}
    >
      <Bar options={options} data={data} />
    </Paper>
  );
};
