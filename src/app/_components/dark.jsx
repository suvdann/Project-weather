import Image from "next/image"

const Card = () => {
    return (
      <div className="w-[414px] h-[832px] top-[216px] left-[193px] bg-[#111827BF]  rounded-[40px] shadow-lg p-8 flex flex-col justify-between">
        
       
          <div className="text-center">
          <p className="text-2xl font-bold">Kraków</p>
          <div className=" flex items-center justify-center">
          
        <Image src="/moon.png" width={277} height={277}/> 
        </div>
           
            <p className="text-6xl mt-4">26°</p>
            <p className="text-gray-500">Bright</p>
       
          </div>
       
  
        
  
      </div>
    );
  };
  export default Card