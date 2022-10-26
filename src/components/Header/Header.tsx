import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { pink } from '@mui/material/colors';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Header = () => {
  return (
    <div>
      <Title>Weather app</Title>

      <FormControl>
        <FormLabel id="unit-radio-buttons-group-label">
          Unit
        </FormLabel>

        <RadioGroup
          aria-labelledby="unit-radio-buttons-group-label"
          row
          defaultValue="celcius"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="celcius"
            control={
              <Radio
                sx={{
                  color: pink[800],
                  '&.Mui-checked': {
                    color: pink[600],
                  },
                }}
              />
            }
            label="Celcius"
          />

          <FormControlLabel
            value="fahrenheit"
            control={
              <Radio
                sx={{
                  color: pink[800],
                  '&.Mui-checked': {
                    color: pink[600],
                  },
                }}
              />
            }
            label="Fahrenheit"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
