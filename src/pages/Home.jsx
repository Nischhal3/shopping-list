import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetters from '../components/NewsLetters';
import Slider from '../components/Slider';


const Home = () => {
  //<Categories/>
  return (
      <div>
        <Announcement/>
        <Navbar />
        <Slider/>
        <NewsLetters/>
        <Footer/>
    </div>
  )
};

export default Home;
