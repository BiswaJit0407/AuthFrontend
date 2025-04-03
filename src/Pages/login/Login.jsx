import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
// import {useAuth}from '../../context/Authcontext';
import {loginuser,setauthtoken} from '../../services/api';
import { useForm } from 'react-hook-form'



const Login = () => {
const{register,handleSubmit}=useForm()
const navigate=useNavigate();

const onsubmit=async(data)=>{
const{token,user}=await loginuser(data);
localStorage.setItem("token",token);
localStorage.setItem("user",JSON.stringify(user));
setauthtoken(token);
navigate('/prospectfinder')
}

    return (
        <div className='flex justify-center items-center h-[500px] bg-gray-100'>
            <div className='w-98 bg-white p-6 shadow-lg rounded-lg'>
                <h2 className="text-xl font-semibold mb-4">Login </h2>
                <form onSubmit={handleSubmit(onsubmit)}>
                    <Input {...register("email",{required:true})}  type="email" placeholder="Email" className='mb-3' />
                    <Input {...register("password",{required:true})} type="password" placeholder="Password" className='mb-3' />
                    <Button className='w-full ' type="submit">Login</Button>


                </form>
                <p className="text-sm mt-4">Don't have an account? <Link to="/" className="text-blue-500">Sign Up</Link></p>
            </div>
        </div>
    )
}

export default Login
