import React from "react";
import Iconbill from "@/icon/iconbill";
export default function Paybacksummary() {
    return (
        <div className="bg-white rounded-lg  py-3 px-5">
            <div className="flex items-center gap-2 text-xl">
                <Iconbill />
                <span>Payback Summary</span>
            </div>
            <div className="mt-5">
                <ul>
                    <li className="flex justify-between mt-2">
                        <span className="text-grey">Payback Margin(USD)</span>
                        <span>$0</span>
                    </li> 

                    <li className="flex justify-between mt-2 border-t-2 border-grey"> </li>

                    <li className="flex justify-between mt-2">
                        <span className="text-dark">Total Amount</span>
                        <span>$0</span>
                    </li>
                     
                </ul>

            </div>

        </div>
    );
}
