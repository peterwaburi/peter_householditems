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
import PublicServices from "./components/Services";
import NavBar from './components/layout/NavBar';
import CustomerOrders from "./pages/customer/CustomerOrders";
import CustomerNotifications from "./pages/customer/CustomerNotifications";
import CustomerReviews from "./pages/customer/CustomerReviews";
import CustomerVehicles from "./pages/customer/CustomerVehicles";
import WorkerHistory from "./pages/worker/WorkerHistory";
import WorkerNotifications from "./pages/worker/WorkerNotifications";
import WorkerProfile from "./pages/worker/WorkerProfile";
import AssignedJobs from "./pages/worker/AssignedJobs";
import JobDetails from "./pages/worker/JobDetails";
import ManageOrders from "./pages/manager/ManageOrders";
import ManageProducts from "./pages/manager/ManageProducts";
import ManageServices from "./pages/manager/ManageServices";
import Finance from "./pages/manager/Finance";
import ManageCustomers from "./pages/manager/ManageCustomers";
import ManageWorkers from "./pages/manager/ManageWorkers";
import Reports from "./pages/manager/Reports";
import Analytics from "./pages/manager/Analytics";
import Complaints from "./pages/manager/Complaints";
import Suggestions from "./pages/manager/Suggestions";
import Messages from "./pages/manager/Messages";
import SocialMedia from "./pages/manager/SocialMedia";
import Packages from "./pages/public/Packages";
import Checkout from "./pages/customer/Checkout";
import PaymentSuccess from "./pages/customer/PaymentSuccess";
import PaymentFailed from "./pages/customer/PaymentFailed";
import BookingSuccess from "./pages/customer/BookingSuccess";
import WorkerDashboard from "./pages/worker/Dashboard";
import Attendance from "./pages/worker/Attendance";
import LeaveRequest from "./pages/worker/LeaveRequest";
import Earnings from "./pages/worker/Earnings";
import WorkerMessages from "./pages/worker/Messages";
import Notifications from "./pages/worker/Notifications";
import WorkerSettings from "./pages/worker/Settings";
import Wishlist from "./pages/customer/Wishlist";
import Invoices from "./pages/customer/Invoices";
import Activity from "./pages/customer/Activity";
import Profile from "./pages/customer/Profile";
import CustomerSettings from "./pages/customer/Settings";
import Support from "./pages/customer/Support";
import FAQs from "./pages/customer/FAQs";
import Reviews from "./pages/manager/Reviews";
import ServiceProviders from "./pages/manager/ServiceProviders";
import StaffSchedule from "./pages/manager/StaffSchedule";
import Inventory from "./pages/manager/Inventory";
import Discounts from "./pages/manager/Discounts";
import Branches from "./pages/manager/Branches";
import SystemLogs from "./pages/manager/SystemLogs";
import BackupRestore from "./pages/manager/BackupRestore";
import RolesPermissions from "./pages/manager/RolesPermissions";
import AuditTrail from "./pages/manager/AuditTrail";
import Payments from "./pages/manager/Payments";
import Vehicles from "./pages/manager/Vehicles";
import BookingsCalendar from "./pages/manager/BookingsCalendar";
import ManagerNotifications from "./pages/manager/Notifications";
import Expenses from "./pages/manager/Expenses";
import Payroll from "./pages/manager/Payroll";
import Memberships from "./pages/manager/Memberships";
import Marketing from "./pages/manager/Marketing";
import Suppliers from "./pages/manager/Suppliers";
import Purchases from "./pages/manager/Purchases";
import FleetManagement from "./pages/manager/FleetManagement";
import Announcements from "./pages/manager/Announcements";
import Bookings from "./pages/manager/Bookings";
import Customers from "./pages/manager/Customers";
import Workers from "./pages/manager/Workers";
import ManagerServices from "./pages/manager/Services";
import Products from "./pages/manager/Products";
import Orders from "./pages/manager/Orders";

