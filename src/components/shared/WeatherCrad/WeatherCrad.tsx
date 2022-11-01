import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface WeatherCradProps {
  city?: string;
  temp?: string;
  unitData?: string;
  date: string;
}

export const WeatherCrad = ({
  city,
  temp,
  unitData,
  date,
}: WeatherCradProps) => {
  const dt = new Date(date);
  const day = dt.getDate();
  const month = dt.getMonth();
  const hour = dt.getHours();

  return (
    <Card
      sx={{
        minWidth: 275,
        bgcolor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}
    >
      <CardContent>
        {city && (
          <Typography sx={{ fontSize: 14 }} color="#fff" gutterBottom>
            {city}
          </Typography>
        )}

        <Typography variant="h5" color="#fff" component="div">
          {temp} {unitData === 'metric' ? '°C' : 'F'}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="#fff">
          {day} /{month} - {hour}H
        </Typography>
      </CardContent>
    </Card>
  );
};
