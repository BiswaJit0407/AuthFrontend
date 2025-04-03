import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import { AuthProvider } from "./context/Authcontext";
import ProtectedRoute from "./components/protectedroute/Protectedroute";
import Prospectfinder from "./Pages/Prospectfinder/Prospectfinder";
import Mainlayout from "./Pages/pagelayout/Mainlayout";
import Planes from "./Pages/Plans/Planes";
import Myaccount from "./Pages/MyAccount/Myaccount";


function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoute><Mainlayout/></ProtectedRoute>}>
            <Route path="/prospectfinder" element={<Prospectfinder />} />
            <Route path="/plans" element={<Planes />} />
            <Route path="/account" element={<Myaccount />} />
          </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
