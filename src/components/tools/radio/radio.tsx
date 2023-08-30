import React from "react";

export default function Inputradio(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  // const attr:any=delete.props['className'];
  return (
    <label className={`group-radio ${props.color} ${props.className}`} htmlFor={props.id}>
      <input type="radio" {...props}  className="radio" />
      <span>{props.title}</span>
    </label>
  );
}
