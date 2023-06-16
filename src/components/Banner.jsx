import React from 'react'

const Banner = () => {
    const heading ="Why Choose Atom Clean ?"
    const card =[
        {
            icon:"fa-solid fa-lock text-blue-400 text-8xl",
            heading:"Professional Cleaners",
            des:"All Whizz cleans are completed by professional cleaning companies and all cleaners have verified police checks, as well as supply their own equipment and products. Every clean booked via Whizz is fully insured."
        },
        {
            icon:"fa-solid fa-lock text-blue-400 text-8xl",
            heading:"Professional Cleaners",
            des:"All Whizz cleans are completed by professional cleaning companies and all cleaners have verified police checks, as well as supply their own equipment and products. Every clean booked via Whizz is fully insured."
        },
        {
            icon:"fa-solid fa-lock text-blue-400 text-8xl",
            heading:"Professional Cleaners",
            des:"All Whizz cleans are completed by professional cleaning companies and all cleaners have verified police checks, as well as supply their own equipment and products. Every clean booked via Whizz is fully insured."
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
