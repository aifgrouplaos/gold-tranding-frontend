import Iconphone from '@/icon/iconphone'
import Iconphotooutline from '@/icon/iconphotooutline'
import Image from 'next/image'
import React from 'react'

export default function Customerinfo() {
    return (
        <div className=" bg-white rounded-lg py-2 px-5">
            <div className="flex flex-wrap justify-between gap-3">
                <div className="flex items-center gap-2 text-xl">
                    <Iconphotooutline />
                    <span>Customer Info</span>
                </div> 
            </div>
            <div className="my-auto flex flex-wrap gap-2 items-center h-[150px]">
                <span className='py-5'>
                <Image
                    src="/avatar.jpg"
                    width={100}
                    height={100}
                    className="rounded bg-white"
                    alt={"image"}
                />
                </span>
                <div className="flex flex-col gap-2">
                    <h6>Macky Hamaphasouk</h6>
                    <p className="text-grey">User No.001</p>
                    <p className="flex flex-wrap gap-1 items-center">
                        <span className="text-warning"><Iconphone /></span>
                        020-7814-9878
                    </p>
                </div>
            </div>
        </div>
    )
}
