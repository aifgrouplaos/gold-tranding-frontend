"use client";
import Icondeleteoutline from "@/icon/icondeleteoutline";
import Iconquestionoutline from "@/icon/iconquestionoutline";
import React, { useState } from "react";

export default function Menudeleteseller() {
  const [open, setOpen] = useState(false);
  const handleClose = () => { setOpen(false) };
  return (
    <>
      <button
        type="button"
        color="secondary"
        className="btn btn-md btn-block-error"
        onClick={() => setOpen(true)}
      >
        <Icondeleteoutline />
        <span>Delete</span>
      </button>
      <div className={`modal ${open ? "show" : "hide"}`}>
        <div className="modal-content  modal-sm">
          <div className="modal-body">
            <div className="flex justify-center">
              <span className="bg-danger-light text-danger text-3xl my-5 h-20 w-20 rounded-full flex justify-center items-center">
                <Iconquestionoutline />
              </span>
            </div>

            <h5 className="text-center">Are Your Sure?</h5>
            <p className="text-center">You Want to delete This</p>
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
          </div>
        </div>
      </div>
    </>
  );
}
