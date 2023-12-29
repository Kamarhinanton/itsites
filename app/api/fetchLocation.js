import * as Location from "expo-location";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchLocation = createAsyncThunk('location/fetchLocation', async () => {
  try {
    const currentLocation = await Location.getCurrentPositionAsync({});
    const {latitude, longitude} = currentLocation.coords;

    const locationDetails = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    return (locationDetails[0]?.city || 'Невідомий регіон')
  } catch (error) {
    console.error('Помилка геолокації:', error);
  }
})

