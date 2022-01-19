import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black': 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div``;
const Image = styled.img``;
const Details = styled.div``;
const ProductName = styled.h1``;
const ProductId = styled.h1``;
const PriceDetail = styled.div``;

const Summary = styled.div`
    flex: 1;

`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>Continue shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type='filled'>Checkout</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' />
                            <Details>
                                <ProductName><b>Product: </b> Mens Casual Premium Slim Fit T-Shirts</ProductName>
                                <ProductId><b>ID: </b> 43333</ProductId>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            price
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>Summary</Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  );
};

export default Cart;
