import React from "react";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
export default function Summary() {
  return (
    <div className="bg-white rounded-lg  py-3 px-5">
      <div className="flex items-center gap-2">
        <ReceiptLongRoundedIcon fontSize="large" />
        <span className="text-xl">Order Summary</span> 
      </div>
      <div className="mt-5">
            <ul>
                <li className="flex justify-between mt-2">
                    <span className="text-grey">Quantity/Kg</span>
                    <span>-</span>
                </li>
                <li className="flex justify-between mt-2">
                    <span className="text-grey">Price/Kg</span>
                    <span>-</span>
                </li>
                <li className="flex justify-between mt-2">
                    <span className="text-grey">Margin/(%)</span>
                    <span>-</span>
                </li>
                <li className="flex justify-between mt-2">
                    <span className="text-grey">Margin/(USD)</span>
                    <span>-</span>
                </li>
 
                <li className="flex justify-between mt-2 border-t-2 border-grey"> </li>

                <li className="flex justify-between mt-2">
                    <span className="text-grey">Total (USD) per SGB</span>
                    <span>$0</span>
                </li>
                <li className="flex justify-between mt-2">
                    <span className="text-dark text-lg">Total Amount</span>
                    <span>-</span>
                </li>
                <li className="flex justify-between mt-2 bg-success-light p-2 text-lg text-success">
                    <span className="text-grey">Commission</span>
                    <span>$0</span>
                </li>
            </ul> 

        </div>

    </div>
  );
}