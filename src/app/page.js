import Image from "next/image";
import SunCard from "./_components/SunCard";
import Dark from "./_components/dark";
import Input from "./_components/Input";
const Home = () => {
  return (
    <div
      className="flex justify-center items-center
     h-screen relative  "
    >
      {/* white */}
      <div className=" relative flex w-[800px] h-[1200px] bg-[#F3F4F6] rounded-s-md   flex items-center justify-center  ">
        <Input />
        <SunCard />

        <img src="/Images/Vector.png" className=" absolute left-[750px] z-8 " />
      </div>
      {/* dugui gadna */}

      <div className="relative flex w-[800px] h-[1200px] bg-black rounded-e-md flex justify-start  items-center justify-center ">
        {/* white backgr*/}
        <div className="z-6 outline-none w-[75px] h-[149px] bg-[#F3F4F6]  border-[100%] rounded-tr-full rounded-br-full "></div>
        {/* murui deed */}
        <div className="z-6 absolute  outline-none w-[51px] h-[44px] bg-[#F3F4F6]   border-[100%] top-[488px]  "></div>
        <div className="z-6 absolute  outline-none w-[60px] h-[46px] bg-black border-[100%] top-[488px] rounded-bl-full "></div>

        {/* murui */}
        <div className="z-6 absolute  outline-none w-[65px] h-[65px] bg-[#F3F4F6] border-[100%]  top-[655px] "></div>
        <div className="z-6 absolute  outline-none w-[70px] h-[69px] bg-black border-[100%]  top-[653px] rounded-tl-full "></div>
        <Dark />
        <img src="/Images/icon.png " className=" absolute z-6  " />
      </div>
    </div>
  );
};

export default Home;
{
}
