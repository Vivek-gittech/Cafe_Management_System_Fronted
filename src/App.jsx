// import React from 'react'
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Home from './pages/Home'
// import Menu from './pages/Menu'
// import ManagerDashBoard from './pages/ManagerDashBoard'
// import Navbar from './Nav.jsx'
// import Register from './pages/Register.jsx'
// import Login from './pages/Login'
// import CustomerDashboard from './pages/CustomerDashabord.jsx'
// import Chef from './pages/ChefOrderUpdate.jsx'
// import Admin from './pages/Admin/AdminDashBoard'
// import Staff from './pages/Admin/Staff.jsx'
// import CustomerManagement from './pages/Admin/Customer.jsx'
// import AdminMenu from './pages/Admin/AddMenu'
// import ActiveOrder from'./pages/Admin/ActiveOrder'
// import Waiter from './pages/Admin/Waiter'
// import AddStaff from './pages/Admin/AddStaff'

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen flex flex-col bg-white">
//         {/* Navbar stays outside Routes so it is visible on all pages */}
//         {/* <Navbar /> */}

//         <main className="flex-1">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/Menu" element={<Menu />} />
//             <Route path="/ManagerDashboard" element={<ManagerDashBoard />} />
//             <Route path="/Login" element={<Login/>}/>
//             <Route path="/Register" element={<Register/>}/>
//             <Route path="/CustomerDashboard" element={<CustomerDashboard/>}/>
//             <Route path="/Chef" element={<Chef/>}/>
//             <Route path="/Admin/Dashboard" element={<Admin/>}/>
//             <Route path="/Admin/Staff" element={<Staff/>}/>
//             <Route path="/Admin/Customer" element={<CustomerManagement/>}/>
//             <Route path="/Admin/Menu" element={<AdminMenu/>}/>
//             <Route path="/Admin/ActiveOrder" element={<ActiveOrder/>}/>
//             <Route path="/Waiter" element={<Waiter/>}/>
//             <Route path="/Admin/AddStaff" element={<AddStaff/>}/>
//           </Routes>
//         </main>

//         <footer className="bg-white py-6 border-t border-gray-100">
//           <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
//             © {new Date().getFullYear()} Café Nova — Built with ❤️
//           </div>
//         </footer>
//       </div>
//     </BrowserRouter>
//   )
// }


import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import ManagerDashBoard from './pages/ManagerDashBoard';
import Navbar from './Nav.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login';
import CustomerDashboard from './pages/CustomerDashabord.jsx';
import Chef from './pages/ChefOrderUpdate.jsx';
import Admin from './pages/Admin/AdminDashBoard';
import Staff from './pages/Admin/Staff.jsx';
import CustomerManagement from './pages/Admin/Customer.jsx';
import AdminMenu from './pages/Admin/AddMenu';
import ActiveOrder from './pages/Admin/ActiveOrder';
import Waiter from './pages/Admin/Waiter';
import AddStaff from './pages/Admin/AddStaff';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/managerdashboard" element={<ManagerDashBoard />} />
            
            {/* Standardized lower-case routes with casing fallback support */}
            <Route path="/login" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            
            <Route path="/register" element={<Register />} />
            <Route path="/Register" element={<Register />} />

            <Route path="/customerdashboard" element={<CustomerDashboard />} />
            <Route path="/CustomerDashboard" element={<CustomerDashboard />} />

            <Route path="/chef" element={<Chef />} />
            <Route path="/Chef" element={<Chef />} />

            <Route path="/admin/dashboard" element={<Admin />} />
            <Route path="/Admin/Dashboard" element={<Admin />} />

            <Route path="/admin/staff" element={<Staff />} />
            <Route path="/Admin/Staff" element={<Staff />} />

            <Route path="/admin/customer" element={<CustomerManagement />} />
            <Route path="/Admin/Customer" element={<CustomerManagement />} />

            <Route path="/admin/menu" element={<AdminMenu />} />
            <Route path="/Admin/Menu" element={<AdminMenu />} />

            <Route path="/admin/activeorder" element={<ActiveOrder />} />
            <Route path="/Admin/ActiveOrder" element={<ActiveOrder />} />

            <Route path="/waiter" element={<Waiter />} />
            <Route path="/Waiter" element={<Waiter />} />

            <Route path="/admin/addstaff" element={<AddStaff />} />
            <Route path="/Admin/AddStaff" element={<AddStaff />} />
          </Routes>
        </main>

        <footer className="bg-white py-6 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Café Nova — Built with ❤️
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}