import Iconbookoutline from '@/icon/iconbookoutline'
import Icondowup from '@/icon/icondowup'
import React from 'react'

export default function Settlementdetail() {
    return (
        <div className="positionorder bg-white rounded-xl px-5 py-3">
            <div className="flex flex-wrap justify-between gap-2">
                <label className='flex gap-1  text-xl'>
                    <Iconbookoutline />
                    <span>Settlement Detail</span>
                </label>
                <button className='flex btn btn-default'><Icondowup /> Show Detail</button>
            </div>

            <table className='w-[100%]'>
                <tbody>
                    <tr>
                        <td className='w-[35%] pt-5 text-gray'>Settlement Type.</td>
                        <td className='w-[65%] pt-5'>Margin</td>
                    </tr>
                    <tr>
                        <td className='w-[35%] pt-5 text-gray'>Remaining</td>
                        <td className='w-[65%] pt-5'>$0</td>
                    </tr>
                    <tr>
                        <td className='w-[35%] pt-5 text-gray'>Settlement By</td>
                        <td className='w-[65%] pt-5'>Usable Balance</td>
                    </tr>
                    <tr>
                        <td className='w-[35%] pt-5 text-gray'>Amount</td>
                        <td className='w-[65%] pt-5'>$120.000</td>
                    </tr>
                    <tr>
                        <td className='w-[35%] pt-5 text-gray'>Total Amount(USD)</td>
                        <td className='w-[65%] pt-5'>$120.000</td>
                    </tr>
                    <tr>
                        <td className='w-[35%] pt-5 text-gray'>Remark</td>
                        <td className='w-[65%] pt-5'>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
