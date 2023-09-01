 import Iconcontactoutline from '@/icon/iconcontactoutline'
import Icondowup from '@/icon/icondowup' 
import React from 'react' 
export default function Ordertransaction() {
  return (
    <div className="grid grid-cols-12 bg-white rounded-lg py-3 px-5 gap-5">
      <div className="col-span-12 flex flex-wrap justify-between gap-3">
        <div className="flex items-center gap-2 text-xl">
          <Iconcontactoutline />
          <span>Position Order Transaction</span>
        </div>
        <button className='btn btn-default'><Icondowup /> Show detail</button>
      </div>
      <div className="col-span-12">
        <div className="table-responesive">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Settlement</th>
                <th>Cut Position</th>
                <th>Physical</th>
                <th>Benefit</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>30-08-2023</td>
                <td>Buy Traiding</td>
                <td>1KG</td>
                <td>$400.00</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>30-08-2023</td>
                <td>Buy Traiding</td>
                <td>1KG</td>
                <td>$400.00</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
