import React from 'react'
import { useState } from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Preview = (props) => {
  const dispatch =useDispatch()
  const navigate =useNavigate()
  const {url}=props
  const name=useSelector((state)=>state.data.name)
  const image=useSelector((state)=>state.data.image)
  console.log("preview ",image)
  const links=[
    {
      lin:"About",
      content:"<AboutContent/>"
    },
    {
      lin:"Timeline",
      content:"<AboutContent/>"
    }
  ]
  const [link,setLink]=useState('About')
  const changelink=(link)=>{
    setLink(link)
  }
  return (
    <div className=' w-full md:block items-center  p-2'>
     {url=="register"? <h1 className='text-bold text-2xl'>Preview of Profile</h1>:""}
      <div className='h-full flex justify-center items-center '>
        <div className={url=='register'?'about grid  grid-cols-1 md:w-[100%] w-[90%] min-h-[50%] shadow-md rounded-lg p-5':'md:grid-cols-3 about grid  grid-cols-1 md:w-[100%] w-[90%] min-h-[50%] shadow-md rounded-lg p-5'}>
          <div className='col-1 flex items-center flex-col justify-center'>
           {/* <div className='bg-green-400 md:w-[80%] w-[95%]'> */}
           {image?<img className='w-[250px] h-[250px] rounded-full' alt='user' src={URL.createObjectURL(image)}></img>:
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXNeW05OGMu4dgLwvR94x_kBUrj-ZGyIVKtF8EjQkwtF4gnLKWR_LO6puDAsj529vXwc&usqp=CAU" className='w-[60%]'></img>
           }
           
            <div  className=' w-[60%] mt-3'>
              <h1 className='text-gray-400 text-2xl'>Youtuber</h1>
              
            </div>
           </div>
          {/* </div> */}
          <div className='col-span-2  p-3'>
            <div className={url=='register'?'mt-3 flex justify-between':'mt-5 flex justify-between'}>
            <div>
            <h1 className='text-gray-400 text-3xl'>{name}</h1>
            <h1 className='text-blue-400 text-xl'>Web developer</h1>
            <h1 className='text-gray-400 text-xl mt-2'>Ratings: 5/10</h1>
            </div>
            <div><button className='bg-blue-400 p-2 text-white'
              onClick={()=>{
                  dispatch({type:"DECREMENT_PAGE"})
                  navigate("/register")

              }}  
            >Edit info</button></div>
            </div>
          
            <div className={url=='register'?'mt-3':'mt-5'}>
              <div className='flex'>
                {
                  links.map((m)=>{
                      return(
                        <h1 className={`text-xl mr-2 cursor-pointer   p-2 ${link==m.lin?'border-b-[3px] text-blue-400  border-blue-400':'text-gray-400'}`} onClick={()=>changelink(m.lin)}>{m.lin}</h1>
                      )
                  })
                }
                {/* <h1 className={`text-gray-400 text-xl mr-2 cursor-pointer   p-2 ${link=="About"?'border-b-[3px]  border-grey-400':''}`} onClick={()=>changelink("About")}>About</h1>
                <h1 className={`text-blue-400 text-xl mr-2 cursor-pointer p-2 ${link=="Timeline"?'border-b-[3px]  border-grey-400':''}` } onClick={()=>changelink("Timeline")}>Timeline</h1> */}
              </div>

              <div className=' md:w-[85%] mt-3'>
                {link=="About"?<Aboutcontent/>:""}
                {link=="Timeline"?<Timeline/>:""}    
                    
                  
              </div>
            </div>
          </div>
        </div>
       </div>
    
  </div>
  )
}

const Timeline=()=>{
  const bio=useSelector((state)=>state.data.personal_detail.bio)
  return(
    <div>{bio}</div>
  )
}
const Aboutcontent= ()=>{
  
  const name=useSelector((state)=>state.data.name)
  const {email,address,street,phoneNumber}=useSelector((state)=>state.data.personal_detail)
  
  return(

    <div>
    <div className='grid grid-cols-3 mt-2'>
  <h1 className='text-gray-700 font-semibold   col-span-2'>User Id</h1>
  <h1 className='text-blue-400  '>123456789</h1>

</div>

<div className='grid grid-cols-3 mt-2'>
  <h1 className='text-gray-700 font-semibold   col-span-2'>Name</h1>
  <h1 className='text-blue-400  '>{name}</h1>

</div>
<div className='grid grid-cols-3 mt-2'>
  <h1 className='text-gray-700 font-semibold   col-span-2'>Email</h1>
  <h1 className='text-blue-400  '>{email}</h1>
</div>

<div className='grid grid-cols-3 mt-2'>
  <h1 className='text-gray-700 font-semibold   col-span-2'>Address</h1>
  <h1 className='text-blue-400  '>{address}</h1>
</div>

<div className='grid grid-cols-3 mt-2'>
  <h1 className='text-gray-700 font-semibold   col-span-2'>Phone Number</h1>
  <h1 className='text-blue-400  '>{phoneNumber}</h1>

</div>

<div className='grid grid-cols-3 mt-2'>
  <h1 className='text-gray-700 font-semibold   col-span-2'>Street</h1>
  <h1 className='text-blue-400  '>{street}</h1>

</div>


{/* {Object.entries(personal_detail).map(([key, value]) => (
      
      
        <div key={key} className='grid grid-cols-3 mt-2'>
         <h1 className='text-gray-700 font-semibold   col-span-2'>hello</h1>
        <h1 className='text-blue-400 '>barbie</h1>
      </div>
      ))} */}

</div>
  )
}

export default Preview
