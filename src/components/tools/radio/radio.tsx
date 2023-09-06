import Iconcircle from "@/icon/iconcircle";
import Iconcirclecheck from "@/icon/iconcirclecheck";
import React, { useState } from "react";

export default function Inputradio(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {  
  return (
    <label className={`group-radio ${props.color} ${props.className}`} htmlFor={props.id}>
      <input type="radio" {...props}  className="radio"/>
       <span className="label checkend"><Iconcirclecheck/></span> 
       <span className="label uncheckend"><Iconcircle /></span>
       <span className="label">{props.title}</span>
    </label>
  );
}
