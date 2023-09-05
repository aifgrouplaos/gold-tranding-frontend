"use client";
import React from "react"; 
import Image from "next/image"; 
import Iconphone from "@/icon/iconphone";
import Iconphotooutline from "@/icon/iconphotooutline";

export default function Customerinfo() {
    return (
        <div className=" bg-white rounded-lg py-2 px-5">
            <div className="flex flex-wrap justify-between gap-3">
                <div className="flex items-center gap-2 text-xl">
                    <Iconphotooutline />
                    <span>Customer Info</span>
                </div>
                <button className="btn btn-default">View</button>
            </div>
            <div className="my-auto flex flex-wrap gap-2 items-center h-[100px]">
                <Image
                    src="/avatar.jpg"
                    width={80}
                    height={100}
                    className="rounded bg-white"
                    alt={"image"}
                />
                <div className="flex flex-col gap-2">
                    <h6>Macky Hamaphasouk</h6>
                    <p className="text-grey">User No.001</p>
                    <p className="flex flex-wrap gap-1 items-center">
                       <span className="text-warning"><Iconphone/></span>
                        020-7814-9878
                    </p>
                </div>
            </div>
        </div>
    )
}
