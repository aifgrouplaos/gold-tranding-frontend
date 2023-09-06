import React from "react";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
export default function Settlementsummary() {
    return (
        <div className="bg-white rounded-lg  py-3 px-5">
            <div className="flex items-center gap-2">
                <ReceiptLongRoundedIcon fontSize="large" />
                <span className="text-xl">Settlement Summary</span>
            </div>
            <div className="mt-5">
                <ul>
                    <li className="flex justify-between mt-2">
                        <span className="text-grey">Settlement Type</span>
                        <span>Margin</span>
                    </li>
                    <li className="flex justify-between mt-2">
                        <span className="text-grey">Remaining</span>
                        <span>0Kg</span>
                    </li>
                    <li className="flex justify-between mt-2">
                        <span className="text-grey">Settlement By</span>
                        <span>Usable Balance</span>
                    </li>
                    <li className="flex justify-between mt-2">
                        <span className="text-grey">Amount</span>
                        <span>$120.000</span>
                    </li>

                    <li className="flex justify-between mt-2 border-t-2 border-grey"> </li>

                    <li className="flex justify-between text-lg mt-2">
                        <span className="text-dark">Total (USD) per SGB</span>
                        <span>$120.000</span>
                    </li>
                </ul>

            </div>

        </div>
    );
}
