"use client";
import React, { useState } from "react";
import Pagination from "@/components/pagination/pagination";
import Link from "next/link";
import Iconadd from "@/icon/iconadd";
import Iconslidoutline from "@/icon/iconslidoutline";
import Icondownloadoutline from "@/icon/icondownloadoutline";
import Iconmore from "@/icon/iconmore";
export default function Tablepayback() {
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
  ];

  return (
    <div>
      <div className="grid grid-cols-12 mb-4">
        <div className="col-span-12 md:col-span-6">
          <h4>Payback</h4>
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-wrap justify-end gap-2">
          <Link href="/payback/create" className="btn btn-secondary">
            <Iconadd /> <span>Create New Payback</span>
          </Link>
        </div>
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
                  <th>Payback No.</th>
                  <th>Position Info</th>
                  <th>Customer Info</th>
                  <th>Margin Balance (USD)</th>
                  <th>Files</th>
                  <th>Date Created</th>
                  <th style={{ width: "100px" }}>Action</th>
                </tr>
              </thead>
              <tbody className="tbody">
                <tr>
                  <td>1</td>
                  <td>PB-2023/001</td>
                  <td>PO-2023/001</td>
                  <td>Macky Hamaphasouk</td>
                  <td>$30.000</td>
                  <td>transaction.pdf</td>
                  <td>20/10/2023</td>
                  <td>
                    <Link
                      href="/payback/1"
                      className="btn btn-sm btn-default"
                    >
                      <Iconmore />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>PB-2023/002</td>
                  <td>PO-2023/002</td>
                  <td>Macky Hamaphasouk</td>
                  <td>$30.000</td>
                  <td>transaction.pdf</td>
                  <td>20/10/2023</td>
                  <td>
                    <Link
                      href="/payback/2"
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
