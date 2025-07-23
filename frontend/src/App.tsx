import { LoginForm } from "@/components/login-form";
import { SignUpForm } from "@/components/signup-form";
import { Home } from "@/components/home";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup-form" element={<SignUpForm />} />
        <Route path="/login-form" element={<LoginForm />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
