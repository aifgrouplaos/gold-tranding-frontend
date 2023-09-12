"use client"
import Iconcheckinvoice from '@/icon/iconcheckinvoice'
import Iconclose from '@/icon/iconclose'
import Icondeliveryinline from '@/icon/icondeliveryinline'
import React, { useState } from 'react'
import { FileUploader } from "react-drag-drop-files";
export default function Updatedelivery() {
    const [ismodal, setismodal] = useState(false)
    return (
        <>
            <button className='btn btn-primary' onClick={() => setismodal(!ismodal)}>
                <Icondeliveryinline /> Update to Derivery
            </button> 
            <div className={`modal ${ismodal ? 'show' : 'hide'}`} >
                <div className="modal-content modal-md">
                    <div className="modal-header py-2">
                        <div className="flex justify-between items-center">
                            <h6>Deliver Gold to Customer</h6>
                            <button className='btn btn-error btn-sm' onClick={() => setismodal(!ismodal)}><Iconclose /></button>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12">
                                <label htmlFor="uploadfile">Upload files</label>
                                <FileUploader name="uploadfile" handleChange={(file: any) => {
                                    console.log(file);
                                }} label="Drag and Drop files, or Upload: " onSelect={(file: any) => {
                                    console.log(file);
                                }} types={['jpeg', 'jpg', 'png', 'gif']} />
                            </div>
                            <div className="col-span-12 mt-3">
                                <label htmlFor="uploadfile">Remark</label>
                                <textarea className='form-control' name="remark" id="" cols={30} rows={3} placeholder='Enter Message...'></textarea>
                            </div>
                            <div className="col-span-12 mt-3">
                                <button className='btn btn-secondary w-full ' onClick={() => setismodal(!ismodal)}>
                                    <Iconcheckinvoice />
                                    Update
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
