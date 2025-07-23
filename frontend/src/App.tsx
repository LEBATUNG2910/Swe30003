import { LoginForm } from "@/components/login-form";
import { SignUpForm } from "@/components/signup-form";
import { Home } from "@/components/home";
import { ProductPage } from "@/components/product";
import { CheckoutPage } from "@/components/checkout";
import { UploadPrescriptionPage } from "@/components/upload_prescription";
import { StoreLocationPage } from "@/components/store_location";
// import { StaffDashboard } from "@/components/staff_dashboard";
// import { AdminDashboard } from "@/components/admin_dashboard";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup-form" element={<SignUpForm />} />
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/prescription" element={<UploadPrescriptionPage />} />
        <Route path="/branches" element={<StoreLocationPage />} />
        {/* <Route path="/staff-dashboard" element={<StaffDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
      </Routes>
    </AnimatePresence>
  );
}

export default App;