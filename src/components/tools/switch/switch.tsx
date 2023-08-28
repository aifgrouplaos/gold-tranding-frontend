"use client"
 import React, { InputHTMLAttributes, useState } from "react"; 
export default function Switch(props:React.InputHTMLAttributes<HTMLInputElement> & {color:'error'|'success'|'warning'|'primary'|'default'|'info'}) {
  return (
    <label className="switch">
      <input type="checkbox" {...props} />
      <span className={`slider slider round ${props.color}`}></span>
    </label>
  );
}
