"use client";
import { usePathname } from "next/navigation";
import React from "react";
export default function Wrapper() {
  const pathname = usePathname();
  return <div className="text-grey paragraph">{pathname}</div>;
}
