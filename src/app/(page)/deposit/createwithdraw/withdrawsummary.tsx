import Iconcheckinvoice from '@/icon/iconcheckinvoice'
import React from 'react'
export default function Withdrawsummary() {
  return (
    <div className="bg-white px-5 py-3 rounded-lg">
      <div className="flex items-center gap-2 text-lg">
        <Iconcheckinvoice />
        <span>Withdraw Summary</span>
      </div>

      <ul className='flex flex-col gap-3 mt-5'>
        <li className='flex justify-between text-grey'>
          <span>Withdraw Type</span>
          <span>USD</span>
        </li>
        <li className='flex justify-between text-grey'>
          <span>Withdraw Amount</span>
          <span>$0</span>
        </li>
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

