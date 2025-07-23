import { LoginForm } from "@/components/login-form"
import { SignUpForm } from "@/components/signup-form"
import { Home } from "@/components/home"
import { Cart } from "@/components/cart"
import { ConfirmOrder } from "@/components/confirm"
import { Prescription } from "@/components/prescription"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
    <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/signup-form" element={<SignUpForm/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirm" element={<ConfirmOrder />} />
        <Route path="/prescription" element={<Prescription />} />
        </Routes>
        </AnimatePresence> 
  )
}

export default App