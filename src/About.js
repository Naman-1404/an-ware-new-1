import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {

  const data= {
    name: "AS Enterprises",
    
    para: "AS Enterprises is the manufacture of an-ware Melamine Dinner Sets, Melamine Plates, Bowls, etc."
  };

  return <HeroSection myData= {data}/>
}

export default About