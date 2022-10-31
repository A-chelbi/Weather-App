import { combineReducers } from 'redux';

import weather from './slices/weather';

const rootReducer = combineReducers({
  weather: weather,
});

export { rootReducer };
