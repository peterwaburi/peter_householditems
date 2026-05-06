import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProducts';
import Mpesa from './components/Mpesa';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import BeautifulFooter from './components/footer';


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

          </header>

          <Routes>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/addproducts' element={<AddProducts />} />
            <Route path='/' element={<GetProducts />} />
            <Route path='/mpesa' element={<Mpesa />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>

  );
}

export default App;
