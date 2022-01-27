import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile, mobile540, mobile820 } from '../responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({
       height: '20vh'
    })} 

    ${mobile540({
        height: '30vh'
    })} 

    ${mobile820({
        height: '20vh'
    })} 
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 15px;
    ${mobile({
        marginBottom: '10px',
       fontSize: '20px'
    })} 
    ${mobile540({
       fontSize: '55px',
    })} 
`;
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 15px;
    ${mobile({
       fontSize: '13px'
    })} 
`;
const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: space-between;
    border: 1px solid lightgrey;
    ${mobile({
        width: '80%'
    })} 
`;
const Input = styled.input`
    background-color: white;
    border: none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.div`
    background-color: teal;
    color: white;
    flex: 1;
`;

const NewsLetters = () => {
  return (
      <Container>
          <Title>Newsletter</Title>
          <Description>Subscribe to get updates for latest offers!</Description>
          <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
              <Send/>
            </Button>
          </InputContainer>
      </Container>
  )
};

export default NewsLetters;
