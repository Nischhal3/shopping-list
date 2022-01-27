import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import { mobile, mobile1024, mobile280, mobile540, mobile820 } from '../responsive';
import CategoryItem from './CategoryItem';

const Container = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 30px;

    ${mobile280({
     gridTemplateColumns: '1fr 1fr',
     width: '90vw',
     padding: '0px',
     margin: '20px'
    })} 

    ${mobile({
     gridTemplateColumns: '1fr 1fr',
     width: '90vw',
     padding: '0px',
    })} 
    ${mobile540 ({
     gridTemplateColumns: '1fr 1fr',
    })} 
    ${mobile820 ({
     gridTemplateColumns: '1fr 1fr',
    })} 
    ${mobile1024 ({
      width: '95vw',
      margin: '15px'
    })} 
    
`;

const Categories = () => {
  return (  
     <Container>
        {categories.map((item)=>(
            <CategoryItem key={item.id} item={item}  />
        ))}
    </Container>
  );
};

export default Categories;
