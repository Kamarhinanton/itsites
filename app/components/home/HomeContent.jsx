import React, {useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useFetchWeatherQuery } from '../../api/getWeather';

const HomeContent = ({ region }) => {
  const [days, setDays] = useState(1)

  const { data, error, isLoading } = useFetchWeatherQuery({region, days} );

  return (
    <View>
      {data && (
        <>
          {data.map((day) => (
            <Text key={day.date_epoch}>Avg Temperature: {day.day.avgtemp_c}</Text>
          ))}
        </>
      )}

      <TouchableOpacity onPress={() => setDays(3)}>
        <Text>get 3 days</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setDays(7)}>
        <Text>get 7 days</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setDays(14)}>
        <Text>get 14 days</Text>
      </TouchableOpacity>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
    </View>
  );
};

export default HomeContent;
