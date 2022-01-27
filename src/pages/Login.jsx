import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { mobile, mobile1024, mobile280, mobile540, mobile820 } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5) ), 
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    ${mobile280({
        height: '80vh'
    })} 
    ${mobile({
        height: '80vh'
    })} 
    ${mobile540({
        height: '95vh'
    })} 
    ${mobile820({
        height: '60vh'
    })} 
`

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
    box-sizing: border-box;
    border: 2px solid gray;
    box-shadow: 5px 10px #888888;
    border-radius: 1%;

    ${mobile280({
        width: '90%'
    })}
    
    ${mobile({
        width: '90%'
    })}

    ${mobile540({
        width: '90%'
    })}

    ${mobile820({
        width: '60%'
    })}

    ${mobile1024({
        width: '60%'
    })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

    ${mobile280({
        fontSize: '14px'
    })} 
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 5px;
    border: 1px solid gray;
    box-shadow: 2px 2px #888888;

    ${mobile280({
       margin: '12px 7px 0px 0px'
    })} 
`

const Link = styled.h3`
    font-size: 15px;
    margin-bottom: 5px;
    text-decoration: underline;
    cursor: pointer;
`

const Button= styled.button`
    margin: 20px 0px 20px 0px;
    width: 40%;
    border: none;
    padding: 5px 5px;
    background-color: teal;
    color: white;
    cursor: pointer;

    ${mobile280({
       width: '60%',
       fontSize: '10px'
    })} 

    ${mobile({
        width: '50%'
    })}
`

const Login = () => {
    const navigate = useNavigate();
  return (
     <div>
          <Container>
          <Wrapper>
              <Title>SIGN IN</Title>
              <Form>
                  <Input placeholder="username" />
                  <Input placeholder="email" />
                  <Input placeholder="password" />
                  <Button>LOGIN</Button>
                  <Link>Forgot password?</Link>
                  <Link onClick={() =>navigate('/register')}>Create a new account.</Link>
              </Form>
          </Wrapper>
      </Container>
      <Footer />
     </div>
  )
};

export default Login;
