import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { sliderItems } from '../data';
import { mobile, mobile540, mobile820 } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({
        height: '30vh',
    })} 

    ${mobile540({
       height: '60vh'
    })}
    ${mobile820({
       height: '60vh'
    })}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translate(${(props) => props.slideIndex * -100}vw);
    transition: all 1.5s ease;

`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
    ${mobile({
       height: '30vh'
    })} 

`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    margin-left: 80px;
    ${mobile({
        marginLeft: '5px',
        height: '70%',
    })}
    ${mobile540({
       height: '50vw',
       marginBottom: 300
    })} 
    ${mobile820({
       height: '70vw',
       marginBottom: 300
    })} 
   
`;

const Image = styled.img`
    height:80%;
    ${mobile({
        height: '100%',
        paddingLeft: '40px'
    })}  
`;

const InfoContainer = styled.div`
    height: 100%;
    flex: 1;
    padding: 50px;
    ${mobile({
       height: '22%'
    })}  
    ${mobile820({
       marginTop: 400
    })} 
    ${mobile540({
       marginTop: 140
    })} 
`;

const Title = styled.h1`
    font-size: 70px;
    ${mobile({
        fontSize: '10px',
    })}
    
    ${mobile820({
       fontSize: '30px',
    })}
    ${mobile540({
       fontSize: '25px',
    })}
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    ${mobile({
        display: 'none',
    })} 
    ${mobile540({
        display: 'none',
    })} 
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px; 
    background-color: transparent ;
    cursor: pointer;
    ${mobile({
        padding:'0px',
        fontSize: '10px',
        marginBottom: '10px'
    })} 
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const navigate = useNavigate();
    const handleClick = (direction) =>{
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1: 2 )
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1: 0)
        }
    };

  return(
      <Container>
          <Arrow direction='left' onClick={()=>handleClick('left')}>
              <ArrowLeftOutlined/>
          </Arrow>
          <Wrapper slideIndex={slideIndex} >
              {sliderItems.map((item) =>(
              <Slide key={item.id} bg={item.bg}>
                <ImgContainer>
                    <Image src={item.image}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.description}</Desc>
                    <Button onClick={() =>navigate('/products')}>BUY NOW</Button>
                </InfoContainer>
              </Slide>
              ))}
          </Wrapper>
          <Arrow direction='right' onClick={()=>handleClick('right')}>
              <ArrowRightOutlined/>
          </Arrow>
      </Container>
  )
};

export default Slider;