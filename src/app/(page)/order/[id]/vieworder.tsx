"use client";
import Link from "next/link";
import React, { useState } from "react";
import Orderbalance from "./orderbalance";
import Orderinfomation from "./orderinfomation";
import Ordertransaction from "./ordertransaction"; 
import Orderactivity from "./orderactivity";
import Customerinfo from "./customerinfo";
import Ordersummary from "./ordersummary";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import { DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Inputradio from "@/components/tools/radio/radio"; 
import Icongoback from "@/icon/icongoback";
import Iconedit from "@/icon/iconedit";
import Icondownloadoutline from "@/icon/icondownloadoutline";
import Iconbilloutline from "@/icon/iconbilloutline"; 
import Iconexchange from "@/icon/iconexchange";
import Icontransfer from "@/icon/icontransfer";
import Iconclose from "@/icon/iconclose";
import Icondeleteoutline from "@/icon/icondeleteoutline";
export default function Vieworder() {
  const [status, setStatus] = useState(false);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");
  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const descriptionElementRef = React.useRef<HTMLElement>(null);

  return (
    <div className="grid grid-cols-12 my-2 gap-5">
      <div className="col-span-12 lg:col-span-7 flex  flex-wrap  items-center gap-2">
        <Link href="/order" className="bg-white rounded-lg p-2">
          <Icongoback />
        </Link>
        <span className="font-bold text-xl">U-001</span>
        <button className="btn btn-md btn-block-warning">Pending</button>
        <button className="btn btn-md btn-block-error">
          <Icondeleteoutline /> Delete
        </button>
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
        <button className="btn btn-md btn-default"
          onClick={handleClickOpen("paper")}>
          <Icontransfer /> Transfer
        </button>
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


      {/* modal Transtering */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <div className="flex gap-5 justify-between">
            <b>Transtering</b>
            <button
              onClick={handleClose}
              className="btn btn-block-error btn-sm"
            >
              <Iconclose />
            </button>
          </div>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"} sx={{ width: "400px" }}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <form action="">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12">
                  <label>Transfering to <span className="text-danger">*</span></label>
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <Inputradio required color="warning" name="transfertype" title="Trading" />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <Inputradio required color="warning" name="transfertype" title="Physical" />
                </div>
                <div className="col-span-12">
                  <label htmlFor="">Quantity to Transfer(Kg) <span className="text-danger">*</span></label>
                  <input type="text" required className="form-control" name="quantity" placeholder="Enter Quantity" />
                </div>

                <div className="col-span-12">
                  <label htmlFor="">Transfer Date <span className="text-danger">*</span></label>
                  <input type="date" required className="form-control" name="date" placeholder="--select date--" />
                </div>

                <div className="col-span-12 md:col-span-6">
                  <label htmlFor="">Spot/oz <span className="text-danger">*</span></label>
                  <input type="text" required className="form-control" name="sport" placeholder="Enter Sport Number" />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label htmlFor="">Spot/kg (USD)</label>
                  <input type="text" disabled className="form-control" name="sport" placeholder="-" />
                </div>
                <div className="col-span-12">
                  <label htmlFor="">Price/Kg(USD) <span className="text-danger">*</span></label>
                  <input type="text" required className="form-control" name="sport" placeholder="Enter Price" />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label htmlFor="">Margin(%) <span className="text-danger">*</span></label>
                  <input type="text" required className="form-control" name="sport" placeholder="Enter..." />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label htmlFor="">Margin(USD) <span className="text-danger">*</span></label>
                  <input type="text" required className="form-control" name="sport" placeholder="Enter..." />
                </div>
                <div className="col-span-12">
                  <label htmlFor="">Remark</label>
                  <textarea name="remark" className="form-control" placeholder="Enter Messege" />
                </div>

                <div className="col-span-12">
                  <button className="btn btn-block btn-md btn-warning w-[100%]">
                    <Icontransfer /> Transfer</button>
                </div>
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
