import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate =useNavigate()
  return (
    <>
        <div className='h-screen flex justify-center items-center '>
        <div className='flex flex-col'>
        <h1 className='text-text text-bold text-3xl'>Welcome to Lanceme UP</h1>
        <h1 className='text-text text-bold text-xl'>Get Started by Registering</h1>
      <button className='bg-blue-500 p-2 text-white text-2xl mt-2'
      onClick={()=>{navigate("/register")}}
      >Register</button>
     </div>
     </div>
    </>
  )
}

export default Home
