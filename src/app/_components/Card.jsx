"use client";
import Image from "next/image";
import { SomeIcons } from "./SomeIcons";
import { MapPin, Loader } from "lucide-react";
export const Card = ({
  date,
  city,
  path,
  degree,
  something,
  textcolor,
  degreecolor,
  bakcgroundgrad,
  iconcolor,
  somethingcolor,
  loading,
}) => {
  if (loading) {
    return <Loader />;
  }
  return (
    <div
      className={`w-[414px] h-[820px] rounded-[40px] absolute   flex flex-col backdrop-blur-md shadow-lg items-center justify-center mt-[10px] items-between  z-20 ${bakcgroundgrad} `}
    >
      <div className=" mt-[8px]">
        <p className="text-gray-500 ">{date}</p>
        <div className=" flex gap-2 mr-[100px] mt-[8px]">
          <p className={`text-4xl font-bold  ${textcolor}`}>{city}</p>
          <MapPin color="grey" />
        </div>
      </div>

      <Image src={path} alt="" height={277} width={277} />

      <div className="mr-[100px">
        <p className={`text-8xl mt-4 font-bold ${degreecolor}`}>
          {degree} &deg;
        </p>
        <p className={`font-bold p-[10px]  ${somethingcolor}`}>{something}</p>
        <SomeIcons iconcolor={iconcolor} />
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="animate-spin">
      <Loader />
    </div>
  );
};
