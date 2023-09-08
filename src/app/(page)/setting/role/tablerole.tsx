"use client";
import React, { useState } from "react"; 
import Pagination from "@/components/pagination/pagination"; 
import Link from "next/link";  
import Iconslidoutline from "@/icon/iconslidoutline";
import Icondownloadoutline from "@/icon/icondownloadoutline";
import Iconmore from "@/icon/iconmore";
import Menucreaterole from "./createrole";
 export default function Tablerole() { 
  const [limit, setLimit] = useState(10);
  const [currectpage, setcurrectpage] = useState(1);
  const data = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "a",
    "b",
    "c",
    "d",
  ];
  return (
    <div>
      <div className="h-[50px] flex justify-between items-center mb-2">
        <h4>Manage Role</h4>
        <Menucreaterole />
      </div>
      <div className="card">
        <div className="card-body">
          <div className="grid grid-cols-12 my-5 gap-2">
            <div className="col-span-8 lg:col-span-4 flex">
              <input
                type="search"
                placeholder="Search..."
                className="form-control"
              />
            </div>
            <div className="col-span-4 lg:col-span-2">
              <button className="btn btn-default">
                <Iconslidoutline /> Filter
              </button>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:text-end">
              <button className="btn btn-default">
                <Icondownloadoutline /> Download
              </button>
            </div>
          </div>

          <div className="table-responesive">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th> 
                  <th>Role Name</th> 
                  <th>Date Created</th>
                  <th style={{ width: "100px" }}>Action</th>
                </tr>
              </thead>
              <tbody className="tbody">
                <tr>
                  <td>1</td> 
                  <td>Admin</td> 
                  <td>20/10/2023</td>
                  <td>
                    <Link
                      href="/setting/role/1"
                      className="btn btn-sm btn-default"
                    >
                      <Iconmore />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td> 
                  <td>User</td> 
                  <td>20/10/2023</td>
                  <td>
                    <Link
                      href="/setting/role/2"
                      className="btn btn-sm btn-default"
                    >
                      <Iconmore />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>3</td> 
                  <td>Superadmin</td>
                  <td>020-7814-9878</td> 
                  <td>
                    <Link
                      href="/setting/role/3"
                      className="btn btn-sm btn-default"
                    >
                      <Iconmore />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer">
          <Pagination
            total={data}
            limit={limit}
            currectpage={currectpage}
            setLimit={setLimit}
            onChangepage={setcurrectpage}
          />
        </div>
      </div>
    </div>
  );
}
