import * as Location from "expo-location";
import axios from "axios";
import {useEffect, useState} from "react";
import {useFetchWeatherQuery} from "../api/getWeather";

const useCurrentRegion = () => {
  const [region, setRegion] = useState('');

  useEffect(() => {
    const getRegion = async () => {
      try {
        const {status} = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          console.error('Дозвіл на геолокацію відхилений!');
          return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});
        const {latitude, longitude} = currentLocation.coords;

        const locationDetails = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        setRegion(locationDetails[0]?.city || 'Невідомий регіон')
      } catch (error) {
        console.error('Помилка геолокації:', error);
      }
    };

    getRegion();
  }, []);

  return {region};
};

export {useCurrentRegion};
