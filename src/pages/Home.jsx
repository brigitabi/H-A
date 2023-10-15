import React from 'react';
import Hero from '../components/Hero';
import Offers from '../components/Offers';
import Plan from '../components/Plan';
import Interior from '../components/Interior';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero  />
      <Offers />
      <Plan />
      <Interior />
      <ImageSlider />
      <Footer />
    </>
  );
};

export default Home;
