//import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList'
import Register from './pages/Register';
//import Categories from './components/Categories';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


const App = () => {
    //<ProductList/>
    //<Product/>
    //<Register/>
    //<Login/>
    return(
        <Router>
          <div style={{display: 'flex', alignItems:'center', justifyContent:'space-around', margin: '10px'}}>
          <Link style={{ fontWeight: 'bold',fontSize: '20px', color: 'chocolate'}} to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/Register'>Register</Link>
          <Link to='/Login' >Login</Link>
          </div>
            <Routes>
              < Route path="/" element={<Home/>} />
              < Route path="products" element={<ProductList/>} />
              < Route path="register" element={<Register/>} />
              < Route path="Login" element={<Login/>} />
              < Route path="product" element={<Product/>} />
            </Routes>
        </Router>
    )

};

export default App;