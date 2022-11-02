import axios from 'axios';
import { GetCoordinatesByLocationload } from '../interfaces/geocoding';

export const getCoordinatesByLocationRequest = async (
  cityName: GetCoordinatesByLocationload
) => {
  let data: any = null;
  let error: any = null;

  await axios
    .get(
      `${process.env.REACT_APP_GEOCODE_API_URL}?q=${cityName}&limit=1&appid=${process.env.REACT_APP_APP_ID}`
    )
    .then((body) => (data = body.data))
    .catch((err) => (error = err));

  return { data, error };
};
