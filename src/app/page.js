const Home = () => {
  return (
    <div className="flex h-screen relative gap-4">
      <div className="w-1/2 bg-white rounded-s-md flex justify-end  flex items-center justify-center  ">
        <img src="/Images/Vector.png" className="absolute items-center" />
      </div>
      <div className=" absolute outline-solid w-[340px] h-[340px] bg-transparent border border-[#F3F4F6] rounded-[100%] "></div>
      <div className="w-1/2 bg-black rounded-e-md flex justify-start  flex items-center justify-center gap 4px ">
        {/* white backgr*/}
        <div className=" relative outline-none w-[80px] h-[150px] bg-white border-[100%] rounded-tr-full rounded-br-full ">
          <div className="absolute  outline-none w-[50px] h-[100px] bg-white border-[100%] top-[114px] "></div>
          <div className="  outline-none w-[50px] h-[60px] bg-white border-[100%]  top-[50px] "></div>
        </div>

        <img src="/Images/icon.png " className=" absolute   " />
      </div>
    </div>
  );
};

export default Home;
{
}
