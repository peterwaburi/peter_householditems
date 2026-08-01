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
import CustomerOrders from "./pages/customer/CustomerOrders";
import CustomerNotifications from "./pages/customer/CustomerNotifications";
import CustomerReviews from "./pages/customer/CustomerReviews";
import CustomerSettings from "./pages/customer/CustomerSettings";
import CustomerVehicles from "./pages/customer/CustomerVehicles";
import WorkerHistory from "./pages/worker/WorkerHistory";
import WorkerNotifications from "./pages/worker/WorkerNotifications";
import WorkerProfile from "./pages/worker/WorkerProfile";
import AssignedJobs from "./pages/worker/AssignedJobs";
import JobDetails from "./pages/worker/JobDetails";

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
            <Route path="/customer/orders" element={<CustomerOrders />} />
            <Route path="/customer/notifications" element={<CustomerNotifications />} />
            <Route path="/customer/reviews" element={<CustomerReviews />} />
            <Route path="/customer/settings" element={<CustomerSettings />} />
            <Route path="/customer/vehicles" element={<CustomerVehicles />} />
          </Route>

          <Route element={<WorkerLayout />}>
            <Route path="/worker/jobs" element={<AssignedJobs />} />
            <Route path="/worker/job/:id" element={<JobDetails />} />
            <Route path="/worker/history" element={<WorkerHistory />} />
            <Route path="/worker/notifications" element={<WorkerNotifications />} />
            <Route path="/worker/profile" element={<WorkerProfile />} />
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
