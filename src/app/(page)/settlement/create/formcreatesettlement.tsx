"use client";
import Inputradio from '@/components/tools/radio/radio';
import Iconbookoutline from '@/icon/iconbookoutline'
import Iconcircle from '@/icon/iconcircle';
import Iconcirclecheck from '@/icon/iconcirclecheck';
import React from 'react'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";

export default function Formcreatesettlement() {
    return (
        <div className='py-3 px-5 bg-white rounded-lg'>
            <div className='flex items-center gap-2 text-lg'>
                <Iconbookoutline />
                <span>Settlement Information</span>
            </div>

            <div className="grid grid-cols-12 gap-5 mt-3">
                <div className="col-span-12 md:col-span-6">
                    <label>Customer Info <span className='text-danger'>*</span></label>
                    <select className='form-select'>
                        <option value="">--Please Select--</option>
                    </select>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <label>Position Order Info <span className='text-danger'>*</span></label>
                    <select className='form-select'>
                        <option value="">--Please Select--</option>
                        <option value="1">PO-082023-001_Sell_Trading</option>
                        <option value="2">PO-082023-002_Sell_Physical</option>
                        <option value="3">PO-082023-003_Buy_Physical</option>
                    </select>
                </div>

                <div className="col-span-12">
                    <label>Settlement Type <span className='text-danger'>*</span></label>
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 md:col-span-6">
                            <div className="bg-white rounded-lg p-3 border border-solid select-none cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <label className='text-bold'>Margin</label>
                                    <span><Iconcirclecheck /></span>
                                </div>
                                <div className="grid grid-cols-12 gap-2 mt-3">
                                    <div className="col-span-6 md:col-span-5 lg:col-span-5 xl:col-span-3">
                                        <CircularProgressbar value={80} text={`${80}%`} strokeWidth={5}
                                            styles={buildStyles({
                                                textColor: "red",
                                                pathColor: "red"
                                            })}
                                        />
                                    </div>
                                    <div className="col-span-6 md:col-span-7 lg:col-span-7 xl:col-span-9">
                                        <div className="flex flex-col gap-2 text-end mt-3">
                                            Paid: $0
                                        </div>
                                        <div className="flex flex-col gap-2  text-end mt-3">
                                            Call Margin: $120.000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 ">
                            <div className="bg-white rounded-lg p-3 border border-solid select-none cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <label className='text-bold'>USD</label>
                                    <span><Iconcirclecheck /></span>
                                </div>
                                <div className="grid grid-cols-12 gap-2 mt-3">
                                    <div className="col-span-6 md:col-span-5 lg:col-span-5 xl:col-span-3">
                                        <CircularProgressbar value={75} text={`${75}%`} strokeWidth={5}
                                            styles={buildStyles({
                                                textColor: "red",
                                                pathColor: "red"
                                            })}
                                        />
                                    </div>
                                    <div className="col-span-6 md:col-span-7 lg:col-span-7 xl:col-span-9">
                                        <div className="flex flex-col gap-2 text-end mt-3">
                                            Paid: $0
                                        </div>
                                        <div className="flex flex-col gap-2  text-end mt-3">
                                            Total Amount: $120.000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-span-12 lg:col-span-6">
                    <label htmlFor="">Settlement By <span className='text-danger'>*</span></label>
                    <div className="flex  gap-2">
                        <Inputradio id='settlementby1' name='settlementby' color='warning' value='balance' title='Usable Balance' />
                        <Inputradio id='settlementby2' name='settlementby' color='warning' value='bill' title='Deposit Bill' />
                    </div>
                </div>


                <div className="col-span-12 lg:col-span-6">
                    <label htmlFor="">Usable Balance <span className='text-danger'>*</span></label>
                    <input type="text" placeholder='Enter Amount' name='balance' className='form-control' />
                </div>

                <div className="col-span-12">
                    <label>Remark</label>
                    <textarea className='form-control' rows={3} cols={30} name='remark' placeholder='Enter Remark...'></textarea>
                </div>
            </div>
        </div>
    )
}
