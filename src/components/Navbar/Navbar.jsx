import React from 'react'
import {   Link,useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import {loginuser, logout} from '../../services/api';


const Navbar = () => {
const navigate=useNavigate();

const onsubmit=()=>{
  logout();
  navigate("/login")
}

  return (
    <>
     <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-semibold">MyApp</div>
      <div className="space-x-6">
        <Link to="/prospectfinder" className="hover:underline">Prospect Finder</Link>
        <Link to="/plans" className="hover:underline">Plans</Link>
        <Link to="/account" className="hover:underline">My Account</Link>
      </div>
      <button className="text-white hover:text-gray-300" onClick={onsubmit}>
        <LogOut size={20} />
      </button>
    </nav>
    </>
     
    
  )
}

export default Navbar
