const Home = () => {
  return (
    <div className="flex h-screen relative gap-4">
      <div className="flex-1 bg-white rounded-s-md flex justify-end  flex items-center justify-center  ">
        <img src="/Images/Vector.png" className=" r" />
      </div>
      {/* dugui gadna */}
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] border border-grey-300 rounded-full overflow-hidden  "></div>
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] border border-grey-300 rounded-full overflow-hidden  "></div>
      <div className="flex-1 bg-black rounded-e-md flex justify-start  flex items-center justify-center gap 4px ">
        {/* white backgr*/}
        <div className=" outline-none w-[75px] h-[150px] bg-white border-[100%] rounded-tr-full rounded-br-full "></div> 
         {/* murui deed */}
        <div className="absolute  outline-none w-[50px] h-[45px] bg-white border-[100%] top-[273px] "></div>
        <div className="absolute  outline-none w-[51px] h-[48px] bg-black border-[100%] top-[273px] rounded-bl-[89%] "></div>


          {/* murui */}
          <div className="absolute  outline-none w-[58px] h-[45px] bg-white border-[100%]  top-[459px] "></div>
          <div className="absolute  outline-none w-[59px] h-[50px] bg-black border-[100%]  top-[455px] rounded-tl-[90%] "></div>

        <img src="/Images/icon.png " className=" absolute   " />
      </div>
    </div>
  );
};

export default Home;
{
}
