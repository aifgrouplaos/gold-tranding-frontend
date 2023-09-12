"use client";
import React, { useState } from "react";
import Image from "next/image";
import Switch from "@/components/tools/switch/switch";
import Iconclose from "@/icon/iconclose";
import Icondownloadoutline from "@/icon/icondownloadoutline";
import Iconsave from "@/icon/iconsave";
import Iconadd from "@/icon/iconadd";

export default function Menucreateuser() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-md btn-secondary"
        onClick={() => setOpen(true)}
      >
        <Iconadd /> Create New User
      </button>

      <div className={`modal ${open?"show":'hide'}`}>
        <div className="modal-content modal-sm">
          <div className="modal-header flex justify-between items-center py-5">
            <h5 className="modal-title">Update User</h5>
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
                  Upload
                </button>
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
                <Switch
                  checked={status}
                  onChange={() => setStatus(!status)}
                  name="status"
                  color="success"
                />
              </div>
              <div className="col-span-12 mt-3">
                <button
                  onClick={handleClose}
                  className="btn btn-secondary w-full"
                >
                  <Iconsave />
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
