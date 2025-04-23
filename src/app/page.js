import Image from "next/image"
import Card from "./_components/Card"
import Dark from "./_components/dark"
const Home = () => {
  return (
    <div className="flex justify-center items-center
     h-screen relative  ">
     
      {/* white */}
      <div className=" flex w-[800px] h-[1200px] bg-[#F3F4F6] rounded-s-md   flex items-center justify-center  ">
    <Card />

        <img src="/Images/Vector.png" className="  " />
      </div>
      {/* dugui gadna */}
      
      
      <div className="relative flex w-[800px] h-[1200px] bg-black rounded-e-md flex justify-start  items-center justify-center ">
        {/* white backgr*/}
        <div className="z-6 outline-none w-[80px] h-[150px] bg-[#F3F4F6]  border-[100%] rounded-tr-full rounded-br-full "></div> 
         {/* murui deed */}
        <div className="z-6 absolute  outline-none w-[50px] h-[45px] bg-[#F3F4F6]   border-[100%] top-[490px]  "></div>
        <div className="z-6 absolute  outline-none w-[51px] h-[48px] bg-black border-[100%] top-[490px] rounded-bl-full "></div>


          {/* murui */}
          <div className="z-6 absolute  outline-none w-[76px] h-[66px] bg-[#F3F4F6] border-[100%]  top-[656.6px] "></div>
          <div className="z-6 absolute  outline-none w-[80px] h-[67px] bg-black border-[100%]  top-[656.6px] rounded-tl-full "></div>
    <Dark/>
        <img src="/Images/icon.png " className=" absolute z-6  " />
      </div>
    </div>
  );
};

export default Home;
{
}
