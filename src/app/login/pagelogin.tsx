import React from "react";
import Formlogin from "./formlogin";
import Image from "next/image";
 import logo from "/public/logo.png";
 import { Paper } from "@mui/material";
export default function PageLogin() {
  return (
    <div className="mt-8 text-dark font-bold flex flex-col items-center gap-5">
      <Paper
        sx={{
          width: "380px",
          padding: "20px",
          display: "flex", 
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image src={logo} width={150} height={100} alt="" />
        <div className="text-3xl my-5">AIF Gold Trading</div>
        <Formlogin />
      </Paper>
    </div>
  );
}
