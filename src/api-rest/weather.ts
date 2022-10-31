import axios from 'axios';
import { GetWeatherPayload } from '../interfaces/weather';

export const getWeatherDataRequest = async ({
  lat,
  lon,
  unit,
}: GetWeatherPayload) => {
  let data: any = null;
  let error: any = null;

  await axios
    .get(
      `${process.env.REACT_APP_API_URL}?lat=${lat}&lon=${lon}&cnt=5&units=${unit}&appid=${process.env.REACT_APP_APP_ID}`
    )
    .then((body) => (data = body.data))
    .catch((err) => (error = err));

  return { data, error };
};
