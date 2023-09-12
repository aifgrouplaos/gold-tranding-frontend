import Iconadd from '@/icon/iconadd'
import Iconclose from '@/icon/iconclose'
import Icondownloadoutline from '@/icon/icondownloadoutline' 
import Iconsaveoutline from '@/icon/iconsaveoutline'
import Iconuseroutline from '@/icon/iconuseroutline'
import React, { useState } from 'react'

export default function Menucreatesupplier() {
  const [isopen, setisopen] = useState(false)
  return (
    <>
      <button className='btn btn-secondary' onClick={() => setisopen(!isopen)}>
        <Iconadd />
        Create Supplier</button>

      <div className={`modal ${isopen ? 'show' : 'hide'}`}>
        <div className="modal-content modal-md modal-sm">
          <div className="modal-header py-3 flex justify-between items-center">
            <h6>Create Supplier</h6>
            <button className='btn btn-error btn-sm' onClick={() => setisopen(!isopen)}>
              <Iconclose />
            </button>
          </div>
          <div className="modal-body py-3">
            <div className="flex flex-wrap items-center gap-5">
              <div className='text-4xl p-3 border-[3px] border-solid rounded-xl'>
                <Iconuseroutline />
              </div>
              <div>
                <button className='btn btn-default'>
                  <Icondownloadoutline /> Upload
                </button>
              </div>
            </div>
            <div className="grid grid-cols-12 mt-3 gap-5">
              <div className="col-span-12">
                <label htmlFor="name">
                  Customer Name
                </label>
                <input type="text" name='name' placeholder='Enter Seller Name' className='form-control' id='name' />
              </div>
              <div className="col-span-12">
                <label htmlFor="phonenumber">
                  Phone Number
                </label>
                <div className='grid grid-cols-12 gap-3'>
                  <div className="col-span-4">
                    <select className='form-select'>
                      <option value="+856">+856</option>
                    </select>
                  </div>
                  <div className="col-span-8">
                    <input type="text" className='form-control' placeholder='Enter Phone Number' id='phonenumber' />
                  </div> 
                </div>
              </div>
              <div className="col-span-12">
                <button className='btn btn-secondary w-full'>
                  <Iconsaveoutline /> Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
