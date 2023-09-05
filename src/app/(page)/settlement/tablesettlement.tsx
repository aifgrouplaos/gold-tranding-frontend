 
    "use client";
    import React, { useState } from "react";
    import Pagination from "@/components/pagination/pagination";    
    import Link from "next/link";
    import Iconcheckinvoice from "@/icon/iconcheckinvoice";
    import Iconaddinvoice from "@/icon/iconaddinvoice";
    import Icondownloadoutline from "@/icon/icondownloadoutline";
    import Iconmore from "@/icon/iconmore";
    import Iconslidoutline from "@/icon/iconslidoutline";
import Iconadd from "@/icon/iconadd";
    export default function Tablesettlement() {
        const [limit, setLimit] = useState(10);
        const [currectpage, setcurrectpage] = useState(1);
        const data = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            "a",
            "b",
            "c",
            "d",
        ];
    
        return (
            <div>
                <div className="grid grid-cols-12 mb-4">
                    <div className="col-span-12 md:col-span-6">
                        <h4>Settlement</h4>
                    </div>
                    <div className="col-span-12 md:col-span-6 flex flex-wrap justify-end gap-2">
                        <Link href="/deposit/createwithdraw" className="btn btn-secondary">
                            <Iconadd />
                            Create Settlement
                        </Link> 
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="grid grid-cols-12 my-5 gap-2">
                            <div className="col-span-8 lg:col-span-4 flex">
                                <input
                                    type="search"
                                    placeholder="Search..."
                                    className="form-control"
                                />
                            </div>
                            <div className="col-span-4 lg:col-span-2">
                                <button className="btn btn-default">
                                    <Iconslidoutline/>
                                    Filter
                                </button>
                            </div>
                            <div className="col-span-12 lg:col-span-6 lg:text-end">
                                <button className="btn btn-default">
                                    <Icondownloadoutline /> Download
                                </button>
                            </div>
                        </div>
    
                        <div className="table-responesive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Settlement No.</th>
                                        <th>Position No.</th>
                                        <th>Customer Info</th>
                                        <th>AIF Position Type</th>
                                        <th>Settle Type</th>
                                        <th>Settle By</th>
                                        <th>Total Amount</th>
                                        <th>Remark</th>
                                        <th>Date Created</th>
                                        <th style={{ width: "100px" }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="tbody">
                                    <tr>
                                        <td>1</td>
                                        <td>ST-2023-001</td>
                                        <td>PO-2023-001</td>
                                        <td>Macky Hamaphasouk</td>
                                        <td>BUY</td>
                                        <td>Gold</td>
                                        <td>Usable Balance</td>
                                        <td>$400.000</td>
                                        <td>-</td>
                                        <td>20/10/2023</td>
                                        <td>
                                            <Link
                                                href="/deposit/1"
                                                className="btn btn-sm btn-default"
                                            >
                                                <Iconmore/>
                                            </Link>
                                        </td>
                                    </tr> 
                                    <tr>
                                        <td>2</td>
                                        <td>ST-2023-002</td>
                                        <td>PO-2023-002</td>
                                        <td>Macky Hamaphasouk</td>
                                        <td>SELL</td>
                                        <td>USD</td>
                                        <td>Usable Balance</td>
                                        <td>$400.000</td>
                                        <td>-</td>
                                        <td>20/10/2023</td>
                                        <td>
                                            <Link
                                                href="/deposit/1"
                                                className="btn btn-sm btn-default"
                                            >
                                                <Iconmore/>
                                            </Link>
                                        </td>
                                    </tr> 
                                    <tr>
                                        <td>3</td>
                                        <td>ST-2023-003</td>
                                        <td>PO-2023-003</td>
                                        <td>Macky Hamaphasouk</td>
                                        <td>SELL</td>
                                        <td>Margin</td>
                                        <td>Usable Balance</td>
                                        <td>$120.000</td>
                                        <td>-</td>
                                        <td>20/10/2023</td>
                                        <td>
                                            <Link
                                                href="/deposit/1"
                                                className="btn btn-sm btn-default"
                                            >
                                                <Iconmore/>
                                            </Link>
                                        </td>
                                    </tr> 

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-footer">
                        <Pagination
                            total={data}
                            limit={limit}
                            currectpage={currectpage}
                            setLimit={setLimit}
                            onChangepage={setcurrectpage}
                        />
                    </div>
                </div>
            </div>
        ); 
    
}
