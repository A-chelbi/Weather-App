import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{
      display: 'inline-block',
      mx: '2px',
      transform: 'scale(0.8)',
    }}
  >
    •
  </Box>
);

interface WeatherCradProps {
  city?: string;
  temp?: string;
}

export const WeatherCrad = ({ city, temp }: WeatherCradProps) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {city && (
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            {city}
          </Typography>
        )}

        <Typography variant="h5" component="div">
          {temp} C{bull}
        </Typography>

        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}

        {/* <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
    </Card>
  );
};
