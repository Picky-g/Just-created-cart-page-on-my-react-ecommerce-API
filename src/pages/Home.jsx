import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ShopByCategory from '../components/ShopByCategory';
import TopPick from '../components/TopPick';
import Statistics from '../components/Statistics';



const Home = () => {
  return (
    <Layout>
      <HeroSection/>
      <Statistics/>
      <ShopByCategory/>
      <TopPick/>
    </Layout>
  );
}

export default Home;
