import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'
import React from 'react'

const Signup = () => {
  return (
    <div className='flex justify-center items-center h-[500px] bg-gray-100'>
      <div className='w-98 bg-white p-6 shadow-lg rounded-lg'>
        <h1 className='text-xl font-semibold mb-4'>Signup</h1>
        <form action="">
        <Input type="text" placeholder="Name" className="mb-3" />
          <Input type="email" placeholder="Email" className="mb-3" />
          <Input type="password" placeholder="Password" className="mb-3" />
          <Button className='w-full'>Signup</Button>
        </form>
        <p className="text-sm mt-4">Already have an account? <Link to="/" className="text-blue-500">Login</Link></p>
      </div>
    </div>
  )
}

export default Signup
