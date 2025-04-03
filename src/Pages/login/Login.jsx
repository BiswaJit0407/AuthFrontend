import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'
import React from 'react'

const Login = () => {
    return (
        <div className='flex justify-center items-center h-[500px] bg-gray-100'>
            <div className='w-98 bg-white p-6 shadow-lg rounded-lg'>
                <h2 className="text-xl font-semibold mb-4">Login </h2>
                <form action="">
                    <Input type="email" placeholder="Email" className='mb-3' />
                    <Input type="password" placeholder="Password" className='mb-3' />
                    <Button className='w-full'>Login</Button>


                </form>
                <p className="text-sm mt-4">Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link></p>
            </div>
        </div>
    )
}

export default Login
