"use client"
import Inputradio from '@/components/tools/radio/radio'
import Iconbill from '@/icon/iconbill';
import Iconbilloutline from '@/icon/iconbilloutline';
import Iconinvoice from '@/icon/iconinvoice'
import { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
export default function Formcreatedeposit() {
    const fileTypes = ["JPG","JPEG" ,"PNG", "GIF"];
    const [file, setFile] = useState(null);
    const handleChange = (file: any) => {
        setFile(file);
    };
    return (
        <div className="bg-white px-5 py-3 rounded-lg">
            <div className="flex items-center gap-2 text-lg">
                <Iconbilloutline />
                <span>Deposit Information</span>
            </div>

            <div className="grid grid-cols-12 gap-5 mt-3">
                <div className="col-span-12 lg:col-span-6">
                    <label>
                        Customer Infor <span className="text-danger">*</span>
                    </label>
                    <select name="customer" id="customer" className="form-select">
                        <option value="">--Please Select--</option>
                    </select>
                </div>
                <div className="col-span-12 lg:col-span-6">
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <label>
                        Deposit Type <span className="text-danger">*</span>
                    </label>
                    <div className="flex gap-3">
                        <Inputradio name='deposittype' title='USD' value="usd" color='warning' />
                        <Inputradio name='deposittype' title='GOLD' value="gold" color='warning' />
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-6">
                    <label>
                        Deposit Amount(kg) <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" placeholder='Enter Amount' />
                </div>

                <div className="col-span-12">
                    <label>Upload file</label>
                    <FileUploader handleChange={handleChange} label="Drag and Drop files, or Upload: " onSelect={handleChange} name="file" types={fileTypes}  />
                </div>

                <div className="col-span-12">
                    <label>Remark</label>
                    <textarea name="remark" id="remark" cols={30} rows={3} placeholder='Remark...' className='form-control' />
                </div>
            </div>
        </div>
    )
}
