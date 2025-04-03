import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
const Navbar = () => {
  return (
    <>
     <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-semibold">MyApp</div>
      <div className="space-x-6">
        <Link to="/prospect-finder" className="hover:underline">Prospect Finder</Link>
        <Link to="/plans" className="hover:underline">Plans</Link>
        <Link to="/account" className="hover:underline">My Account</Link>
      </div>
      <button className="text-white hover:text-gray-300">
        <LogOut size={20} />
      </button>
    </nav>
    </>
     
    
  )
}

export default Navbar
