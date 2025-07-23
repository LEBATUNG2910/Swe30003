import { LoginForm } from "@/components/login-form"
import { SignUpForm } from "@/components/signup-form"
import { Home } from "@/components/home"
import { Cart } from "@/components/cart"
import { ConfirmOrder } from "@/components/confirm"
import { Prescription } from "@/components/prescription"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { ProductPage } from "@/components/product";
import { StoreLocationPage } from "@/components/store_location";
// import { StaffDashboard } from "@/components/staff_dashboard";
// import { AdminDashboard } from "@/components/admin_dashboard";


function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirm" element={<ConfirmOrder />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/signup-form" element={<SignUpForm />} />
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/branches" element={<StoreLocationPage />} />
        </Routes>
        </AnimatePresence> 
  );

        {/* <Route path="/staff-dashboard" element={<StaffDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}


}

export default App;