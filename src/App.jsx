import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CodeApp from "./pages/CodeApp";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Features from "./pages/Features";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/codeApp" element={<CodeApp />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}



