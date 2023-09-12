import React from "react";
import Iconbill from "@/icon/iconbill";
export default function Goldsummary() {
    return (
        <div className="bg-white rounded-lg  py-3 px-5">
            <div className="flex items-center gap-2 text-xl">
                <Iconbill />
                <span>Gold Summary</span>
            </div>
            <div className="mt-5">
                <ul>
                    <li className="flex justify-between mt-2">
                        <span className="text-grey">Position Quantity/Kg</span>
                        <span>10kg</span>
                    </li> 
                    <li className="flex justify-between mt-2">
                        <span className="text-grey">Cut Amount</span>
                        <span>10Kg</span>
                    </li> 
                    <li className="flex justify-between mt-2">
                        <span className="text-grey">Quantity Remaining</span>
                        <span>0Kg</span>
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
