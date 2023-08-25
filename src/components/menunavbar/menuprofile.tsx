import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import avatar from "/public/avatar.jpg";
import Image from "next/image";
export default function Menuprofile() {
  return (
    <div className="flex flex-rows justify-center items-center gap-1 select-none cursor-pointer">
      <div className="bg-white p-1 w-[40px] h-[40px] relative rounded-full">
        <Image
          src={avatar}
          width={100}
          height={100}
          className="rounded-full p-0"
          alt="profile"
        />
      </div>
      <div>
        <div className="text-sm">Khouayue</div>
        <div className="text-grey" style={{fontSize:"10px"}}>AIF Gold</div>
      </div>
      <div>
        <ArrowDropDownRoundedIcon/>
      </div>
    </div>
  );
}
