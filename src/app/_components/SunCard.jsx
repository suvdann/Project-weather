import Image from "next/image";

const SunCard = () => {
  return (
    <div className="relative z-8 w-[414px] h-[820px] bg-[#FFFFFFBF] rounded-[40px] shadow-lg p-8 flex flex-col items-center justify-center">
      <p className="text-4xl font-bold">Kraków</p>
      <div className=" flex items-center justify-center">
        <Image src="/sun.png" width={262} height={262} />
      </div>

      <p className="text-8xl mt-4 ps-2">26°</p>
      <p className="text-gray-500">Bright</p>
    </div>
  );
};
export default SunCard;
