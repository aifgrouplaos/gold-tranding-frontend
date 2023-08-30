"use client";
import Link from "next/link";
import React, { useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import BrowserUpdatedRoundedIcon from "@mui/icons-material/BrowserUpdatedRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import Image from "next/image";
import Menudeleterole from "../delete/menudeleterole";
import Updaterole from "../update/updaterole";
export default function Viewrole() {
  return (
    <div className="grid grid-cols-12 my-2 gap-5">
      <div className="col-span-12 lg:col-span-9 flex  flex-wrap  items-center gap-2">
        <Link href="/setting/role" className="bg-white rounded-lg p-2">
          <ArrowBackRoundedIcon fontSize="small" />
        </Link>
        <span className="font-bold text-xl">U-001</span>
        <Menudeleterole />
        <Updaterole />
        <button className="btn btn-md btn-default">
          <BrowserUpdatedRoundedIcon fontSize="small" /> Download
        </button>
      </div>
      <div className="col-span-12 text-grey">
        Date Created : 01/01/2021 12:00:00
      </div>

      <div className="col-span-12 lg:col-span-8">
        <div className="grid grid-cols-12 gap-2 bg-white rounded-lg py-3 px-5">
          <div className="col-span-12">
            <h5>Role Details</h5>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <b>Role Name:</b>
            <p>Admin</p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <b>Create Date</b>
            <p>18-08-2023</p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <b>Create Date</b>
            <p>18-08-2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
