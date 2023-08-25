import Link from "next/link";
import React from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

type Props = {
  link: string;
  title: string;
};

export default function Itemgoback({ link, title }: Props) {
  return (
    <div className="bg-primary text-white h-[46px] gap-3 rounded px-1 flex items-center">
      <Link href={link} className="p-1">
        <ArrowBackRoundedIcon
          sx={{ fontSize: "28px" }}
          className="text-white"
        />
      </Link>
      <span className="text-lg font-bold">{title}</span>
    </div>
  );
}
