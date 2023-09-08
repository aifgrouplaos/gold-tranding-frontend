import Icongoback from '@/icon/icongoback'
import Link from 'next/link'
import React from 'react'
import Iconsaveoutline from '@/icon/iconsaveoutline'
import Formcreatesettlement from './formcreatesettlement'
import Settlementsummary from './settlementsummary'

export default function page() {
    return (
        <>
            <div className="grid grid-cols-12 my-2 gap-5">
                <div className="col-span-12 lg:col-span-7  flex  flex-wrap  items-center gap-2">
                    <Link href="/settlement" className="bg-white rounded-lg p-2">
                        <Icongoback />
                    </Link>
                    <span className="font-bold text-xl">Create New Settlement</span>
                </div>
                <div className="col-span-12 lg:col-span-5 flex flex-wrap gap-3  lg:justify-end">
                    <button className="btn btn-md btn-success gap-1">
                        <Iconsaveoutline /> Create Settlement
                    </button>
                </div>
                <div className="col-span-12 lg:col-span-7 xl:col-span-8">
                    <Formcreatesettlement/>
                </div>
                <div className="col-span-12 lg:col-span-5 xl:col-span-4">
                   <Settlementsummary/>
                </div>
            </div>
        </>
    )
}