import React from 'react'
import Card1 from '../cards/card1'
import { Card2 } from '../cards/card2';
import Carousel from '../cards/crousel';
import Card3 from '../cards/card3';
import ThemeToggle from '../cards/themeToggle';

function page() {
    const imageSrc = "./images/img1.jpg"; // replace with actual image source
    const text = "Las vegas Aviators"; // replace with actual text

    return (
        <div className='dark:bg-black  dark:text-white'>
            <ThemeToggle/>
            <div className='w-11/12 m-auto mt-10'>
                <p className='mb-6 text-3xl underline  underline-offset-8 underline-red'> Sport</p>
                <div className="flex gap-2 ">

            <Card1  imageSrc={imageSrc} text={text} event={"28 Events"}  sport={"sport"}/>
            <Card1 imageSrc="./images/img4.jpg" text={text} event={"28 Events"}  sport={"sport"}/>
            <Card1 imageSrc={imageSrc} text={text} event={"28 Events"}  sport={"sport"}/>
            <Card1 imageSrc="./images/img4.jpg"  text={text} event={"28 Events"}  sport={"sport"}/>
            <Card3/>
          {/* qqq */}
                </div>
               <div className='w-full flex justify-center mt-10 mb-8 '>
               <button className='bg-blue-400 p-3 rounded-md m-auto my-4 dark:text-white text-white'> Show More</button>
               </div>

                <div className="dark:bg-gradient-to-br from-green-900 to-purple-900 flex flex-col justify-center items-center  m-auto pt-10 pb-5 ">
                    <h1 className='text-5xl font-bold py-5 '>Collection  Spotlight</h1>
                    <p className='w-3/5 text-center py-7 ' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quae, assumenda illum alias, ea repudiandae deleniti reiciendis mollitia rerum maiores doloremque distinctio </p>
                
                   <Carousel  />
                </div>
            </div>
        </div>
    )
}

export default page