function App() {
  return (

    <div className="container-fluid">
      <div className="App">




        <TopBar />
        <NavBar />



        <Routes>

          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<PublicServices />} />
            <Route path="/packages" element={<Packages />} />
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
            <Route path="/customer/checkout" element={<Checkout />} />
            <Route path="/customer/payment-success" element={<PaymentSuccess />} />
            <Route path="/customer/payment-failed" element={<PaymentFailed />} />
            <Route path="/customer/booking-success" element={<BookingSuccess />} />
            <Route path="/customer/wishlist" element={<Wishlist />} />
            <Route path="/customer/invoices" element={<Invoices />} />
            <Route path="/customer/activity" element={<Activity />} />
            <Route path="/customer/profile" element={<Profile />} />
            <Route path="/customer/settings" element={<CustomerSettings />} />
            <Route path="/customer/support" element={<Support />} />
            <Route path="/customer/faqs" element={<FAQs />} />
          </Route>

          <Route element={<WorkerLayout />}>
            <Route path="/worker/jobs" element={<AssignedJobs />} />
            <Route path="/worker/job/:id" element={<JobDetails />} />
            <Route path="/worker/history" element={<WorkerHistory />} />
            <Route path="/worker/notifications" element={<WorkerNotifications />} />
            <Route path="/worker/profile" element={<WorkerProfile />} />
            <Route path="/worker/dashboard" element={<WorkerDashboard />} />
            <Route path="/worker/attendance" element={<Attendance />} />
            <Route path="/worker/leave-request" element={<LeaveRequest />} />
            <Route path="/worker/earnings" element={<Earnings />} />
            <Route path="/worker/messages" element={<WorkerMessages />} />
            <Route path="/worker/notifications" element={<Notifications />} />
            <Route path="/worker/settings" element={<WorkerSettings />} />
          </Route>

          <Route element={<ManagerLayout />}>
            <Route path="/manager/orders" element={<ManageOrders />} />
            <Route path="/manager/products" element={<ManageProducts />} />
            <Route path="/manager/services" element={<ManageServices />} />
            <Route path="/manager/finance" element={<Finance />} />
            <Route path="/manager/customers" element={<ManageCustomers />} />
            <Route path="/manager/workers" element={<ManageWorkers />} />
            <Route path="/manager/reports" element={<Reports />} />
            <Route path="/manager/analytics" element={<Analytics />} />
            <Route path="/manager/complaints" element={<Complaints />} />
            <Route path="/manager/suggestions" element={<Suggestions />} />
            <Route path="/manager/messages" element={<Messages />} />
            <Route path="/manager/social-media" element={<SocialMedia />} />
            <Route path="/manager/reviews" element={<Reviews />} />
            <Route path="/manager/service-providers" element={<ServiceProviders />} />
            <Route path="/manager/staff-schedule" element={<StaffSchedule />} />
            <Route path="/manager/inventory" element={<Inventory />} />
            <Route path="/manager/discounts" element={<Discounts />} />
            <Route path="/manager/branches" element={<Branches />} />
            <Route path="/manager/system-logs" element={<SystemLogs />} />
            <Route path="/manager/backup-restore" element={<BackupRestore />} />
            <Route path="/manager/roles" element={<RolesPermissions />} />
            <Route path="/manager/audit-trail" element={<AuditTrail />} />
            <Route path="/manager/payments" element={<Payments />} />
            <Route path="/manager/vehicles" element={<Vehicles />} />
            <Route path="/manager/bookings-calendar" element={<BookingsCalendar />} />
            <Route path="/manager/notifications" element={<ManagerNotifications />} />
            <Route path="/manager/expenses" element={<Expenses />} />
            <Route path="/manager/payroll" element={<Payroll />} />
            <Route path="/manager/memberships" element={<Memberships />} />
            <Route path="/manager/marketing" element={<Marketing />} />
            <Route path="/manager/suppliers" element={<Suppliers />} />
            <Route path="/manager/purchases" element={<Purchases />} />
            <Route path="/manager/fleet" element={<FleetManagement />} />
            <Route path="/manager/announcements" element={<Announcements />} />
            <Route path="/manager/bookings" element={<Bookings />} />
            <Route path="/manager/customers" element={<Customers />} />
            <Route path="/manager/workers" element={<Workers />} />
            <Route path="/manager/services" element={<ManagerServices />} />
            <Route path="/manager/products" element={<Products />} />
            <Route path="/manager/orders" element={<Orders />} />
            <Route path="/manager/reports" element={<Reports />} />
            <Route path="/manager/analytics" element={<Analytics />} />
          </Route>


        </Routes>
      </div>
    </div>



  );
}

export default App;
