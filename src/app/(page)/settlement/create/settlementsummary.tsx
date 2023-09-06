import Iconcheckinvoice from '@/icon/iconcheckinvoice'
import React from 'react'



export default function Settlementsummary() {
  const listsummary = (title:string, subtitle:string) => {
    return (
      <li className='flex justify-between text-grey'>
        <span>{title}</span>
        <span>{subtitle}</span>
      </li>
    )
  }
  return (
    <div className="bg-white px-5 py-3 rounded-lg">
      <div className="flex items-center gap-2 text-lg">
        <Iconcheckinvoice />
        <span>Settlement Summary</span>
      </div>

      <ul className='flex flex-col gap-3 mt-5'>  
        {listsummary('Settlement Type', '$100.000')}
        {listsummary('Remaining', '$USD')}
        {listsummary('Settlement By', 'Usable Balance')}
        {listsummary('Amount', '$100.000')}
        {listsummary('Bill-2023-001', '$50.000')}
        {listsummary('Bill-2023-002', '$20.000')} 
        <li className='flex justify-between border-[1px] border-b-solid'>
        </li>  
        <li className='flex justify-between text-lg'>
          <span>Total Amount</span>
          <span>$0</span>
        </li>
      </ul>
    </div>
  )
}

