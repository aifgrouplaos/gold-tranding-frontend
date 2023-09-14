"use client"
import React, { useRef } from 'react'
import Invoice from './invoice'
import { useReactToPrint } from 'react-to-print';
export default function page() {
  const componentRef: any = useRef();
  const printtocomponent = useReactToPrint({
    content: () => componentRef.current,
  }); 
  const printtowindow = ()=>{
    window.print()
  }


  return (
    <div>
<h3>Detail</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iusto eveniet sed libero explicabo velit nisi! Assumenda sequi iure dicta quia sapiente in rem perferendis inventore a? Possimus impedit sunt eum nesciunt aut vitae ea labore quas corporis  </p>
      <h3>ລາຍການບີນຮັບເງີນ</h3>
      <hr />
      <div className='justify-center flex gap-3'>
      <button className='btn btn-warning' onClick={printtowindow}>window Print</button>
      <button className='btn btn-warning' onClick={printtocomponent}>Print to Component</button>
      </div>
      <hr />
     <div className="container mx-auto">
      <h3>Printing</h3>
     <div ref={componentRef} >
        <Invoice />
      </div>
     </div>
    </div>
  )
}
