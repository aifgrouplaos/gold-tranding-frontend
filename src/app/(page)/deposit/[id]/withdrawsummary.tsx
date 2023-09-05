import React from "react"; 
import Iconinvoiceoutline from "@/icon/iconinvoiceoutline";
export default function Withdrawsummary() {
    return (
        <div className="bg-white rounded-lg  py-3 px-5">
            <div className="flex items-center gap-2 text-xl">
                <Iconinvoiceoutline />
                <span>Withdraw Summary</span>
            </div>
            <div className="mt-5">
                <ul>
                    <li className="flex justify-between mt-2">
                        <span className="text-grey">Withdraw Type</span>
                        <span>USD</span>
                    </li> 
                    <li className="flex justify-between mt-2">
                        <span className="text-grey">Withdraw Amount</span>
                        <span>$20</span>
                    </li> 
                    <li className="flex justify-between mt-2 border-t-2 border-grey"></li>
                    <li className="flex justify-between mt-2">
                        <span className="text-black text-bold">Total (USD) per SGB</span>
                        <span>$20</span>
                    </li>
                </ul>

            </div>

        </div>
    );
}
