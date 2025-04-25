'use client';
import {Card} from "@/app/_components/Card";
import {format}from "date-fns"
import {Search}from "@/app/_components/Search";
import {Suggestions}from "@/app/_components/Suggestions";
import { useState } from "react";
import { YellowRound } from "./YellowRound";
import {PurpleRound} from"@/app/_components/PurpleRound";

export const Container =({countries})=>{
    const date=new Date();
    const formatedDate=format(date, "MM,dd,yyyy");
    const city="Ulaanbaatar";
    const something="clear";
   
    
    const [search, setSearch]=useState('')
    const searchHandler=(event)=>{
    setSearch(event.target.value)
    }


const oldson = countries.flatMap((el)=>{
  const filteredCities = el.filter((city)=>{
    if (city.cityName.toLowerCase().includes(search)){
      return true;
    }
  });
  return filteredCities;
});
    return ( <div
    className="flex justify-center items-center
   h-screen   "
  >
   


    {/*  background white  */}
<div className=" relative flex w-[800px] h-[1200px] bg-[#F3F4F6]    flex items-center justify-center   ">
<div className="z-100 absolute  top-20 left-40 w-[500px] h-[80px] ">
   < Search onChange={searchHandler} value={search}/>
   {oldson.length && search  &&(
    
    <div className=" top-16 left-16 z-100  bg-white">
      <Suggestions oldson={oldson}/></div>
   )}
   </div>


    
      <Card date={formatedDate} city={city} path={'/sun.png' }  degree={0.2} something={something}  somethingcolor="text-[#FF8E27]" />
      <YellowRound/>
     
  <img src="/Images/Vector.png" className=" absolute left-[750px] z-8 " />
    </div>

    
  {/* ard taliin har background */}
    <div className="relative flex w-[800px] h-[1200px] bg-black rounded-e-md flex  items-center justify-center ">
      <div></div>
    <Card date={formatedDate} city={city} path={'/moon.png'} degree={"-6.5"} something={something} textcolor="text-gray-100" degreecolor="text-gray-300" bakcgroundgrad="bg-gradient-to-t from-[#11182700] to-[#1F2937]" iconcolor={"white"} somethingcolor="text-[#777CCE] "/>
    <PurpleRound/>
      
      {/* booronhii tsagaan*/}
      <div className="absolute left-[1px] z-6 outline-none w-[75px] h-[149px] bg-[#F3F4F6]  border-[100%] rounded-tr-full rounded-br-full "></div>
      {/* murui deed */}
      <div className="z-6 absolute left-[1px]  outline-none w-[65px] h-[60px] bg-[#F3F4F6]   border-[100%] top-[483px]  "></div>
      <div className="z-6 absolute left-[1px] outline-none w-[65px] h-[61px] bg-black border-[100%] top-[483px] rounded-bl-full "></div>

      {/* murui */}
      <div className="z-6 absolute left-[1px] outline-none w-[65px] h-[65px] bg-[#F3F4F6] border-[100%]  top-[655px] "></div>
      <div className="z-6 absolute left-[1px]  outline-none w-[70px] h-[69px] bg-black border-[100%]  top-[653px] rounded-tl-full "></div>
      
      <img src="/Images/icon.png " className=" absolute z-20 left-[10px]  " />
    </div>
  </div>
    )
}