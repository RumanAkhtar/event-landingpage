"use client"
import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { Card2 } from './card2';

export default function Carousel() {
    const [start, setStart] = useState(0);
    const imageSrc = "./images/img1.jpg"; // replace with actual image source
    const text = "Las vegas Aviators"; // replace with actual text

    const cards = [
        { imageSrc: "./images/img1.jpg", text: text, event: "1 Events", sport: "sport" },
        { imageSrc: "./images/img2.jpg", text: text, event: "2 Events", sport: "sport" },
        { imageSrc: "./images/img3.jpg", text: text, event: "3 Events", sport: "sport" },
        { imageSrc: "./images/img4.jpg", text: text, event: "4 Events", sport: "sport" },
    ];

    const next = () => {
        // if(prevStart<cards.length){
          if(start+3<cards.length){
         

            setStart((prevStart) => (prevStart + 1) % cards.length);
          }

        
    };

    const prev = () => {
        if(start > 0) {
          // alert(start);
        setStart((prevStart) => (prevStart - 1 + cards.length) % cards.length);
        }
    };
  
    return (
      <div className="flex items-center justify-center">
         <button className="bg-transparent border border-blue-400 border-solid text-blue-400 hover:bg-gray-400 font-bold p-4 rounded-sm mr-10" onClick={prev}><FaChevronLeft/></button>
        <div className='flex w-3/5 gap-6 overflow-hidden'>
          {cards.slice(start, start + 3).map((card, index) => (
            <div className="w-1/3 px-1" key={index}>
              <Card2 imageSrc={card.imageSrc} text={card.text} event={card.event} sport={card.sport} />
            </div>
          ))}
        </div>
      
      <button className="bg-transparent border border-blue-400 border-solid text-blue-400 hover:bg-gray-400 font-bold p-4 rounded-sm ml-10" onClick={next}><FaChevronRight/></button>
        
        
      </div>
    );
  }
  