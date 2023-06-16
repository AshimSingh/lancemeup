import React from 'react'
import { useState,useReducer } from 'react'
import Intro from './Intro'
import {  useSelector,useDispatch } from 'react-redux'
// import PersonalInfo from './PersonalInfo'
// import TimeDate from './TimeDate'
import Banner from './Banner'
import Preview from './Preview'
import PersonalInfo from './PersonalInfo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
export default function BookLayout() {
  const dispatch =useDispatch()
   const {page} =useSelector((state)=>state.data)
  const navigate =useNavigate()
  return (
    <div>
      <div className=' lg:mx-8 mx-2 grid md:grid-cols-3 grid-cols-1 mt-4'>
            <div className=' md:col-span-2'>
                <div className='bg-[#f4f4f4] lg:mx-24 md:mx-12 min-h-96 py-4'>
                    {
                      page==0?<Intro/>:""
                    }
                    {
                      page==1?<PersonalInfo/>:""
                    }
                    {
                      page==2?<>
                      <Preview url={"a"}></Preview>
                      <div className='w-full flex justify-between lg:px-8 md:px-4 mt-4'>
                     <button className='h-12 lg:mt-4  border-2 border-blue-500   mb-8 px-4' onClick={()=>dispatch({type:"DECREMENT_PAGE"})} >Previous</button>
                     <button className='h-12 lg:mt-4  bg-blue-400 mb-8 px-4 text-xl ' onClick={()=>{
                      toast.success('Submitted Successfully', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                        navigate('/profile')
                    }} >Save</button>
                     </div>
                     
                      </>:""
                      
                    }
                    </div>
            </div>
            <div className=' flex md:hidden font-medium text-3xl justify-between px-2'>
              <h1>See Preview</h1>
               </div>
           {page!=2?<Preview url={"register"}/>:""}
            
      </div>
      
      <Banner/>
      <ToastContainer />
    </div>
  )
}
