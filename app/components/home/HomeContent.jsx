import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {useFetchWeatherQuery} from "../../api/getWeather";
import {useDispatch, useSelector} from "react-redux";
import {selectIsDarkTheme, toggleTheme} from "../../store/themeSlice";
import styles from "../../styles/theme.style";
import {useCurrentRegion} from "../../hooks/useCurrentLocation";

const HomeContent = () => {
  const [days, setDays] = useState(1)
  const {region} = useCurrentRegion()
  const {data, error, isLoading} = useFetchWeatherQuery({
    region, days
  }, {skip: !region});
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <View style={[{height: '100%'}, styles.bg(isDarkTheme)]}>
      <Text style={styles.text(isDarkTheme)}>{region}</Text>
      {data && data.map((day) => (
        <Text style={styles.text(isDarkTheme)} key={day.date_epoch}>Temperature: {day.day.avgtemp_c}deg</Text>
      ))}
      <TouchableOpacity onPress={() => setDays(3)}>
        <Text style={styles.text(isDarkTheme)}>get 3 days</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setDays(7)}>
        <Text style={styles.text(isDarkTheme)}>get 7 days</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setDays(14)}>
        <Text style={styles.text(isDarkTheme)}>get 14 days</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleThemeHandler}>
        <Text style={styles.text(isDarkTheme)}>Toggle Theme</Text>
      </TouchableOpacity>
      {isLoading && <Text style={styles.text(isDarkTheme)}>Loading...</Text>}
      {error && <Text style={styles.text(isDarkTheme)}>Error: {error.message}</Text>}
    </View>
  );
};

export default HomeContent;
