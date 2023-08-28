"use client";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function Userstatus() {
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
        className="btn btn-md btn-block-success"
        onClick={handleClickOpen("paper")}
      >
        {" "}
        Status
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent dividers={scroll === "paper"} sx={{ width: "400px" }}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <h5 className="text-center">Are Your Sure</h5>
            <p className="text-center">You Want to Update Status</p>
            <div className="flex justify-center gap-5 mt-5">
              <button
                className="btn btn-md btn-block-error"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                className="btn btn-md btn-block-success"
                onClick={handleClose}
              >
                Yes
              </button>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
