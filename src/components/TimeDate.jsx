import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function TimeDate() {
  // const [adress, setPhoneNumber] = useState('');
  // const [email,setEmail]=useState("")
  // const [street]
  const dispatch =useDispatch();
  const [error,setError]=useState(false)
  const [numerror,setnumerror]=useState(false)
  const [personal_detail,setDetail]=useState({
    username:"",
    email:"",
    address:"",
    street:"",
    phoneNumber:"",
  })
  const handleChange = (event) => {
    const name=event.target.name
    const value=event.target.value
    
    setDetail({...personal_detail,[name]:value})
    
    // const inputPhoneNumber = event.target.value;
    // const validPhoneNumber = /^[0-9]{10}$/; // regular expression to validate input as a 10-digit number
    // if (validPhoneNumber.test(inputPhoneNumber)) {
    //   setPhoneNumber(inputPhoneNumber);
    // }
    
  };

  const handleSub = () => {
    setError(true)
    const validPhoneNumber = /^[0-9]{10}$/;
    if (validPhoneNumber.test(personal_detail.phoneNumber)) {
      
    }
    else{
      setnumerror(true)
    }
    
    if(numerror==false && personal_detail.username.length>0  && personal_detail.address.length >0 && personal_detail.email.length >0 && personal_detail.street.length>0)
    {
      console.log("dispatch it")
      dispatch({type:'PERSONAL_DETAIL',payload:{
        name:'personal_detail',
        detail:personal_detail
      }})

    }
    
  };
  return (
    <div>
      {/* <form onSubmit={()=>{}}> */}
        <div className='flex flex-col px-4 mt-2'>
          <label className='my-3' name='username'>Full Name</label>
          <input className='h-10 rounded-sm' type='text' value={personal_detail.username} onChange={handleChange} name='username' id='username'></input>
        </div>
        {error==true && personal_detail.username.length<=0?<h1 className='text-red-400 px-4'>Please enter full name</h1>:""}
        <div className='flex flex-col px-4 mt-2'>
          <label className='my-3' name='email'>Email</label>
          <input className='h-10 rounded-sm' type='email' name='email' id='email' value={personal_detail.email} onChange={handleChange}></input>
        </div>
        {error==true && personal_detail.email.length<=0?<h1 className='text-red-400 px-4'>Please enter email</h1>:""}
        <div className="flex flex-col px-4 mt-2">
          <label className='my-3' name='phoneNumber'>Phone Number</label>
          <input className='h-10 rounded-sm' type='number' value={personal_detail.phoneNumber} onChange={handleChange} name='phoneNumber' id='phonenumber'></input>
        </div>
        {error==true && numerror==true ?<h1 className='text-red-400 px-4'>Please valid Phone Number</h1>:""}
        <div className="flex flex-col px-4 mt-2">
          <label className='my-3' name='address'>Address</label>
          <input className='h-10 rounded-sm'  type='text' value={personal_detail.address} onChange={handleChange} name='address' id='address'></input>
        </div>
        {error==true && personal_detail.username.length<=0?<h1 className='text-red-400 px-4'>Please enter full name</h1>:""}
        <div className="flex flex-col px-4 mt-2">
          <label className='my-3' name='street'> Street Number</label>
          <input className='h-10 rounded-sm' type='text' value={personal_detail.street} onChange={handleChange} name='street' id='street'></input>
        </div>
        {error==true && personal_detail.username.length<=0?<h1 className='text-red-400 px-4'>Please enter street name</h1>:""}
        <button className='h-12 lg:mt-4  bg-blue-400 mb-8 px-4 text-xl ' onClick={()=>handleSub()}>Next</button>
      {/* </form> */}
    </div>
  )
}
