"use client";
import Link from "next/link";
import React, { useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import BrowserUpdatedRoundedIcon from "@mui/icons-material/BrowserUpdatedRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import Image from "next/image"; 
import LockResetRoundedIcon from "@mui/icons-material/LockResetRounded";
import Updateseller from "../update/updateseller";
import Sellerstatus from "../status/sellerstatus";
import MenuDeleteseller from "../delete/sellerdelete";
export default function Viewuser() {
  const [status, setStatus] = useState(false);
  return (
    <div className="grid grid-cols-12 my-2 gap-5">
      <div className="col-span-12 lg:col-span-9 flex  flex-wrap  items-center gap-2">
        <Link href="/setting/seller" className="bg-white rounded-lg p-2">
          <ArrowBackRoundedIcon fontSize="small" />
        </Link>
        <span className="font-bold text-xl">U-001</span> 
        <Sellerstatus/>
        <MenuDeleteseller/> 
        <Updateseller/>
        <button className="btn btn-md btn-default">
          <BrowserUpdatedRoundedIcon fontSize="small" /> Download
        </button>
      </div>
      <div className="col-span-12 lg:col-span-3 lg:text-end">
        <button className="btn btn-md btn-default">
          <LockResetRoundedIcon fontSize="small" /> Resetpassword
        </button>
      </div> 
      <div className="col-span-12 text-grey">
        Date Created : 01/01/2021 12:00:00
      </div>

      <div className="col-span-12 lg:col-span-8">
        <div className="grid grid-cols-12 gap-2 bg-white rounded-lg py-2 px-4">
          <div className="col-span-12">
            <h5> User Details</h5>
          </div>
          <div className="col-span-12 lg:col-span-5">Username:</div>
          <div className="col-span-12 lg:col-span-7">Khouayue.K</div>
          <div className="col-span-12 lg:col-span-5">Name:</div>
          <div className="col-span-12 lg:col-span-7">Khouayue KATEEYUE</div>
          <div className="col-span-12 lg:col-span-5">Phone Number:</div>
          <div className="col-span-12 lg:col-span-7">02078149878</div>
          <div className="col-span-12 lg:col-span-5">Email:</div>
          <div className="col-span-12 lg:col-span-7">Khouayue@gmail.com</div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4 ">
        <div className="my-auto flex flex-wrap gap-2 items-center h-[150px] bg-white rounded-lg py-2 px-5">
          <Image
            src="/avatar.jpg"
            width={100}
            height={100}
            className="rounded bg-white"
            alt={"AAAAAAAAAAAAA"}
          />
          <div className="flex flex-col gap-2">
            <h6>Khouayue KATEEYUE</h6>
            <p className="text-grey">User No.001</p>
            <p className="flex flex-wrap gap-1">
              <PhoneInTalkRoundedIcon
                fontSize="small"
                className="text-warning"
              />
              020-7814-9878
            </p> 
          </div>
        </div>
      </div>
    </div>
  );
}
