"use client";
import React, { useState } from "react";
import Image from "next/image";
import Switch from "@/components/tools/switch/switch";
import Iconclose from "@/icon/iconclose";
import Iconsave from "@/icon/iconsave";
import Iconadd from "@/icon/iconadd";

export default function Menucreateuser() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };


  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    phone: "",
    codecountry: "",
    role_id: 0,
    status: false,
    profile: "",
  });

  const handleForm = (e: any) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleClose();
    console.log(formdata);
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-md btn-secondary"
        onClick={() => setOpen(true)}
      >
        <Iconadd /> Create New User
      </button>

      <div className={`modal ${open ? "show" : 'hide'}`}>
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
            <form method="post" onSubmit={handleSubmit}>
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12 flex items-center gap-3">
                  <Image
                    src={formdata.profile || '/avatar.jpg'}
                    width="100"
                    height="100"
                    alt="profile"
                    className="rounded shadow"
                  />
                  <input required type="file" name="profile" className="form-control"
                    onChange={(e: any) => {
                      const file = e.target.files[0];
                      if (!file) return;
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormdata({ ...formdata, profile: reader.result as string });
                      }
                      reader.readAsDataURL(file);
                    }}
                  />
                </div>
                <div className="col-span-12">
                  <b>Username</b>
                  <input required type="text" value={formdata.username} name="username" className="form-control" onChange={handleForm} />
                </div>

                <div className="col-span-12">
                  <b>Phone Number</b>
                </div>
                <div className="col-span-5">
                  <select required value={formdata.codecountry} name="codecountry" className="form-select" onChange={handleForm}  >
                    <option value="856">+856</option>
                    <option value="63">+63</option>
                    <option value="64">+64</option>
                  </select>
                </div>
                <div className="col-span-7">
                  <input required type="text" name="phone" value={formdata.phone} className="form-control" onChange={handleForm} />
                </div>
                <div className="col-span-12">
                  <b>Email</b>
                  <input type="text" name="email" required value={formdata.email} className="form-control" onChange={handleForm} />
                </div>
                <div className="col-span-12">
                  <b>Role</b>
                  <select required value={formdata.role_id} name="role_id" className="form-select" onChange={handleForm} >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="guest">Guest</option>
                  </select>
                </div>
                <div className="col-span-12">
                  <b>Status</b>
                  <br />
                  <Switch
                    checked={formdata.status}
                    onClick={() => setFormdata({ ...formdata, status: !formdata.status })}
                    name="status"
                    color="success"
                  />
                </div>
                <div className="col-span-12 mt-3">
                  <button
                    type="submit"
                    className="btn btn-secondary w-full"
                  >
                    <Iconsave />
                    Save
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
