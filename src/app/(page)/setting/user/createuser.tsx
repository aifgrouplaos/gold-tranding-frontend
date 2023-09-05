"use client";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react"; 
import Image from "next/image";
import Switch from "@/components/tools/switch/switch";
import Iconadd from "@/icon/iconadd";
import Iconclose from "@/icon/iconclose";
import Icondownloadoutline from "@/icon/icondownloadoutline";
import Iconsave from "@/icon/iconsave";

export default function Createuser() {
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
    <>
      <button
        type="button"
        color="secondary"
        className="btn btn-secondary"
        onClick={handleClickOpen("paper")}
      >
        <Iconadd /> Create New User
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <div className="flex gap-5 justify-between">
            <b>Create New User</b>
            <button
              onClick={handleClose}
              className="btn btn-block-error btn-sm"
            >
              <Iconclose/>
            </button>
          </div>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"} sx={{width:"400px"}}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 flex items-center gap-3">
                <Image
                  src="/avatar.jpg"
                  width="100"
                  height="100"
                  alt="AAA"
                  className="rounded shadow"
                />
                <button className="btn btn-default">
                    <Icondownloadoutline/> 
                    Upload</button>
              </div>
              <div className="col-span-12">
                <b>Username</b>
                <input type="text" className="form-control" />
              </div>

              <div className="col-span-12">
                <b>Phone Number</b>
              </div>
              <div className="col-span-5">
                <input type="text" className="form-control" /> 
              </div>
              <div className="col-span-7"> 
                <input type="text" className="form-control" />
              </div>
              <div className="col-span-12">
                <b>Email</b>
                <input type="text" className="form-control" />
              </div>
              <div className="col-span-12">
                <b>Role</b>
                <input type="text" className="form-control" />
              </div>
              <div className="col-span-12">
                <b>Status</b>
                <br />
                <Switch checked={status} onChange={()=>setStatus(!status)} name="status"  color="success" />
              </div>
              <div className="col-span-12 mt-3">
                <button
                  onClick={handleClose}
                  className="btn btn-secondary w-full"
                >
                  <Iconsave />
                  Create
                </button>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}