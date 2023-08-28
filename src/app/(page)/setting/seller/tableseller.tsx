"use client";
import React, { useState } from "react";
import BrowserUpdatedRoundedIcon from "@mui/icons-material/BrowserUpdatedRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import Pagination from "@/components/pagination/pagination";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import Link from "next/link";
import Createseller from "./create/createseller";
export default function Tableseller() {
  const [status, setStatus] = useState<string>("all");
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
        <h4>Manage Seller</h4>
        <Createseller />
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
                <TuneRoundedIcon /> Filter
              </button>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:text-end">
              <button className="btn btn-default">
                <BrowserUpdatedRoundedIcon fontSize="small" /> Download
              </button>
            </div>
          </div>

          <div className="table-responesive">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Seller No.</th>
                  <th>Seller Name</th>
                  <th>Phone Number</th>
                  <th>Date Created</th>
                  <th style={{ width: "100px" }}>Action</th>
                </tr>
              </thead>
              <tbody className="tbody">
                <tr>
                  <td>1</td>
                  <td>No-1000</td>
                  <td>Khouayue</td>
                  <td>020-7814-9878</td>
                  <td>20/10/2023</td>
                  <td>
                    <Link
                      href="/setting/seller/1"
                      className="btn btn-sm btn-default"
                    >
                      <MoreHorizRoundedIcon fontSize="small" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>No-1001</td>
                  <td>Khouayue</td>
                  <td>020-7814-9878</td>
                  <td>20/10/2023</td>
                  <td>
                    <Link
                      href="/setting/seller/2"
                      className="btn btn-sm btn-default"
                    >
                      <MoreHorizRoundedIcon fontSize="small" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>No-1002</td>
                  <td>Khouayue</td>
                  <td>020-7814-9878</td>
                  <td>20/10/2023</td>
                  <td>
                    <Link
                      href="/setting/seller/3"
                      className="btn btn-sm btn-default"
                    >
                      <MoreHorizRoundedIcon fontSize="small" />
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