"use client";
import React, { useState } from "react";
import Pagination from "@/components/pagination/pagination";
import Link from "next/link";
import Iconadd from "@/icon/iconadd";
import Iconslidoutline from "@/icon/iconslidoutline";
import Icondownloadoutline from "@/icon/icondownloadoutline";
import Iconmore from "@/icon/iconmore";
export default function Tablephysicalgold() {
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
          <h4>Physical Gold</h4>
        </div> 
      </div>
      <div className="card">
        <div className="card-header px-3">
          <ul className="tab">
            <li
              className={`tab-item ${status === "all" ? "active" : ""}`}
              onClick={() => setStatus("all")}
            >
              <div className="tab-item-link">
                All <div className="badge-warning">10</div>
              </div>
            </li>

            <li
              className={`tab-item ${status === "draft" ? "active" : ""}`}
              onClick={() => setStatus("draft")}
            >
              <div className="tab-item-link">
                Draft <div className="badge-cancel">5</div>
              </div>
            </li>

            <li
              className={`tab-item ${status === "pending" ? "active" : ""}`}
              onClick={() => setStatus("pending")}
            >
              <div className="tab-item-link">
                Pending <div className="badge-secondary">5</div>
              </div>
            </li>

            <li
              className={`tab-item ${status === "transfer" ? "active" : ""}`}
              onClick={() => setStatus("transfer")}
            >
              <div className="tab-item-link">
                Delivered <div className="badge-success">5</div>
              </div>
            </li>
          </ul>
        </div>

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
                  <th>Physical No.</th>
                  <th>Position No.</th>
                  <th>Customer</th>
                  <th>AIF Position Type</th>
                  <th>Gold Type</th>
                  <th>Physical Gold(kg)</th>
                  <th>Total Amount</th>
                  <th>Status</th>
                  <th>Date Created</th>
                  <th style={{ width: "100px" }}>Action</th>
                </tr>
              </thead>
              <tbody className="tbody">
                <tr>
                  <td>1</td>
                  <td>Gold-2023-001</td>
                  <td>PO-2023/001</td>
                  <td>Macky Hamaphasouk</td>
                  <td>BUY</td>
                  <td>Physical</td>
                  <td>10kg</td>
                  <td>$100.000</td>
                  <td>
                    <div className="badge-success">Active</div>
                  </td>
                  <td>25/07/2023</td>
                  <td>
                    <Link
                      href="/phycicalgold/1"
                      className="btn btn-sm btn-default"
                    >
                      <Iconmore />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Gold-2023-001</td>
                  <td>PO-2023/001</td>
                  <td>Macky Hamaphasouk</td>
                  <td>BUY</td>
                  <td>Physical</td>
                  <td>10kg</td>
                  <td>$100.000</td>
                  <td>
                    <div className="badge-success">Active</div>
                  </td>
                  <td>25/07/2023</td>
                  <td>
                    <Link
                      href="/phycicalgold/1"
                      className="btn btn-sm btn-default"
                    >
                      <Iconmore />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Gold-2023-001</td>
                  <td>PO-2023/001</td>
                  <td>Macky Hamaphasouk</td>
                  <td>BUY</td>
                  <td>Physical</td>
                  <td>10kg</td>
                  <td>$100.000</td>
                  <td>
                    <div className="badge-success">Active</div>
                  </td>
                  <td>25/07/2023</td>
                  <td>
                    <Link
                      href="/phycicalgold/1"
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
