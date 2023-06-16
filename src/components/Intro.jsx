import React from 'react'
import { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Intro() {
  
  const [nav,showNav]=useState('nav1')
    const changeNav=()=>{
        if(nav=='nav1'){
            showNav('nav2')
        }
        else{
            showNav('nav1')
        }

    }
  return (
    <>
     <nav>
                    <ul className='grid grid-cols-2 text-center '>
                    <li className={nav=='nav1'?'py-3 hover:cursor-pointer bg-white font-semibold text-primary':'py-3 hover:cursor-pointer bg-[#f4f4f4] border-[#f4f4f4] border-2'} onClick={()=>changeNav()}>Get Started</li>
                    <li className={nav=='nav2'?'py-3 hover:cursor-pointer bg-white font-semibold text-primary':'py-3 hover:cursor-pointer bg-[#f4f4f4] border-[#f4f4f4] border-2'} onClick={()=>changeNav()}>Terms and Condition</li>
                    </ul>
      </nav>
                  {nav=='nav1'?<Form/>:<TermCondition/>}
                    
    </>
  )

}

const Form=()=>{
  const dispatch = useDispatch()
  const data =useSelector((state)=>state.data.name)
  const [name,setName]=useState(data)
 
  const handleChange=(e)=>{
    let value = e.target.value
    setName(value)
  }
  
  const handleClick=()=>{
    
    if(name=='' || name.length<3){
      alert("Please fill form properly")
    }
    else{
      dispatch({type:"Insert",payload:{
      name:"name",
      value:name
      }})
      dispatch({
        type:"INCREMENT_PAGE",
        })
    }
  }
  return(
    <>
                    <h1 className='md:mx-8 mx-4 lg:mt-8 font-medium text-black font-poppins'>Ready to be part of Lanceme Up family?</h1>
                    <h1 className='md:mx-8 mx-4  text-[#777777]  font-poppins'>Please fill the form honestly to get started.</h1>
                    <div className='md:mx-8 mx-4 bg-[#dfe3e4] mt-8 md:px-8 px-4'>
                    <h1 className='text-center font-medium text-black pt-4'>Enter your Name</h1>
                   <form>
                   <input type='text' className=' w-full mt-4 h-12 focus:outline-blue-500 p-1' value={name} onChange={handleChange}></input>
                    <button className='h-12 lg:mt-4 w-full bg-blue-400 mb-8' type='button'
                    onClick={handleClick}>
                      Next</button>
                   </form>
                    </div> 
    </>
  )
}

const TermCondition=()=>{
  return(
    <>
      <p className='mx-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    </>
  )
}
