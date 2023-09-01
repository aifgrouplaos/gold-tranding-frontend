import React from 'react'
import Listmenu from './listdemo'
import Listicon from './listicon'
export default function page() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-6">
      <Listmenu/>
      </div>
      <div className="col-span-12 lg:col-span-6"> 
      <Listicon/>
      </div>
    </div>
  )
}
