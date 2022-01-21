import React from 'react';
import styled from 'styled-components';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetters from '../components/NewsLetters';

const Container = styled.div``

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 5px;
`
const Select = styled.select`
    padding: 5px;
`;
const Option = styled.option``;

const ProductList = () => {
  return(
      <Container>
          <Navbar/>
          <FilterContainer>
                <Filter>
                  <FilterText>Filter Products:</FilterText>
                  <Select>
                      <Option>Men</Option>
                      <Option>Women</Option>
                      <Option>Electronic</Option>
                      <Option>Jwellery</Option>
                  </Select>
                </Filter>
                <Filter>
                  <FilterText>Sort By Price:</FilterText>
                  <Select>
                      <Option>1-100</Option>
                      <Option>100-200</Option>
                      <Option>200-400</Option>
                      <Option>400-800</Option>
                      <Option>800 and above</Option>
                  </Select>
                </Filter>
          </FilterContainer>
          <Categories />
          <NewsLetters/>
          <Footer/>
      </Container>
  )
};

export default ProductList;
