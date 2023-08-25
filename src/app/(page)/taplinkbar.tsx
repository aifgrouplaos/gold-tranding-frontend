"use client";
import React from "react";
import { usePathname } from "next/navigation";
export default function Taplinkbar() {
  const pathname = usePathname();
  return <div className="text-grey paragraph">{pathname}</div>;
}
