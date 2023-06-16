import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdjustOrder() {
  const dispatch =useDispatch()
  
  const {email,address,street,phoneNumber,bio,district}=useSelector((state)=>state.data.personal_detail)
  const image=useSelector((state)=>state.data.image)
  const [personal_detail,setDetail]=useState({
    email:email,
    address:address,
    street:street,
    phoneNumber:phoneNumber,
    bio:bio,
    district:district,
  })
  const districtOptions = [
    { value: 'achham', label: 'Achham' },
    { value: 'arghakhanchi', label: 'Arghakhanchi' },
    // Add more districts...
  ];
  const handleChange = (event) => {
    const name=event.target.name
    const value=event.target.value
    
    setDetail({...personal_detail,[name]:value})
    
    
  };

  const [errors, setErrors] = useState({check:""});
  
  // useEffect(()=>{
  //   if(personal_detail.email.length<5){
  //     setErrors({email:"Enter  email"})
  //   }else{
  //     setErrors({email:""})
  //   }
  // },[personal_detail.email])

  // useEffect(()=>{
  //   const validPhoneNumber = /^[0-9]{10}$/;
  //   if(!validPhoneNumber.test(personal_detail.phoneNumber)){
  //     setErrors({phone:"Enter Valid Number"})
  //   }else{
  //     setErrors({email:""})
  //   }
  // },[personal_detail.phoneNumber])

  
  const validataion =(event)=>{
    event.preventDefault();
    const validationErrors = {};
    setErrors({})
    // const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{4,}$/i;
    // if (!emailRegex.test(personal_detail.email)) {
    //   validationErrors.email = 'Enter Valid email';
    // }


    if(personal_detail.email==""){
      validationErrors.email = 'Enter Valid email';
    }
    const validPhoneNumber = /^[0-9]{10}$/;
    if(!validPhoneNumber.test(personal_detail.phoneNumber)){
      validationErrors.phone = 'Enter Valid Number';
    }
    if(personal_detail.address.length<4){
      validationErrors.address = 'Enter Valid Address';
    }
    if(personal_detail.bio==""){
      validationErrors.bio ="Enter Valid Bio"
    }
    if(personal_detail.district==""){
      validationErrors.district ="Please choose one"
    }
    if(imag==''){
      validationErrors.Image="Select your Profile Picture"
    }
    

    if (Object.keys(validationErrors).length > 0) {
      console.log("errorrrr ",errors)
      
      setErrors(validationErrors);
    } else {
      setErrors({})
      console.log('Form submitted successfully');
      
    }

  }

  const handleSub = (e) => {
    // setError(true)
    // const validPhoneNumber = /^[0-9]{10}$/;
    // if (validPhoneNumber.test(personal_detail.phoneNumber)) {
      
    // }
    // else{
    //   setnumerror(true)
    // }
    
    // if(numerror==false && personal_detail.username.length>0  && personal_detail.address.length >0 && personal_detail.email.length >0 && personal_detail.street.length>0)
    // {
    //   console.log("dispatch it")
    //   dispatch({type:'PERSONAL_DETAIL',payload:{
    //     name:'personal_detail',
    //     detail:personal_detail
    //   }})

    // }
    validataion(e)
    if(Object.keys(errors).length===0){
      console.log("errors toast",errors)
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


        dispatch({type:"Insert",payload:{name:"personal_detail",value:personal_detail}})
        dispatch({
          type:"INCREMENT_PAGE",
          })

    }else{
      console.log("sucess",errors)
      toast.error('Please Enter value carefully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    
    
  };
  const [imag,selImg]=useState(image)
  const handleImg=(event)=>{
    const file = event.target.files[0]
    dispatch({type:"Image",payload:file})
    console.log(file)
    selImg(file)
  }
  

   
  return (
    <>
     <nav>
                    <ul className='grid grid-cols-2 text-center '>
                    <li className={'py-3 hover:cursor-pointer bg-white text-primary font-semibold'}>Personal Information</li>
                    </ul>
                   </nav>
                   {/* <h1 className='md:mx-8 mx-4 lg:mt-8 font-medium text-black font-poppins'>{data}</h1> */}
                  <div className='mt-2'>
                  <form>
                   
        <div className='flex flex-col px-4'>
        </div>
        <div className='flex flex-col px-4 mt-2'>
          <label className='my-3' name='email'>Email</label>
          <input className='h-10 rounded-sm' type='email' name='email' id='email' value={personal_detail.email} onChange={handleChange}></input>
          {errors.email && <span className="error text-red-500">{errors.email}</span>}
        </div>
        
        {/* {error==true && personal_detail.email.length<=0?<h1 className='text-red-400 px-4'>Please enter email</h1>:""} */}
        <div className="flex flex-col px-4 mt-2">
          <label className='my-3' name='phoneNumber'>Phone Number</label>
          <input className='h-10 rounded-sm' type='tele' value={personal_detail.phoneNumber} onChange={handleChange} name='phoneNumber' id='phonenumber'></input>
          {errors.phone && <span className="error text-red-500">{errors.phone}</span>}
        </div>
        {/* {error==true && numerror==true ?<h1 className='text-red-400 px-4'>Please valid Phone Number</h1>:""} */}
        <div className="flex flex-col px-4 mt-2">
          <label className='my-3' name='address'>Address</label>
          <input className='h-10 rounded-sm'  type='text' value={personal_detail.address} onChange={handleChange} name='address' id='address'></input>
          {errors.address ? <span className="error text-red-500">{errors.address}</span>:""}
        </div>
        {/* {error==true && personal_detail.username.length<=0?<h1 className='text-red-400 px-4'>Please enter full name</h1>:""} */}
        <div className="flex flex-col px-4 mt-2">
          <label className='my-3' name='street'> Street Number</label>
          <input className='h-10 rounded-sm' type='text' value={personal_detail.street} onChange={handleChange} name='street' id='street'></input>
        </div>
        <div className="flex flex-col px-4 mt-2">
          <label className='my-3' name='bio'> Bio</label>
          <textarea className='rounded-sm'  value={personal_detail.bio} onChange={handleChange} name='bio' rows="4" cols="50"></textarea>
          {errors.bio ? <span className="error text-red-500">{errors.bio}</span>:""}
        </div>
        <div className="flex flex-col px-4 mt-2">
          <label name="district">District:</label>
        <select value={personal_detail.district} name="district" onChange={handleChange} className='h-10'>
  <option value="">Select a district</option>
  {districtOptions.map((district) => (
    <option key={district.value} value={district.value}>
      {district.label}
    </option>
  ))}
</select>
{errors.district ? <span className="error text-red-500">{errors.district}</span>:""}
</div>
{/* <CustInput label={"email"} name ={"name"} value={personal_detail.email} onChange={handleChange}></CustInput> */}

<div className="flex flex-col px-4 mt-2">
          <label  name='image'> Upload Profile Image</label>
          <input type='file' onChange={handleImg}></input>
          {errors.Image ? <span className="error text-red-500">{errors.Image}</span>:""}
  </div>
  
       
        
        {/* {error==true && personal_detail.username.length<=0?<h1 className='text-red-400 px-4'>Please enter street name</h1>:""} */}
     
   
                    </form>

                  </div>

                     <div className='w-full flex justify-between lg:px-8 md:px-4 mt-4'>
                     <button className='h-12 lg:mt-4  border-2 border-blue-500   mb-8 px-4' onClick={()=>dispatch({type:"DECREMENT_PAGE"})}>Previous</button>
                     <button className='h-12 lg:mt-4  bg-blue-400 mb-8 px-4 text-xl ' onClick={handleSub}>Next</button>
                     </div>
                     <ToastContainer />
    </>
    )
}

// const CustInput=(props)=>{
//   const {label,name,value,handleChange} =props
//     return(
//       <div className='flex flex-col px-4 mt-2'>
//           <label className='my-3' name={name}>{label}</label>
//           <input className='h-10 rounded-sm'  name={name}  value={value} onChange={handleChange}></input>
//         </div>
//     )
// }
