"use client"
import Icondeliveryinline from '@/icon/icondeliveryinline'
import React, { useState } from 'react'

export default function Modal() {
    const [ismodal, setismodal] = useState(false)
    return (
        <>
            <button className='btn btn-primary' onClick={()=>setismodal(!ismodal)}>
                <Icondeliveryinline /> Update to Derivery
            </button>

            <div className={`cusmodal ${ismodal?'showmodal':'hidemodal'}`}>
                <div className="modal-content modal-md">
                    <p>
                 this is modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum harum quo quibusdam nesciunt laudantium fuga sequi fugiat reprehenderit accusantium, facilis aperiam, possimus nobis vel dolore, ipsa quidem. Rem, nihil earum.
                    </p>
                 <button className='btn btn-error btn-sm' onClick={()=>setismodal(!ismodal)}>Close</button>
                </div>
            </div>
        </>
    )
}
