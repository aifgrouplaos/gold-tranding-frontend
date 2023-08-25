"use client";
import { Paper, Stack } from "@mui/material";
import React, { useEffect } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import Spiner from "@/components/loading/spiner";
export default function page() { 
  return (
    <div>
      <h3>Dashboard</h3>
      <div className="grid grid-cols-12 gap-5 mt-3">
        <Paper className="col-span-6 md:col-span-4 lg:col-span-3 p-3">
          <PermIdentityIcon fontSize={"large"} color="primary" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis ut
            similique doloremque ea aliquam optio repellat officia hic enim
            corrupti ab dolore eos, ipsum a adipisci sunt nesciunt numquam!
          </p>
        </Paper>
        <Paper className="col-span-6 md:col-span-4 lg:col-span-3 p-3">
          <MoveToInboxIcon fontSize={"large"} color="primary" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis ut
            similique doloremque ea aliquam optio repellat officia hic enim
            corrupti ab dolore eos, ipsum a adipisci sunt nesciunt numquam!
          </p>
        </Paper>
        <Paper className="col-span-6 md:col-span-4 lg:col-span-3 p-3">
          <ForwardToInboxIcon fontSize={"large"} color="primary" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis ut
            similique doloremque ea aliquam optio repellat officia hic enim
            corrupti ab dolore eos, ipsum a adipisci sunt nesciunt numquam!
          </p>
        </Paper>
        <Paper className="col-span-6 md:col-span-4 lg:col-span-3 p-3">
          <PriceCheckIcon fontSize={"large"} color="primary" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis ut
            similique doloremque ea aliquam optio repellat officia hic enim
            corrupti ab dolore eos, ipsum a adipisci sunt nesciunt numquam!
          </p>
        </Paper>
        <Paper className="col-span-6 md:col-span-4 lg:col-span-3 p-3">
          <PermIdentityIcon fontSize={"large"} color="primary" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis ut
            similique doloremque ea aliquam optio repellat officia hic enim
            corrupti ab dolore eos, ipsum a adipisci sunt nesciunt numquam!
          </p>
        </Paper>
        <Paper className="col-span-6 md:col-span-4 lg:col-span-3 p-3">
          <ReceiptLongIcon fontSize={"large"} color="primary" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis ut
            similique doloremque ea aliquam optio repellat officia hic enim
            corrupti ab dolore eos, ipsum a adipisci sunt nesciunt numquam!
          </p>
        </Paper>
        <Paper className="col-span-6 md:col-span-4 lg:col-span-3 p-3">
          <PlaylistAddCheckIcon fontSize={"large"} color="primary" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis ut
            similique doloremque ea aliquam optio repellat officia hic enim
            corrupti ab dolore eos, ipsum a adipisci sunt nesciunt numquam!
          </p>
        </Paper>
        <Paper className="col-span-6 md:col-span-4 lg:col-span-3 p-3">
          <CreditScoreIcon fontSize={"large"} color="primary" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis ut
            similique doloremque ea aliquam optio repellat officia hic enim
            corrupti ab dolore eos, ipsum a adipisci sunt nesciunt numquam!
          </p>
        </Paper>
      </div>
    </div>
  );
}
