import React from "react";
export default function Bannersticky() {
  return (
    <div className="banner-sticky bg-white shadow rounded p-2 w-[80%]">
      <div className="grid grid-cols-12">
        <div className="col-span-10">
          <p className="text-dark text-sm">Gold Price/Kg</p>
          <h3 className="text-2xl text-secondary font-bold">$18,000</h3>
        </div>
        <div className="col-span-2 text-secondary font-2xl"><i className="fa-regular fa-pen-to-square"></i></div>
         <div className="col-span-12"><hr/></div>
        <div className="col-span-12 text-dark">07/11/2022-9:00AM</div>
      </div>
    </div>
  );
}
