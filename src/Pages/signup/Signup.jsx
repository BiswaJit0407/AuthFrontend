import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { useForm } from 'react-hook-form'
import { registeruser } from '@/services/api'


const Signup = () => {

  const{register,handleSubmit}=useForm();
  const navigate = useNavigate();

  const onsubmit=async(data)=>{
    try{
      await registeruser(data);
      alert("register sucessfull..")
      navigate("/login")
    }
    catch(err){
      alert(err.message || "signup failed")
      console.log("errpr:",err)
    }
  }

  return (
    <div className='flex justify-center items-center h-[500px] bg-gray-100'>
      <div className='w-98 bg-white p-6 shadow-lg rounded-lg'>
        <h1 className='text-xl font-semibold mb-4'>Signup</h1>
        <form onSubmit={handleSubmit(onsubmit)}>
        
          <Input {...register('email',{required:true})}type="email" placeholder="Email" className="mb-3" />
          <Input {...register('password',{required:true})}type="password" placeholder="Password" className="mb-3" />
          <Input {...register('fullname',{required:true})}type="text" placeholder="fullname" className="mb-3" />
          <Button className='w-full' type="submit">Signup</Button>
        </form>
        <p className="text-sm mt-4">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
      </div>
    </div>
  )
}

export default Signup
