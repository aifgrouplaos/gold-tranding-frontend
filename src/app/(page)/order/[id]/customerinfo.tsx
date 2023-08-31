"use client";
import React from "react";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import Image from "next/image";

export default function Customerinfo() {
    return (
        <div className=" bg-white rounded-lg py-2 px-5">
            <div className="flex flex-wrap justify-between gap-3">
                <div className="flex items-center gap-2">
                    <ImageRoundedIcon fontSize="large" />
                    <span className="text-xl">Customer Info</span>
                </div>
                <button className="btn btn-default">View</button>
            </div>
            <div className="my-auto flex flex-wrap gap-2 items-center h-[100px]">
                <Image
                    src="/avatar.jpg"
                    width={80}
                    height={100}
                    className="rounded bg-white"
                    alt={"AAAAAAAAAAAAA"}
                />
                <div className="flex flex-col gap-2">
                    <h6>Khouayue KATEEYUE</h6>
                    <p className="text-grey">User No.001</p>
                    <p className="flex flex-wrap gap-1">
                        <PhoneInTalkRoundedIcon
                            fontSize="small"
                            className="text-warning"
                        />
                        020-7814-9878
                    </p>
                </div>
            </div>
        </div>
    )
}