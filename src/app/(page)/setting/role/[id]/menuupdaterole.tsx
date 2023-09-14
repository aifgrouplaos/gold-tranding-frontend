"use client";
import Iconclose from "@/icon/iconclose";
import Iconedit from "@/icon/iconedit";
import Iconsave from "@/icon/iconsave";
import React, { useState } from "react";

export default function Menuupdaterole() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [formdata, setFormdata] = useState({
    name: "",
    description: ""
  });

  const handleForm = (e: any) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  }

  const handlesubmit = (e: any) => {
    console.log(formdata);
    e.preventDefault();
    handleClose();
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-md btn-default"
        onClick={() => setOpen(true)}
      >
        <Iconedit /> Update
      </button>

      <div className={`modal ${open ? 'show' : 'hide'}`}>
        <div className="modal-content modal-sm">
          <div className="modal-header flex justify-between items-center py-5">
            <h5 className="modal-title">Update Role</h5>
            <button
              type="button"
              className="btn-error btn-sm btn"
              onClick={handleClose}
            >
              <Iconclose />
            </button>
          </div>
          <div className="modal-body">
            <form method="post" onSubmit={handlesubmit}>
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12">
                  <b>Role Name</b>
                  <input type="text" required name="name" value={formdata.name} onChange={handleForm} className="form-control" />
                </div>

                <div className="col-span-12">
                  <b>Description</b>
                  <textarea name="description" value={formdata.description} onChange={handleForm} id="" cols={30} rows={3} className="form-control"></textarea>
                </div>

                <div className="col-span-12 mt-3">
                  <button
                    type="submit"
                    className="btn btn-secondary w-full"
                  >
                    <Iconsave />
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
