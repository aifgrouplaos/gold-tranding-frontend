"use client";
import Link from "next/link";
import React, { useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import BrowserUpdatedRoundedIcon from "@mui/icons-material/BrowserUpdatedRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded"; 
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import MultipleStopRoundedIcon from '@mui/icons-material/MultipleStopRounded';
import Orderbalance from "./orderbalance";
import Orderinfomation from "./orderinfomation";
import Ordertransaction from "./ordertransaction";
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import Orderactivity from "./orderactivity";
import Customerinfo from "./customerinfo";
import Ordersummary from "./ordersummary";
export default function Vieworder() {
  const [status, setStatus] = useState(false);
  return (
    <div className="grid grid-cols-12 my-2 gap-5">
      <div className="col-span-12 lg:col-span-7 flex  flex-wrap  items-center gap-2">
        <Link href="/order" className="bg-white rounded-lg p-2">
          <ArrowBackRoundedIcon fontSize="small" />
        </Link>
        <span className="font-bold text-xl">U-001</span>
        <button className="btn btn-md btn-block-warning">Pending</button>
        <button className="btn btn-md btn-block-error">
          <DeleteForeverRoundedIcon fontSize="small" /> Delete
        </button>
        <button className="btn btn-md btn-default">
          <EditNoteRoundedIcon fontSize="small" /> Edit
        </button>
        <button className="btn btn-md btn-default">
          <BrowserUpdatedRoundedIcon fontSize="small" /> Download
        </button>
      </div>
      <div className="col-span-12 lg:col-span-5 flex flex-wrap gap-2 lg:text-end">
        <button className="btn btn-md btn-default">
          <ReceiptRoundedIcon fontSize="small" /> Settlement
        </button>
        <button className="btn btn-md btn-default">
          <CurrencyExchangeRoundedIcon fontSize="small" /> Cut Position
        </button>
        <button className="btn btn-md btn-default">
          <MultipleStopRoundedIcon fontSize="small" /> Transfer
        </button>
      </div>

      <div className="col-span-12 text-grey">
        Date Created : 01/01/2021 12:00:00
      </div>

      <div className="col-span-12 lg:col-span-8 flex flex-col gap-3 ">
        <Orderbalance />
        <Orderinfomation />
        <Ordertransaction />
        <Orderactivity />
      </div>


      <div className="col-span-12 lg:col-span-4 flex flex-col gap-3">
        <Customerinfo/>
        <Ordersummary/>
      </div>
    </div>
  );
}
