import Iconback from '@/icon/iconback'; 
import Iconcardoutline from '@/icon/iconcardoutline'; 
import Iconmoneyoutline from '@/icon/iconmoneyoutline';
import React from 'react' 
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
export default function Orderbalance() {
    return (
        <div className="grid grid-cols-12 bg-white rounded-lg py-3 px-5">
            <div className="col-span-12 md:col-span-6 lg:col-span-12 xl:col-span-6 px-5">
                <div className="grid grid-cols-12 py-3 gap-5">
                    <div className="col-span-12 flex items-center gap-2 text-xl">
                        <Iconcardoutline />
                        <span>Position Order Balance</span>
                    </div>
                    <div className="col-span-12 sm:col-span-5 md:col-span-6 lg:col-span-5">
                        <div className="text-md">USD</div>
                        <CircularProgressbar value={100} text={`${100}%`} strokeWidth={5}
                            styles={buildStyles({
                                textColor: "red",
                                pathColor: "red"
                            })}
                        />
                    </div>
                    <div className="col-span-12 sm:col-span-7 md:col-span-6 lg:col-span-7 flex flex-col text-end">
                        <span className="bg-warning-light rounded-lg p-2 text-warning inline-block">Pending Payment</span>
                        <span className="pt-2 text-grey">Paid</span>
                        <span className="pt-2 text-success">$0</span>
                        <span className="pt-2 text-grey">Total Amount</span>
                        <span className="pt-2 text-danger">$0</span>
                    </div>
                </div>
            </div>


            <div className="col-span-12 md:col-span-6 lg:col-span-12 xl:col-span-6 border-gray px-5">
                <div className="grid grid-cols-12 py-3 gap-5">
                    <div className="col-span-12">
                        <div className="flex flex-wrap justify-center gap-2">
                            <button className="btn btn-default"><Iconback /> Payback</button>
                            <button className="btn btn-default"><Iconmoneyoutline /> Update Marning</button>
                        </div>
                    </div>

                    <div className="col-span-12 sm:col-span-5 md:col-span-6 lg:col-span-5">
                        <div className="text-md">Margin</div>
                        <CircularProgressbar value={100} text={`${100}%`} strokeWidth={5}
                            styles={buildStyles({
                                textColor: "red",
                                pathColor: "red"
                            })}
                        />
                    </div>
                    <div className="col-span-12 sm:col-span-7 md:col-span-6 lg:col-span-7 flex flex-col text-end">
                        <span className="bg-warning-light rounded-lg p-2 text-warning inline-block">Pending Margin</span>
                        <span className="pt-2 text-grey">Paid</span>
                        <span className="pt-2 text-success">$0</span>
                        <span className="pt-2 text-grey">Call Margin</span>
                        <span className="pt-2 text-danger">$0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
