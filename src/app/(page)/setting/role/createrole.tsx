"use client";
import Iconadd from "@/icon/iconadd";
import Iconclose from "@/icon/iconclose";
import Iconsave from "@/icon/iconsave";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

export default function Menucreaterole() {
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
        <Iconadd /> Create New Role
      </button>

      <div className={`modal ${open?'show':'hide'}`}>
        <div className="modal-content">
          <div className="modal-header flex justify-between items-center py-5">
            <h5 className="modal-title">Create New Role</h5>
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
                  <Iconsave />
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
