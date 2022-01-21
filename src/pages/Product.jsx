import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetters from '../components/NewsLetters';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 70vh;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const Title = styled.h1`
    font-size: 40px;
`;
const Desc = styled.h3`
    margin: 20px 0px;
`;
const Price = styled.h5`
    font-size: 20px;
    margin: 20px;
`;
const Rating = styled.h5`
    font-size: 20px;
    margin: 20px;
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
`
const Button = styled.button`
    padding: 8px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover {
        background-color: lightskyblue;
    }
`

const Product = () => {
  return (
      <Container>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'/>
            </ImgContainer>
            <InfoContainer>
                <Title>Bag</Title>
                <Desc>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</Desc>
                <Price>Price: $20</Price>
                <Rating>Product rating: 5 Star</Rating>
               <AddContainer>
                   <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                   </AmountContainer>
                <Button>ADD TO CART</Button>
               </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetters/>
        <Footer/>
      </Container>
  )
};

export default Product;
