import Iconbookoutline from '@/icon/iconbookoutline'
import Icondowup from '@/icon/icondowup'
import React from 'react'

export default function Paybackdetail() {
    const listdata=(name:string, value:string)=>{
        return (<tr>
        <td className='w-[35%] pt-5 text-gray'>{name}</td>
        <td className='w-[65%] pt-5'>{value}</td>
        </tr>)
    }
    return (
        <div className="positionorder bg-white rounded-xl px-5 py-3">
            <div className="flex flex-wrap justify-between gap-2">
                <label className='flex gap-1  text-xl'>
                    <Iconbookoutline />
                    <span>Cut Position Detail</span>
                </label>
                <button className='flex btn btn-default'><Icondowup /> Show Detail</button>
            </div>

            <table className='w-[100%]'>
                <tbody>
                    {listdata('Gold Type', 'Trading')}
                    {listdata('Cut Position Date', '12/07/2023')}
                    {listdata('Supplier Port Name', 'MTS')}
                    {listdata('Port No.', '094567822')}
                    {listdata('Port Date', '12/08/2023')}
                    {listdata('Port/oz', '1.1000')}
                    {listdata('Port/kg(USD)', '10kg')}
                    {listdata('Quantity to Cut', '$321.20')}
                    {listdata('Cut Price', '$321.20')}
                    {listdata('Total Amount', '$321.20')}
                    {listdata('Remark', '-')}
                     
                </tbody>
            </table>
        </div>
    )
}
