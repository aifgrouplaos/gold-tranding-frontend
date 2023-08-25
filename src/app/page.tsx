import React from "react"; 
import PageLogin from "./login/pagelogin";
import { Stack } from "@mui/material";
 export default function page() {
  return (
    <div className="bg-primary w-full h-screen overflow-hidden flex justify-center items-center">
      <Stack>
      <PageLogin />
      <p className="text-center mt-5 text-white">
       © 2023 AIF GROUP. All Rights Reserved.
      </p>
      </Stack>
    </div>
  );
}
