import React from "react";

type Props = {};

export function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & Props
) {
  return (
    <textarea
      {...props}
      className="focus:outline-none w-full border-solid border border-1 rounded p-2 focus:border-2 hover:border-black focus:border-primary"
      rows={3}
    />
  );
}
