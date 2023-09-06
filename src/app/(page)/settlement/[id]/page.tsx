import React from 'react'
import Link from 'next/link'
import Icongoback from '@/icon/icongoback' 
import Iconsaveoutline from '@/icon/iconsaveoutline'
export default function page() {
  return (
    <div>
        <div className="grid grid-cols-12 gap-2 mt-2">
        <div className="col-span-12 flex flex-wrap gap-2 items-center">
          <Link href="/deposit" className="bg-white rounded-lg p-2">
            <Icongoback /> 
            <span>Create New Settlement</span>
          </Link>  
          <button className='btn btn-default'>
            <Iconsaveoutline/> Create Settlement
            </button>
        </div>
      </div>
    </div>
  )
}
