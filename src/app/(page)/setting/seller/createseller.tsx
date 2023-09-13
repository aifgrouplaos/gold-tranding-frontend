"use client";
import React, { HtmlHTMLAttributes, useState } from "react";
import Image from "next/image";
import Iconadd from "@/icon/iconadd";
import Iconclose from "@/icon/iconclose";
import Icondownloadoutline from "@/icon/icondownloadoutline";
import Iconsaveoutline from "@/icon/iconsaveoutline";
import { Converfiletobase64 } from "@/components/getbase64/Converfiletobase64";


export default function Createseller() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  
  const [formdata, setFormdata] = useState({
    profile: "",
    name: "",
    codecountry: "",
    phone: "",
  });

  const handleChange = (e: any) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };


  const handleSave = (e: any) => {
    e.preventDefault();
    console.log("formdata");
    console.log(formdata);
  }

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
      <div className={`modal ${open ? 'show' : 'hide'}`}>
        <div className="modal-content modal-sm">
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
            <form method="post" onSubmit={handleSave}>
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12 flex gap-2 items-center">
                  <Image
                    src={formdata.profile || "/avatar.jpg"}
                    width="80"
                    height="100"
                    alt="profile"
                    className="rounded shadow"
                  />
                  <input required type="file" className="form-control" name="profile"
                    onChange={async (event) => {
                      Converfiletobase64(event).then((res: any) => {
                        setFormdata({
                          ...formdata,
                          profile: res,
                        });
                      });
                    }}
                  />
                </div>
                <div className="col-span-12">
                  <b>Seller Name</b>
                  <input required type="text" className="form-control" name="name" value={formdata.name}
                    onChange={(e) => {
                      handleChange(e)
                    }} />
                </div>

                <div className="col-span-12">
                  <b>Phone Number</b>
                </div>
                <div className="col-span-4">
                  <select required className="form-select" name="codecountry" value={formdata.codecountry}
                    onChange={(e) => {
                      handleChange(e)
                    }} >
                    <option value="586">+586</option>
                    <option value="63">+63</option>
                    <option value="64">+64</option>
                  </select>
                </div>
                <div className="col-span-8">
                  <input required type="text" className="form-control" name="phone" value={formdata.phone}
                    onChange={(e) => {
                      handleChange(e)
                    }} />
                </div>
                <div className="col-span-12 mt-3">
                  <button
                    type="submit"
                    className="btn btn-secondary w-full"
                  >
                    <Iconsaveoutline />
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div >
    </>
  );
}
