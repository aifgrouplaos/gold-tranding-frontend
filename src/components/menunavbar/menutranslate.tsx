import React from "react";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import eng from "/public/eng.png";
import Image from "next/image";
export default function Menutranslate() {
  return (
    <div className="flex flex-rows justify-center items-center gap-1 select-none cursor-pointer">
      <div className="bg-white w-[40px] h-[40px] p-1 relative rounded-full">
        <Image
          src={eng}
          width={100}
          height={100}
          className="rounded-full p-0"
          alt="translate"
        />
      </div>
      <div>
        <div className="text-md">ENG</div> 
      </div>
      <div>
        <ArrowDropDownRoundedIcon/>
      </div>
    </div>
  );
}
