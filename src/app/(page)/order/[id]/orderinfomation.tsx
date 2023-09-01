import React from 'react'
import Iconbookoutline from '@/icon/iconbookoutline';
import Icondowup from '@/icon/icondowup';

export default function Orderinfomation() {
  return (
    <div className="grid grid-cols-12 bg-white rounded-lg py-3 px-5 gap-5">
      <div className="col-span-12 flex flex-wrap justify-between gap-3">
        <div className="flex items-center gap-2 text-xl">
          <Iconbookoutline />
          <span>Position Order Information</span>
        </div>
        <button className='btn btn-default'>
          <Icondowup />
          <span>Show detail</span>
        </button>
      </div>
      <div className="col-span-12">
        <ul>
          <li className='flex flex-wrap justify-between mb-3'>
            <span>Position Order No.</span>
            <span>P-2023/001</span>
          </li>
          <li className='flex flex-wrap justify-between mb-3'>
            <span>AIF Position Type.</span>
            <span>SELL</span>
          </li>
          <li className='flex flex-wrap justify-between mb-3'>
            <span>Gold Type.</span>
            <span>Trading</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
