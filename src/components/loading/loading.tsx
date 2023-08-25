"use client";
import React, { useState } from "react";
import { LoadingContext } from "./loadingcontext";
import { Icon } from "@iconify/react";
import { orange } from "@mui/material/colors";

export default function Loadings({ children }: { children: React.ReactNode }) {
  const [loadings, setloadings] = useState(false);
  return (
    <LoadingContext.Provider
      value={{
        loadings,
        setloadings,
      }}
    >
        <div
        style={{ backgroundColor: "#ee870085" }}
        className={`transition duration-[300s] delay-[150s] z-40 blur-md fixed top-0 left-0 w-full h-screen text-white flex justify-center items-center ${loadings?'visible opacity-0':'invisible opacity-95'}`}
      >
        <Icon icon="svg-spinners:180-ring-with-bg" className="text-4xl" />
      </div> 
      {children}
    </LoadingContext.Provider>
  );
}
