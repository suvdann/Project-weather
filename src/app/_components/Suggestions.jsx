'use client'
import{MapPin}from"lucide-react"
export const Suggestions=({oldson})=>{
    const firstFour=oldson.length>=3 ? oldson.splice(0, 3): oldson;
    return ( <div className="absolute flex flex-col rounded-4xl gap-[16px] w-[560px] h-[200px] bg-white z-100">
        {firstFour?.map((el, index)=>{
            return ( <div key={index} className="flex gap-4 p-2">
               < MapPin/>
               <p>{el.cityName},{el.countryName}{" "}</p>
            </div>
            );
        })}
    </div>
    );
};