"use client";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import TableTemplate from "@/components/table/tabletemplate";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
export default function page() {
  const [status, setStatus] = useState<string>("all");
  const currentPage = usePathname();

  return (
    <Box>
      <div className="h-[50px] flex justify-between items-center mb-2">
        <h4>Manage Seller</h4>
        <button type="button" color="secondary" className="btn btn-secondary">
          <AddRoundedIcon /> Create New Seller
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

        <div className="card-body p-3">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Select No.</th>
                <th>Seller Name</th>
                <th>Phone Number</th>
                <th>Date Created</th>
                <th style={{width:"100px"}}>Action</th>
              </tr>
            </thead>
            <tbody className="tbody">
              <tr>
                <td>1</td>
                <td>No-1000</td>
                <td>Khouayue Kateeyue</td>
                <td>020-7814-9878</td>
                <td>20/10/2023</td>
                <td>
                  <button className="btn btn-sm btn-default">
                    <MoreHorizRoundedIcon />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Box>
  );
}
