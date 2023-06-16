import React from 'react'
import Preview from '../components/Preview'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
  const navigate =useNavigate()
  const name =useSelector((state)=>state.data.name)
  return (
    <>
      {
        name!=""?<div className='h-screen flex justify-center items-center '>
        <Preview url={"profile"}/></div>
        :<div className='h-screen flex justify-center items-center '>
        <div className='flex flex-col'>
        <h1 className='text-text text-bold text-3xl'>User Not Found Please Register</h1>
      <button className='bg-blue-500 p-2 text-white text-2xl mt-2'
      onClick={()=>{navigate("/register")}}
      >Register</button>
        </div>
      </div>
      }
    </>
  )
}

export default Profile
