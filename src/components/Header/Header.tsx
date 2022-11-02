import {
  Box,
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

interface HeaderProps {
  unit?: string;
  setUnitData: (arg0: any) => void;
}

export const Header = ({ setUnitData, unit }: HeaderProps) => {
  const onChangeHandler = (
    e: React.SyntheticEvent<Element, Event>
  ) => {
    const unitData = (e.target as HTMLInputElement).value;

    setUnitData(unitData);
  };

  return (
    <Box
      component="div"
      sx={{
        mt: 5,
      }}
    >
      <FormControl>
        <RadioGroup
          aria-labelledby="unit-radio-buttons-group-label"
          row
          defaultValue="metric"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="metric"
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
            onChange={onChangeHandler}
          />

          <FormControlLabel
            value="standard"
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
            onChange={onChangeHandler}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
