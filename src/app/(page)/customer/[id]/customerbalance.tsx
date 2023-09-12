import Iconcardoutline from '@/icon/iconcardoutline'
import Icongold from '@/icon/icongold' 
import Iconmoneycircle from '@/icon/iconmoneycircle'
import React from 'react'

export default function Customerbalance() {
  return (
    <div className='bg-white rounded-lg px-5 py-5'>
        <div className="flex flex-wrap gap-2 text-xl">
            <Iconcardoutline/> Customer Balance
        </div>
        
        <div className="grid grid-cols-12 mt-4 gap-5">
            <div className="col-span-12 md:col-span-6 bg-success-light p-3 rounded-lg">
                <h6>USD</h6>
                <div className="flex justify-between">
                    <span className='text-4xl text-success'>
                    <Iconmoneycircle/>
                    </span>
                    <span className='text-end'>
                        <p>Total Banlance</p>
                        <p className='text-4xl text-success'>$0</p>
                    </span>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 bg-secondary-light p-3 rounded-lg">
                <h6>Gold</h6>
                <div className="flex justify-between">
                    <span className='text-4xl text-secondary'>
                    <Icongold/>
                    </span>
                    <span className='text-end'>
                        <p>Total Banlance</p>
                        <p className='text-4xl text-secondary'>$0</p>
                    </span>
                </div>
            </div>
        </div> 
    </div>
  )
}
