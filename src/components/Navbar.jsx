import { Search,  ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import  {Badge}  from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { mobile } from '../responsive';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const Container = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;

    ${mobile({
        display : 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    })}  
`

const SearchContainer = styled.div`
    margin: auto;
    width: 40%;
    border: 1px solid grey;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
      ${mobile({
         width: '80%',
    })}  
    `
const Input = styled.input`
    flex: 4;
    width: 30%;
    border: none;
`

const Center = styled.div`
    text-align: center;
    ${mobile({
        textAlign: 'left',
    })} 
`
const Filter = styled.div`
    margin: 20px; 
`
const FilterText = styled.span`
    color: '#2A3D45';
    font-size: 16px;
    font-weight: 600;
    margin-right: 5px;
    ${mobile({
        fontSize: '14px',
    })}  
`

const Select = styled.select`
    height: 25px;
  cursor: pointer;
  padding: 3px;
`;

const Option = styled.option`
`;

const Right = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
const MenuItem = styled.div`
    margin-right: 10px;
    color: red;
    font-size: 16px;
    cursor: pointer;
`

/**
 * 
 *  <Wrapper>
            <Left>
                <SearchContainer>
                <Input/> 
                <Search style={{color: 'gray' ,fontSize: 16}}/>
                </SearchContainer>
                </Left>
            <Center>
                <Logo>Shopping-Cart</Logo>
            </Center>
            <Right>
                <MenuItem onClick={() =>navigate('/register')} >REGISTER</MenuItem>
                <MenuItem onClick={() =>navigate('/login')}>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={0} color='primary' >
                    < ShoppingCartOutlined />
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
 */
    
const Navbar = () => {
    const navigate = useNavigate();
  return(
      <Wrapper>
        <Container>
            <Center>
                <Filter >
                    <FilterText>Language:</FilterText>
                        <Select>
                            <Option>Fi</Option>
                            <Option>Sw</Option>
                            <Option>En</Option>
                        </Select>
                </Filter>
            </Center>
            <Right>
                <MenuItem onClick={() =>navigate('/register')} >REGISTER</MenuItem>
                <MenuItem onClick={() =>navigate('/login')}>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={0} color='primary' >
                    < ShoppingCartOutlined />
                </Badge>
                </MenuItem>
            </Right>
        </Container>
        <SearchContainer>
            <Input/> 
            <Search style={{color: 'gray' ,fontSize: 16}}/>
        </SearchContainer>
    </Wrapper>
  )
};

export default Navbar;
