//import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList'
import Register from './pages/Register';
//import Categories from './components/Categories';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import Announcement from './components/Announcement';

const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 5px;
`

const Select = styled.select`
  cursor: pointer;
  padding: 3px;
`;
const Option = styled.option`
`;

const App = () => {
    //<ProductList/>
    //<Product/>
    //<Register/>
    //<Login/>
    return(
        <Router>
          <Announcement />
          <div style={{display: 'flex', alignItems:'center', justifyContent:'space-around', margin: '10px'}}>
            <Link style={{ fontWeight: 'bold',fontSize: '20px', color: '#2A3D45'}} to='/'>Home</Link>
            <Link style={{ fontWeight: 'bold',fontSize: '20px', color: '#2A3D45'}} to='/products'>Products</Link>
            <Filter >
                <FilterText style={{ fontWeight: 'bold',fontSize: '20px', color: '#2A3D45'}}>Language:</FilterText>
                <Select>
                    <Option>Fi</Option>
                    <Option>Sw</Option>
                    <Option>En</Option>
                </Select>
              </Filter>
          </div>
            <Routes>
              < Route path="/" element={<Home/>} />
              < Route path="products" element={<ProductList/>} />
              < Route path="register" element={<Register/>} />
              < Route path="login" element={<Login/>} />
              < Route path="product/:id" element={<Product/>} />
            </Routes>
        </Router>
    )

};

export default App;