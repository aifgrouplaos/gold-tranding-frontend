import Inputradio from '@/components/tools/radio/radio'
import Iconclose from '@/icon/iconclose'
import Icontransfer from '@/icon/icontransfer'
import React, { useState } from 'react'

export default function Menumodaltrasfer() {
    const [open, setOpen] = useState(false);
    return (
        <>
         <button className="btn btn-md btn-default"
          onClick={()=>setOpen(true)}>
          <Icontransfer /> Transfer
        </button>

            <div className={`modal ${open?'show':'hide'}`}>
                <div className="modal-content">
                    <div className="modal-header flex justify-between items-center py-5">
                        <h5 className="modal-title">Transfer</h5>
                        <button type="button" className="btn-error btn-sm btn" onClick={()=>setOpen(false)}>
                            <Iconclose />
                        </button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <div className="grid grid-cols-12 gap-2">
                                <div className="col-span-12">
                                    <label>Transfering to <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-span-12 sm:col-span-6">
                                    <Inputradio required color="warning" name="transfertype" title="Trading" />
                                </div>

                                <div className="col-span-12 sm:col-span-6">
                                    <Inputradio required color="warning" name="transfertype" title="Physical" />
                                </div>
                                <div className="col-span-12">
                                    <label htmlFor="">Quantity to Transfer(Kg) <span className="text-danger">*</span></label>
                                    <input type="text" required className="form-control" name="quantity" placeholder="Enter Quantity" />
                                </div>

                                <div className="col-span-12">
                                    <label htmlFor="">Transfer Date <span className="text-danger">*</span></label>
                                    <input type="date" required className="form-control" name="date" placeholder="--select date--" />
                                </div>

                                <div className="col-span-12 md:col-span-6">
                                    <label htmlFor="">Spot/oz <span className="text-danger">*</span></label>
                                    <input type="text" required className="form-control" name="sport" placeholder="Enter Sport Number" />
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <label htmlFor="">Spot/kg (USD)</label>
                                    <input type="text" disabled className="form-control" name="sport" placeholder="-" />
                                </div>
                                <div className="col-span-12">
                                    <label htmlFor="">Price/Kg(USD) <span className="text-danger">*</span></label>
                                    <input type="text" required className="form-control" name="sport" placeholder="Enter Price" />
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <label htmlFor="">Margin(%) <span className="text-danger">*</span></label>
                                    <input type="text" required className="form-control" name="sport" placeholder="Enter..." />
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <label htmlFor="">Margin(USD) <span className="text-danger">*</span></label>
                                    <input type="text" required className="form-control" name="sport" placeholder="Enter..." />
                                </div>
                                <div className="col-span-12">
                                    <label htmlFor="">Remark</label>
                                    <textarea name="remark" className="form-control" placeholder="Enter Messege" />
                                </div>

                                <div className="col-span-12">
                                    <button className="btn btn-block btn-md btn-warning w-[100%]">
                                        <Icontransfer /> Transfer</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
