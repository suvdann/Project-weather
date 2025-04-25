"use client";
import { SearchIcon }from "lucide-react"
export const Search = ({value, onChange}) => {
  return <div className="flex gap-2 border border-white rounded-full bg-white  p-[24px]   items-center ">
<SearchIcon/>
<input placeholder="search" value={value} onChange={onChange} className="focus:outline-none font-bold text-[32px]   "></input>
  </div>;
  
};




