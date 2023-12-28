import { configureStore } from '@reduxjs/toolkit'
import {weatherApi} from "../api/getWeather";
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    theme: themeReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
})

export default store
