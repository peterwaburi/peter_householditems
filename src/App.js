import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AddProducts from './components/AddProducts';
import ProductsAndServices from './components/ProductsAndServices';
import Mpesa from './components/Mpesa';
import Cart from './components/Cart';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import BeautifulFooter from './components/footer';
import TopBar from './components/hello';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import AboutUs from './components/aboutus';


function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="App">

          <header className="App-header text-center">

            <h1 className="logo-title">
              Bluewave <span className="highlight">Carwash</span> & Autospa
            </h1>

            <h3 className="subtitle">
              Premium care for your vehicle at affordable prices
            </h3>
            <TopBar />
          </header>

          <Routes>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/addproducts' element={<AddProducts />} />
            <Route path='/' element={<Home />} />
            <Route path='/productsandservices' element={<ProductsAndServices />} />
            <Route path='/about' element={<AboutUs />} />

            <Route path='/mpesa' element={<Mpesa />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/cart' element={<Cart />} />

          </Routes>
        </div>
      </div>

    </BrowserRouter>

  );
}

export default App;
