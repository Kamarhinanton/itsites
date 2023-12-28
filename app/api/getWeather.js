import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.weatherapi.com/v1',
  }),
  endpoints: (builder) => ({
    fetchWeather: builder.query({
      query: (
        {region, days }
      ) => ({
        url: '/forecast.json',
        params: {
          key: 'a384fdb855104f7bbc9151839232712',
          q: region,
          days: days
        },
      }),
      transformResponse: (response) => response.forecast.forecastday
    }),
  }),
})

export const {useFetchWeatherQuery} = weatherApi
