import { configureStore } from '@reduxjs/toolkit'
import {weatherApi} from "../api/getWeather";
import themeReducer from './themeSlice';
import locationReducer from './locationSlice';

const store = configureStore({
  reducer: {
    location: locationReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    theme: themeReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
})

export default store
