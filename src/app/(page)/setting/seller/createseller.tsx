"use client";
import React, { useState } from "react";
import Image from "next/image";
import Iconadd from "@/icon/iconadd";
import Iconclose from "@/icon/iconclose";
import Icondownloadoutline from "@/icon/icondownloadoutline";

export default function Createseller() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        color="secondary"
        className="btn btn-secondary"
        onClick={() => setOpen(true)}
      >
        <Iconadd /> Create New Seller
      </button>
      <div className={`modal ${open?'show':'hide'}`}>
        <div className="modal-content">
          <div className="modal-header flex justify-between items-center py-5">
            <h5 className="modal-title">Create New Seller</h5>
            <button
              type="button"
              className="btn-error btn-sm btn"
              onClick={handleClose}
            >
              <Iconclose />
            </button>
          </div>
          <div className="modal-body">
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
                  <Icondownloadoutline />
                  Upload</button>
              </div>
              <div className="col-span-12">
                <b>Seller Name</b>
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
              <div className="col-span-12 mt-3">
                <button
                  onClick={handleClose}
                  className="btn btn-secondary w-full"
                >
                  <Iconadd />
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
