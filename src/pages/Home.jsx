import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetters from '../components/NewsLetters';
import Slider from '../components/Slider';


const Home = () => {
  return (
      <div>
        <Navbar />
        <Slider/>
        <NewsLetters/>
        <Footer/>
    </div>
  )
};

export default Home;
