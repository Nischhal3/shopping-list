import { ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Text = styled.div`
    font-size: 16px;
    font-weight: bold;
    text-decoration: underline;
    padding: 2px;
`;

const Icon = styled.div``;

const Cart = styled.div`
    opacity: 0;
    display: flex;
    flex-direction: row;
    transition: all 0.8s ease;
    margin-bottom: 20px;
    padding: 5px;
    cursor: pointer;
    &:hover{
        transform: scale(2);
    }
`;

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    margin: 40px;
    box-sizing: border-box;
    border: 2px solid gray;
    box-shadow: 5px 10px #888888;
    border-radius: 2%;
    cursor: pointer;
    & :hover ${Cart}{
        opacity: 1;
    }
`;
const Image = styled.img`
    width: 100%;
    height: 70%;
`;
const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    
`;
const Title = styled.h1`
    color: chocolate;
    margin-bottom: 20px;
`;

const CategoryItem = ({item}) => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(`/product/${item.id}`);
    }
  return (
      <Container>
           <Info>
           <Image src={item.image} onClick={handleClick}/>
                <Title>{item.title}</Title>
                <Cart>
                <Text>Add to Basket</Text>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                </Cart>
           </Info>
      </Container>
  )

};

export default CategoryItem;
