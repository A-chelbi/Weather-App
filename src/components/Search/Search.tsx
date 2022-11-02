import React, { SetStateAction, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { getCoordinatesByLocationRequest } from '../../api-rest/geocoding';
import { GetCoordinatesByLocationload } from '../../interfaces/geocoding';
import { Alert, Button } from '@mui/material';
import { useAppDispatch } from '../../utils/useAppDispatch';
import {
  setCityName,
  setLat,
  setLon,
} from '../../redux/slices/weather';

export const Search = () => {
  const dispatch = useAppDispatch();
  const [err, setError] = useState(null);

  const [cityName, setcityName] =
    useState<GetCoordinatesByLocationload>();

  const onChangeHandler = (
    e: React.SyntheticEvent<Element, Event>
  ) => {
    const city = (e.target as HTMLInputElement)
      .value as unknown as SetStateAction<GetCoordinatesByLocationload>;
    setcityName(city);
    console.log(city);
  };

  const onSubmitHandler = async (
    e: React.SyntheticEvent<Element, Event>
  ) => {
    e.preventDefault();

    const { data, error } = await getCoordinatesByLocationRequest(
      cityName
    );

    if (!data && !error) {
      setError('No data for this city');
    }

    if (error) {
      setError(error.message);
    }

    if (data) {
      dispatch(setLat(data[0].lat));
      dispatch(setLon(data[0].lon));
      dispatch(setCityName(cityName as unknown as string));
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <Paper
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: {
              sm: 200, // theme.breakpoints.up('sm')
              lg: 400, // theme.breakpoints.up('xl')
            },
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, border: 0 }}
            placeholder="Search By City.."
            inputProps={{ 'aria-label': 'search your city' }}
            onChange={onChangeHandler}
          />
          <IconButton
            type="button"
            sx={{ p: '10px' }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <Button type="submit" variant="outlined">
          search
        </Button>
      </form>
      {err && <Alert severity="error">{err}</Alert>}
    </>
  );
};
