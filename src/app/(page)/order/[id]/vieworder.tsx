"use client";
import Link from "next/link";
import React, { useState } from "react";
import Orderbalance from "./orderbalance";
import Orderinfomation from "./orderinfomation";
import Ordertransaction from "./ordertransaction"; 
import Orderactivity from "./orderactivity";
import Customerinfo from "./customerinfo";
import Ordersummary from "./ordersummary"; 
import Icongoback from "@/icon/icongoback";
import Iconedit from "@/icon/iconedit";
import Icondownloadoutline from "@/icon/icondownloadoutline";
import Iconbilloutline from "@/icon/iconbilloutline"; 
import Iconexchange from "@/icon/iconexchange"; 
import Icondeleteoutline from "@/icon/icondeleteoutline"; 
import Menumodaltrasfer from "./menumodaltrasfer";
import Menudeleteorder from "./menudeleteorder";
export default function Vieworder() { 
  return (
    <div className="grid grid-cols-12 my-2 gap-5">
      <div className="col-span-12 lg:col-span-7 flex  flex-wrap  items-center gap-2">
        <Link href="/order" className="bg-white rounded-lg p-2">
          <Icongoback />
        </Link>
        <span className="font-bold text-xl">U-001</span>
        <span className="badge-warning">Pending</span>
        <Menudeleteorder/>
        <button className="btn btn-md btn-default">
          <Iconedit/> Edit
        </button>
        <button className="btn btn-md btn-default">
          <Icondownloadoutline /> Download
        </button>
      </div>
      <div className="col-span-12 lg:col-span-5 flex flex-wrap gap-2 lg:text-end">
        <button className="btn btn-md btn-default">
          <Iconbilloutline /> Settlement
        </button>
        <button className="btn btn-md btn-default">
          <Iconexchange /> Cut Position
        </button>
       <Menumodaltrasfer/>
      </div>

      
      <div className="col-span-12">
        <div className="text-grey">Date Created 25 July 2023 at 04:34 PM</div>
      </div> 

      <div className="col-span-12 lg:col-span-8 flex flex-col gap-3 ">
        <Orderbalance />
        <Orderinfomation />
        <Ordertransaction />
        <Orderactivity />
      </div>


      <div className="col-span-12 lg:col-span-4 flex flex-col gap-3">
        <Customerinfo />
        <Ordersummary />
      </div> 
    </div>
  );
}
