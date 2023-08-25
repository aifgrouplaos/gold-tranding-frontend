"use client";
import { ThemeProvider } from "@mui/material"; 
import React from "react";
import createtheme from "./createtheme";
export function Customtheme({ children }: { children: React.ReactNode }) {
  return ( 
      <ThemeProvider theme={createtheme}>{children}</ThemeProvider> 
  );
}
