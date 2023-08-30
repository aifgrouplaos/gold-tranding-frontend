import React from 'react'
import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
export default function Orderactivity() {
  return (
    <div className="grid grid-cols-12 bg-white rounded-lg py-3 px-5 gap-5">
      <div className="col-span-12 flex flex-wrap justify-between gap-3">
        <div className="flex items-center gap-2">
          <RestoreRoundedIcon fontSize="large" />
          <span className="text-xl">Position Activity</span>
        </div>
        <button className='btn btn-default'><SwapVertRoundedIcon /> Show detail</button>
      </div>
      <div className="col-span-12"> 
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed veritatis blanditiis deleniti magnam perspiciatis! Suscipit tempora magni asperiores accusantium dolores soluta assumenda consectetur esse velit architecto. Impedit ipsum saepe velit.
      </div>
    </div>
  )
}
