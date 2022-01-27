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

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const App = () => {
    return(
        <Router>
         <Announcement />
         <Container >
            <Link style={{ fontSize: '18px', color: '#2A3D45'}} to='/'>Home</Link>
            <Link style={{ fontSize: '18px', color: '#2A3D45'}}to='/products'>Products</Link>
        </Container>
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