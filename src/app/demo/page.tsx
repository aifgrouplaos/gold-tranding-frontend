import React from 'react'
import Listmenu from './listdemo'
import Listicon from './listicon'
import Modal from './modal'
export default function page() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-6">
      <Listmenu/>
      <hr />
      <h4>Example Modal</h4>
      <Modal/>
      </div>
      <div className="col-span-12 lg:col-span-6"> 
      <Listicon/>
      </div>
    </div>
  )
}
