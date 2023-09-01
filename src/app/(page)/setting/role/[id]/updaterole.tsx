"use client";
import Iconclose from "@/icon/iconclose";
import Iconedit from "@/icon/iconedit";
import Iconsave from "@/icon/iconsave";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react"; 

export default function Updaterole() { 
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
        className="btn btn-md btn-default"
        onClick={handleClickOpen("paper")}
      >
        <Iconedit/> Update
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
            <b>Update Role</b>
            <button
              onClick={handleClose}
              className="btn btn-block-error btn-sm"
            >
              <Iconclose />
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
              <div className="col-span-12">
                <b>Role Name</b>
                <input type="text" name="name" className="form-control" />
              </div>

              <div className="col-span-12">
                <b>Description</b> 
                <textarea name="description" id="" cols={30} rows={3} className="form-control"></textarea>
              </div>
               
              <div className="col-span-12 mt-3">
                <button
                  onClick={handleClose}
                  className="btn btn-secondary w-full"
                >
                  <Iconsave/>
                  Save
                </button>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
