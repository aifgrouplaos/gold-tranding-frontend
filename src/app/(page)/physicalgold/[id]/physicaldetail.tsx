import Iconbookoutline from '@/icon/iconbookoutline'
import Icondowup from '@/icon/icondowup'
import React from 'react'

export default function Physicaldetail() {
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
                    <span>Physical Gold Detail</span>
                </label>
                <button className='flex btn btn-default'><Icondowup /> Show Detail</button>
            </div>

            <table className='w-[100%]'>
                <tbody>
                    {listdata('Gold Type', 'Physical')}
                    {listdata('Quantity Gold/Kg', '6Kg')}
                    {listdata('Total Amount', '$60.000')}
                    {listdata('Files.', 'transation.pdf')} 
                    {listdata('Remark', '-')} 
                </tbody>
            </table>
        </div>
    )
}
