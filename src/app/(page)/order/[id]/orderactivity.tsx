import Icondowup from '@/icon/icondowup'
import Iconhistory from '@/icon/iconhistory'
import React from 'react' 
export default function Orderactivity() {
  return (
    <div className="grid grid-cols-12 bg-white rounded-lg py-3 px-5 gap-5">
      <div className="col-span-12 flex flex-wrap justify-between gap-3">
        <div className="flex items-center text-xl gap-2">
          <Iconhistory />
          <span>Position Activity</span>
        </div>
        <button className='btn btn-default'><Icondowup /> Show detail</button>
      </div>
      <div className="col-span-12"> 
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed veritatis blanditiis deleniti magnam perspiciatis! Suscipit tempora magni asperiores accusantium dolores soluta assumenda consectetur esse velit architecto. Impedit ipsum saepe velit.
      </div>
    </div>
  )
}
