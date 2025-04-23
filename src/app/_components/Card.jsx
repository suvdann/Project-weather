import Image from "next/image"

const Card = () => {
    return (
      <div className="w-[414px] h-[820px] bg-[#FFFFFFBF] rounded-[40px] shadow-lg p-8 flex flex-col justify-between">
        
          <input
            type="text"
            placeholder="Search city"
            className="w-full p-3 rounded-lg border focus:outline-none "
          />
          <div className="text-center">
          <p className="text-2xl font-bold">Kraków</p>
          <div className=" flex items-center justify-center">
        <Image src="/sun.png" width={262} height={262}/> 
        </div>
           
            <p className="text-6xl mt-4">26°</p>
            <p className="text-gray-500">Bright</p>
            
          </div>
       
  
  
      </div>
    );
  };
  export default Card
  