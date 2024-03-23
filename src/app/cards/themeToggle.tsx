"use client"
import React, { useEffect, useState } from 'react'
import {FaMoon} from "react-icons/fa";
import {BsSunFill} from "react-icons/bs";

function ThemeToggle() {
    const [darkMode,setDarkMode] = useState(true);
    useEffect(()=>{
        const theme=localStorage.getItem("theme");
        if(theme==="dark"){
            setDarkMode(true);
        }
        
    },[])

      useEffect(()=>{
       if(darkMode){
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme","dark");
       }else{
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light");
       }
        
    },[darkMode])
  return (
<div className=' relative top-5 left-[90vw]  w-16 h-8 flex items-center dark:bg-black bg-teal-500 rounded-full p-1 border border-solid border-white' onClick={()=> setDarkMode(!darkMode)}>
    <FaMoon className='text-white size' size={18}/>
    <div 
        className="absolute bg-white dark:bg-emerald-400 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 "
        style={darkMode?{left:"2px"}:{right:"2px"}}
    >
    {/* saasasdasdadsa */}
    </div>
    <BsSunFill className='ml-auto text-yellow-500 text-[18px]'/>
</div>
  )
} 

export default ThemeToggle
