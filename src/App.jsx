import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './Pages/login/Login'
import Signup from "./Pages/signup/Signup";
import Navbar from "./components/Navbar/Navbar";

function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
