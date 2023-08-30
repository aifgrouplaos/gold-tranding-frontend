"use client";
import React, { useState } from "react";
import BrowserUpdatedRoundedIcon from "@mui/icons-material/BrowserUpdatedRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import Pagination from "@/components/pagination/pagination";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Link from "next/link";
export default function Tableorder() {
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
      <div className="h-[50px] flex justify-between items-center mb-2">
        <h4>Position Order</h4>
        <Link href="/order/create" color="secondary" className="btn btn-secondary">
          <AddRoundedIcon /> Create New Order 
        </Link>
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
                Transferring <div className="badge-error">5</div>
              </div>
            </li>

            <li
              className={`tab-item ${status === "cleared" ? "active" : ""}`}
              onClick={() => setStatus("cleared")}
            >
              <div className="tab-item-link">
                Cleared <div className="badge-success">5</div>
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
                  <th>User No.</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Date Created</th>
                  <th>Status</th>
                  <th style={{ width: "100px" }}>Action</th>
                </tr>
              </thead>
              <tbody className="tbody">
                <tr>
                  <td>1</td>
                  <td>No-1000</td>
                  <td>Khouayue Kateeyue</td>
                  <td>Khouayue</td>
                  <td>020-7814-9878</td>
                  <td>Khouayue@gmail.com</td>
                  <td>20/10/2023</td>
                  <td>
                    <div className="badge-success">Active</div>
                  </td>
                  <td>
                    <Link
                      href="/positionorder/1"
                      className="btn btn-sm btn-default"
                    >
                      <MoreHorizRoundedIcon fontSize="small" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>No-1000</td>
                  <td>Khouayue Kateeyue</td>
                  <td>Khouayue</td>
                  <td>020-7814-9878</td>
                  <td>Khouayue@gmail.com</td>
                  <td>20/10/2023</td>
                  <td>
                    <div className="badge-success">Active</div>
                  </td>
                  <td>
                    <Link
                      href="/positionorder/1"
                      className="btn btn-sm btn-default"
                    >
                      <MoreHorizRoundedIcon fontSize="small" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>No-1000</td>
                  <td>Khouayue Kateeyue</td>
                  <td>Khouayue</td>
                  <td>020-7814-9878</td>
                  <td>Khouayue@gmail.com</td>
                  <td>20/10/2023</td>
                  <td>
                    <div className="badge-success">Active</div>
                  </td>
                  <td>
                    <Link
                      href="/positionorder/1"
                      className="btn btn-sm btn-default"
                    >
                      <MoreHorizRoundedIcon fontSize="small" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>No-1000</td>
                  <td>Khouayue Kateeyue</td>
                  <td>Khouayue</td>
                  <td>020-7814-9878</td>
                  <td>Khouayue@gmail.com</td>
                  <td>20/10/2023</td>
                  <td>
                    <div className="badge-warning">Active</div>
                  </td>
                  <td>
                    <Link
                      href="/positionorder/1"
                      className="btn btn-sm btn-default"
                    >
                      <MoreHorizRoundedIcon fontSize="small" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>No-1000</td>
                  <td>Khouayue Kateeyue</td>
                  <td>Khouayue</td>
                  <td>020-7814-9878</td>
                  <td>Khouayue@gmail.com</td>
                  <td>20/10/2023</td>
                  <td>
                    <div className="badge-success">Active</div>
                  </td>
                  <td>
                    <Link
                      href="/positionorder/1"
                      className="btn btn-sm btn-default"
                    >
                      <MoreHorizRoundedIcon fontSize="small" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>No-1000</td>
                  <td>Khouayue Kateeyue</td>
                  <td>Khouayue</td>
                  <td>020-7814-9878</td>
                  <td>Khouayue@gmail.com</td>
                  <td>20/10/2023</td>
                  <td>
                    <div className="badge-success">Active</div>
                  </td>
                  <td>
                    <Link
                      href="/positionorder/1"
                      className="btn btn-sm btn-default"
                    >
                      <MoreHorizRoundedIcon fontSize="small" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>No-1000</td>
                  <td>Khouayue Kateeyue</td>
                  <td>Khouayue</td>
                  <td>020-7814-9878</td>
                  <td>Khouayue@gmail.com</td>
                  <td>20/10/2023</td>
                  <td>
                    <div className="badge-warning">Active</div>
                  </td>
                  <td>
                    <Link
                      href="/positionorder/1"
                      className="btn btn-sm btn-default"
                    >
                      <MoreHorizRoundedIcon fontSize="small" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>No-1000</td>
                  <td>Khouayue Kateeyue</td>
                  <td>Khouayue</td>
                  <td>020-7814-9878</td>
                  <td>Khouayue@gmail.com</td>
                  <td>20/10/2023</td>
                  <td>
                    <div className="badge-success">Active</div>
                  </td>
                  <td>
                    <Link
                      href="/positionorder/1"
                      className="btn btn-sm btn-default"
                    >
                      <MoreHorizRoundedIcon fontSize="small" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>No-1000</td>
                  <td>Khouayue Kateeyue</td>
                  <td>Khouayue</td>
                  <td>020-7814-9878</td>
                  <td>Khouayue@gmail.com</td>
                  <td>20/10/2023</td>
                  <td>
                    <div className="badge-warning">Active</div>
                  </td>
                  <td>
                    <Link
                      href="/positionorder/1"
                      className="btn btn-sm btn-default"
                    >
                      <MoreHorizRoundedIcon fontSize="small" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>No-1000</td>
                  <td>Khouayue Kateeyue</td>
                  <td>Khouayue</td>
                  <td>020-7814-9878</td>
                  <td>Khouayue@gmail.com</td>
                  <td>20/10/2023</td>
                  <td>
                    <div className="badge-success">Active</div>
                  </td>
                  <td>
                    <Link
                      href="/positionorder/1"
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
