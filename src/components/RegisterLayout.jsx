import React from 'react'
import { useState,useReducer } from 'react'
import Intro from './Intro'
import {  useSelector } from 'react-redux'
// import PersonalInfo from './PersonalInfo'
// import TimeDate from './TimeDate'
import Banner from './Banner'
import Preview from './Preview'
import PersonalInfo from './PersonalInfo'

export default function BookLayout() {
  
   const {page} =useSelector((state)=>state.data)
 
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
                    {/* {
                      page==2?<TimeDate/>:""
                    } */}
                    </div>
            </div>
            <div className=' flex md:hidden font-medium text-3xl justify-between px-2'>
              <h1>See Preview</h1>
               </div>
           <Preview url={"register"}/>
            
      </div>
      
      <Banner/>
    </div>
  )
}
