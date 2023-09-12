import Iconbookoutline from '@/icon/iconbookoutline'
import Icondowup from '@/icon/icondowup'
import React from 'react'

export default function Positionorderinformation() {
    return (
        <div className="positionorder bg-white rounded-xl px-5 py-3">
            <div className="flex flex-wrap justify-between gap-2">
                <label className='flex gap-1  text-xl'>
                    <Iconbookoutline />
                    <span>Position Order Information</span>
                </label>
                <button className='flex btn btn-default'><Icondowup /> Show Detail</button>
            </div>

            <table className='w-[100%]'>
                <tbody>
                    <tr>
                        <td className='w-[35%] pt-5 text-gray'>Position Order No.</td>
                        <td className='w-[65%] pt-5'>P-2023/001</td>
                    </tr>
                    <tr>
                        <td className='w-[35%] pt-5 text-gray'>AIF Position Type</td>
                        <td className='w-[65%] pt-5'>SELL</td>
                    </tr>
                    <tr>
                        <td className='w-[35%] pt-5 text-gray'>Gold Type</td>
                        <td className='w-[65%] pt-5'>Trading</td>
                    </tr> 
                </tbody>
            </table>
        </div>
    )
}
