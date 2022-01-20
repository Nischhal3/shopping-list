import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import Announcement from './Announcement';
import CategoryItem from './CategoryItem';
import Navbar from './Navbar';

const Container = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 30px;
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
