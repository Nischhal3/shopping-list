import React from 'react';
import styled from 'styled-components';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetters from '../components/NewsLetters';
import Slider from '../components/Slider';

const Container = styled.div`
  height: 100%;
`;
const Home = () => {
  return (
    <Container>
        <Navbar />
        <Slider />
        <NewsLetters/>
        <Footer/>
    </Container>
  )
};

export default Home;
