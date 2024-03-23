import React from 'react'

interface Card1Props {
  imageSrc: string;
  text: string;
  event:string;
    sport:string;
}

const Card1 =({ imageSrc, text ,event,sport}:Card1Props ) => {
  return (
    <div className='flex-1 shadow-xl'>
        <div className='h-fit w-auto dark:bg-gray-700 p-2'>
            <img className='h-4/5 w-auto' src={imageSrc} alt="" />
            <p className='py-3'>{text}</p>
            <div className="flex dark:bg-black gap-16 p-3 ">
                <div>
                    <p className='text-[10px]'>
                        Total Events
                    </p>
                    <p>
                        {event}
                    </p>
                </div>
                <div>
                    <p className='text-[10px]'>
                        Total Events
                    </p>
                    {/* ... */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card1