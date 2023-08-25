import React from "react";
 import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
 
export default function Notification() {
  return (
    <div className="w-[40px] h-[40px] flex flex-rows justify-center items-center gap-1 select-none cursor-pointer"> 
        <NotificationsActiveOutlinedIcon/> 
    </div>
  );
}
