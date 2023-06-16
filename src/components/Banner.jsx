import React from 'react'

const Banner = () => {
    const heading ="Why Choose Lanceme Up ?"
    const card =[
        {
          
            icon:"fa-solid fa-user-gear text-green-500 text-8xl ",
            heading:"Professionals",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          
            icon:"fa-solid fa-users text-green-600 text-8xl",
            heading:"Team Support",
            des:"ALorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            icon:"fa-solid fa-lock text-green-600 text-8xl",
            heading:"200+ Projects",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
    ]
  return (
    <>
        <div className='bg-[#cfcfcf] w-full py-4 mt-8'>
        <h1 className='font-bold  text-2xl text-center'>
            {heading}
        </h1>
        <div className=' flex justify-center' >
          <div className='w-[90%] grid grid-cols-1 lg:gap-6 md:gap-4 lg:grid-cols-3 mt-4'>
             
             {
                card.map((data,index)=>{
                    return(
                        <div key={index} className='flex flex-col items-center' >
             
             <i class={data.icon}></i>
             <h1 className='font-semibold text-xl mt-4'>{data.heading}</h1>
             <h1 className='mt-4 text-[#2f3234]'>{data.des}</h1> 
              </div>
                    )
                })
             }
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
