import React from 'react'
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ReplyAllRoundedIcon from '@mui/icons-material/ReplyAllRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
export default function Orderbalance() {
    return (
        <div className="grid grid-cols-12 bg-white rounded-lg py-3 px-5">
            <div className="col-span-12 lg:col-span-12 xl:col-span-6 px-5">
                <div className="flex items-center gap-2">
                    <AccountBalanceWalletRoundedIcon fontSize="large" />
                    <span className="text-xl">Position Order Balance</span>
                </div>
                <div className="grid grid-cols-12 py-3 gap-5">
                    <div className="col-span-12 md:col-span-6 lg:col-span-5">
                        <div className="text-md">USD</div>
                        <CircularProgressbar value={100} text={`${100}%`} strokeWidth={5}
                            styles={buildStyles({
                                textColor: "red",
                                pathColor: "red"
                            })}
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-col text-end">
                        <span className="bg-warning-light rounded-lg p-2 text-warning inline-block">Pending Payment</span>
                        <span className="pt-2 text-grey">Paid</span>
                        <span className="pt-2 text-success">$0</span>
                        <span className="pt-2 text-grey">Total Amount</span>
                        <span className="pt-2 text-danger">$0</span>
                    </div>
                </div>
            </div>

            <div className="col-span-12 lg:col-span-12 xl:col-span-6 xl:border-l-2 border-gray px-5">
                <div className="flex flex-wrap justify-center gap-2">
                    <button className="btn btn-default"><ReplyAllRoundedIcon /> Payback</button>
                    <button className="btn btn-default"><PaymentsRoundedIcon /> Update Marning</button>
                </div>
                <div className="grid grid-cols-12 py-3 gap-5">
                    <div className="col-span-12 md:col-span-6 lg:col-span-5">
                        <div className="text-md">Margin</div>
                        <CircularProgressbar value={100} text={`${100}%`} strokeWidth={5}
                            styles={buildStyles({
                                textColor: "red",
                                pathColor: "red"
                            })}
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-col text-end">
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
