import React from 'react';
import HeroSection from './components/HeroSection';
import Trusted from './components/Trusted';
import Services from './components/Services';

const Home = () => {

  const data= {
    name: "an-ware",
    para: "Premium Melamine DinnerWare. Deals in Premium melamine Dinner Sets, Melamine Plates, Bowls, etc."
  };

  return (
    <>
      <HeroSection myData= {data} />
      <Services />
      <Trusted />
    </>
  );
};


export default Home