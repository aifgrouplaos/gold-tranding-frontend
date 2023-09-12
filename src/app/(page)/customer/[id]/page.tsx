import Icondownloadoutline from '@/icon/icondownloadoutline'
import React from 'react'
import Icongoback from '@/icon/icongoback';
import Link from 'next/link';
import Menudeletecustomer from './menudeletecustomer';
import Menuupdatecustomer from './menuupdatecustomer';
import Iconcheckinvoice from '@/icon/iconcheckinvoice';
import Iconaddinvoice from '@/icon/iconaddinvoice';
import Customerbalance from './customerbalance';
import Customerinfo from './customerinfo';
import Activitylog from './activitylog';
export default function page() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-5 mt-2">
        <div className="col-span-12 lg:col-span-7 flex flex-wrap gap-2 items-center">
          <Link href="/customer" className="bg-white rounded-lg p-2">
            <Icongoback />
          </Link>
          <span className="font-bold text-xl">CUM-2023-001</span>
          <Menudeletecustomer />
          <Menuupdatecustomer />
          <button className='btn btn-default'>
            <Icondownloadoutline />
            Download
          </button>
        </div>
        <div className="col-span-12 lg:col-span-5 flex justify-end gap-3 flex-wrap">
          <button className='btn btn-error'>
            <Iconcheckinvoice /> Withdraw
          </button>
          <button className='btn btn-success'>
            <Iconaddinvoice /> Deposit
          </button>
        </div>

        <div className="col-span-12">
          <div className="text-grey">Date Created 25 July 2023 at 04:34 PM</div>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <Customerbalance/>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Customerinfo/>
        </div>
        <div className="col-span-12">
          <Activitylog/>
        </div>
      </div>
    </div>
  )
}
