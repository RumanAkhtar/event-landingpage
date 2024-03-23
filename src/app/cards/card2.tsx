import React from 'react'

interface Card1Props {
    imageSrc: string;
    text: string;
    event:string;
      sport:string;
  }
  
  export  const Card2 =({ imageSrc, text ,event,sport}:Card1Props ) => {
    return (
      <div >



       <div className='h-fit w-fit dark:bg-gray-700  p-2 shadow-2xl'>
          <img className='h-fit w-auto' src={imageSrc} alt="" />
       
        <div className="border-t-2 border-dashed border-gray-500 my-5"></div>
          <p className='py-3 text-center font-bold'>{text}</p>
          <p className='text-center text-sm py-3'>OCT 15 | SUN | 4:30 PM </p>
          <p className='text-center text-xs pb-3 '>Sutter Health Park, Scramento, <br /> California</p>
      
          <div className="flex bg-black gap-16 p-1  justify-center text-xs py-3 text-white">
            Take Flight Collection
          </div>
       </div>
      </div>
    )
  }
  
