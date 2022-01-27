import { ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mobile, mobile1024, mobile280, mobile540, mobile820 } from '../responsive';

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
    ${mobile({
        display: 'none',
    })} 
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

    ${mobile({
        margin: '5px',
        marginBottom: '10px',
        width : '40vw',
        height: '30vh',
    })} 

    ${mobile280({
        margin: '0px',
        marginBottom: '15px',
    })} 
    ${mobile540({
        width : '38vw',
        margin: '0px',
        height: '45vh',
        marginBottom: '20px',
        marginLeft: '5px'
    })} 
    ${mobile820({
        width : '38vw',
        margin: '0px',
        height: '40vh',
        marginBottom: '20px',
        marginLeft: '5px'
    })} 

`;
const Text = styled.div`
    font-size: 16px;
    font-weight: bold;
    text-decoration: underline;
    padding: 2px;
    ${mobile540({
        fontSize: '12px'
    })} 
    ${mobile1024({
        fontSize: '12px'
    })} 
`;

const Icon = styled.div``;

const Image = styled.img`
    width: 100%;
    height: 70%;
    ${mobile({
        width : '90%',
        height: '70%',
        marginTop:'0px'
    })} 

    ${mobile540({
        width : '90%',
        height: '60%',
        margin: '0px',
        marginBottom: '20px',
        marginTop: '50px'
    })} 
    ${mobile1024({
        width : '90%',
        height: '60%',
        margin: '0px',
        marginBottom: '20px',
        marginTop: '50px'
    })} 
`;
const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    ${mobile({
        marginTop: '40px',
        height: '80%'
    })} 
    
`;
const Title = styled.h1`
    color: chocolate;
    margin-bottom: 20px;
    ${mobile({
        fontSize: '14px'
    })} 
    ${mobile540({
        fontSize: '16px'
    })} 
    ${mobile820({
        fontSize: '24px'
    })} 
    ${mobile1024({
        fontSize: '24px'
    })} 
   
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
