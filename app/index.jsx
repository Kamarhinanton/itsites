import React from 'react';
import ProviderLayout from "./providerLayout";
import HomeContent from "./components/home/HomeContent";
import {useCurrentRegion} from "./hooks/useCurrentLocation";

const Home = () => {
  const {region} = useCurrentRegion()

  return (
    <ProviderLayout>
      <HomeContent region={region}/>
    </ProviderLayout>
  );
};

export default Home;
