import React from 'react'
import Link from 'next/link'
import Icongoback from '@/icon/icongoback'
import Icondownloadoutline from '@/icon/icondownloadoutline'
import Iconedit from '@/icon/iconedit'
import Icondeleteoutline from '@/icon/icondeleteoutline' 
import Positionorderinformation from './positionorderinformation'
import Settlementdetail from './settlementdetail'
import Customerinfo from './customerinfo'
import Settlementsummary from './settlementsummary'
import Menudeletesettlement from './menudeletesettlement'
export default function page() {
  return (
    <div className="grid grid-cols-12 my-2 gap-5">
      <div className="col-span-12 flex  flex-wrap  items-center gap-2">
        <Link href="/settlement" className="bg-white rounded-lg p-2">
          <Icongoback />
        </Link>
        <span className="font-bold text-xl">U-001</span>
        <Menudeletesettlement/>
        <button className="btn btn-md btn-default">
          <Iconedit /> Edit
        </button>
        <button className="btn btn-md btn-default">
          <Icondownloadoutline /> Download
        </button>
      </div>


      <div className="col-span-12">
        <div className="text-grey">Date Created 25 July 2023 at 04:34 PM</div>
      </div> 

      <div className="col-span-12 lg:col-span-7 xl:col-span-8 flex flex-col gap-5">
        <Positionorderinformation/>
        <Settlementdetail/>
      </div>

      <div className="col-span-12 lg:col-span-5 xl:col-span-4  flex flex-col gap-5">
        <Customerinfo/>
        <Settlementsummary/>
      </div>
    </div>
  )
}
