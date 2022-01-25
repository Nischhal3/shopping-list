import { AlternateEmail, Facebook, Instagram, LinkedIn, Phone, Room } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile, mobile280 } from '../responsive';
const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({
       padding: '5px'
    })}

`;
const Logo = styled.h1`
    ${mobile({
       fontSize: '20px',
       marginBottom: '10px'
    })}
`;
const Description = styled.p`
    margin: 20px 0px;
    ${mobile({
       display : 'none'
    })} 
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    ${mobile280({
        width: '30px',
        height: '30px',
        marginRight:'10px'
    })}
`;
const Center = styled.div`
     flex:1;
     padding: 20px;
     ${mobile({
       display : 'none'
    })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({
        padding: '5px'
        })}
`;

const Contact = styled.h3`
    margin-bottom: 10px;
    margin-left: 5px;
    ${mobile280({
        fontSize: '14px'
    })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    ${mobile({
       fontSize: '14px'
    })}

    ${mobile280({
        fontSize: '12px',
        marginBottom: '10px'
    })}
`;

const Footer = () => {
  return (
      <Container>
          <Left>
              <Logo>&copy; Nischhal Shrestha.</Logo>
              <Description>
                  Added reposive design for home page with the moible screen of max-width 414 px. 
                  <br>TODO: responsive design for other pages.</br>
              </Description>
              <SocialContainer>
              <SocialIcon color='2B5999'>
                  <Facebook/>
              </SocialIcon >
              <SocialIcon color='E4405F'>
                  <Instagram/>
              </SocialIcon>
              <SocialIcon color='55ACEE'>
                  <LinkedIn/>
              </SocialIcon>
              </SocialContainer>

          </Left>
          <Center>
              <Title>Useful Links</Title>
              <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Women's Fashion</ListItem>
                  <ListItem>Men's Fashion</ListItem>
                  <ListItem>Cart</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>Accessories</ListItem>
              </List>
          </Center>
          <Right>
                <Contact>Contact</Contact>
                <ContactItem>
                    <Room/>Mainikitie 4 D, 02320 Espoo
                </ContactItem>
                <ContactItem>
                    <Phone/> +358-442222509
                </ContactItem>
                <ContactItem>
                    <AlternateEmail/> nischhal3@gmail.com
                </ContactItem>
          </Right>
      </Container>
  )
};

export default Footer;
