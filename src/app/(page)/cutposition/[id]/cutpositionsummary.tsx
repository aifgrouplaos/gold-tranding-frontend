import React from "react";
import Iconbill from "@/icon/iconbill";
export default function Cutpositionsummary() {
    return (
        <div className="bg-white rounded-lg  py-3 px-5">
            <div className="flex items-center gap-2 text-xl">
                <Iconbill />
                <span>Cut Position Summary</span>
            </div>
            <div className="mt-5">
                <ul>
                    <li className="flex justify-between mt-2">
                        <span className="text-grey">Position quantity/kg</span>
                        <span>Enter quantity</span>
                    </li>
                    <li className="flex justify-between mt-2">
                        <span className="text-grey">Cut Amount</span>
                        <span>-</span>
                    </li>
                    <li className="flex justify-between mt-2">
                        <span className="text-grey">Quantity Remaining</span>
                        <span>0kg</span>
                    </li> 

                    <li className="flex justify-between mt-2 border-t-2 border-grey"> </li>

                    <li className="flex justify-between mt-2">
                        <span className="text-dark">Open Position Amount</span>
                        <span>$120.000</span>
                    </li>
                    <li className="flex justify-between mt-2">
                        <span className="text-dark">Cut total Amount</span>
                        <span>-</span>
                    </li>
                    <li className="flex rounded-lg p-2 justify-between bg-danger-light text-danger">
                        <span>Lost</span>
                        <span>-</span>
                    </li>
                </ul>

            </div>

        </div>
    );
}
