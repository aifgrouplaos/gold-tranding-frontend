import React from 'react'
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';

export default function Orderinfomation() {
  return (
    <div className="grid grid-cols-12 bg-white rounded-lg py-3 px-5 gap-5">
        <div className="col-span-12 flex flex-wrap justify-between gap-3">
            <div className="flex items-center gap-2">
                <PostAddRoundedIcon fontSize="large" />
                <span className="text-xl">Position Order Information</span>
            </div> 
            <button className='btn btn-default'><SwapVertRoundedIcon/> Show detail</button>
        </div>
        <div className="col-span-12"> 
            <ul>
              <li className='flex flex-wrap justify-between mb-3'>
                <span>Position Order No.</span>
                <span>P-2023/001</span>
              </li>
              <li  className='flex flex-wrap justify-between mb-3'>
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
