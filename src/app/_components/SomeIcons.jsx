import {House,MapPin,HeartPlus , UserRound }from "lucide-react"

export const SomeIcons =({iconcolor})=>{
    return <div className=" flex gap-15 mt-[30px]">
    <House color={iconcolor}/>
    <MapPin color={iconcolor} />
    <HeartPlus color={iconcolor} />
    <UserRound color={iconcolor} />
    </div>
}