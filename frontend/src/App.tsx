import { LoginForm } from "@/components/login-form"
import { SignUpForm } from "./components/signup-form"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
    <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/signup-form" element={<SignUpForm/>} />
        </Routes>
        </AnimatePresence> 
  )
}

export default App