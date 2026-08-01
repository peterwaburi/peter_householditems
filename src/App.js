import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ProductsAndServices from './components/ProductsAndServices';
import Mpesa from './components/Mpesa';
import Cart from './components/Cart';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import TopBar from './components/TopBar';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import AboutUs from './components/aboutus';


import CustomerDashboard from "./pages/customer/CustomerDashboard";
import BookService from "./pages/customer/BookService";
import PublicLayout from "./layouts/PublicLayout";
import CustomerLayout from "./layouts/CustomerLayout";
import WorkerLayout from "./layouts/WorkerLayout";
import ManagerLayout from "./layouts/ManagerLayout";
import Shop from './components/Shop';
import Services from "./components/Services";
import NavBar from './components/layout/NavBar';

function App() {
  return (

    <div className="container-fluid">
      <div className="App">

       


        <TopBar />
        <NavBar />



        <Routes>

          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/mpesa" element={<Mpesa />} />
          </Route>

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<CustomerLayout />}>
            <Route path="/customer/dashboard" element={<CustomerDashboard />} />
            <Route path="/customer/book" element={<BookService />} />
          </Route>

          <Route element={<WorkerLayout />}>
            {/* Worker routes will go here */}
          </Route>

          <Route element={<ManagerLayout />}>
            {/* Manager routes will go here */}
          </Route>


        </Routes>
      </div>
    </div>



  );
}

export default App;
