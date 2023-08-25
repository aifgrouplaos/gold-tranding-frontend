"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import BrowserUpdatedRoundedIcon from "@mui/icons-material/BrowserUpdatedRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import Pagination from "@/components/pagination/pagination";
import Tableuser from "./tableuser";
export default function page() {
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
        <h4>Manage User</h4>
        <button type="button" color="secondary" className="btn btn-secondary">
          <AddRoundedIcon /> Create New User
        </button>
      </div>
      <div className="card">
        <div className="card-header px-3">
          <ul className="tab">
            <li
              className={`tab-item ${status === "all" ? "active" : ""}`}
              onClick={() => setStatus("all")}
            >
              <div className="tab-item-link">
                All <div className="badge-secondary">10</div>
              </div>
            </li>

            <li
              className={`tab-item ${status === "inactive" ? "active" : ""}`}
              onClick={() => setStatus("inactive")}
            >
              <div className="tab-item-link">
                Inactive <div className="badge-warning">5</div>
              </div>
            </li>

            <li
              className={`tab-item ${status === "active" ? "active" : ""}`}
              onClick={() => setStatus("active")}
            >
              <div className="tab-item-link">
                Active <div className="badge-success">5</div>
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
          <Tableuser />
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
