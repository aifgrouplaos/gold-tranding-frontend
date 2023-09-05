import Link from 'next/link'
import React from 'react'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ListAltIcon from '@mui/icons-material/ListAlt'; 
import Customerinfo from './customerinfo';
import Withdrawsummary from './withdrawsummary';
import Menudeletedeposit from './deletedeposit';
import Menuupdatedeposit from './menuupdatedeposit';
import Icondownloadoutline from '@/icon/icondownloadoutline';

export default function page() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-2 mt-2">
        <div className="col-span-12 flex flex-wrap gap-2 items-center">
          <Link href="/deposit" className="bg-white rounded-lg p-2">
            <ArrowBackRoundedIcon fontSize="small" />
          </Link>
          <span className="font-bold text-xl">WD-2023-001</span> 
          <Menudeletedeposit/>
          <Menuupdatedeposit/> 
          <button className='btn btn-default'>
            <Icondownloadoutline/>
            Download</button>
        </div>
      </div>
      <p className='my-5 text-grey'>Date Created : 01/01/2021 12:00:00</p>
      <div className="grid grid-cols-12 gap-5 mt-4">
        <div className="col-span-12 lg:col-span-7 xl:col-span-8">
          <div className="bg-white rounded-lg px-5 py-3">
            <div className="flex flex-wrap items-center gap-2">
              <ListAltIcon fontSize='large' />
              <span className='text-xl'>Withdraw Detail</span>
            </div>

            <table>
              <tbody>
                <tr>
                  <td className='pt-5 text-grey w-[30%]' >Withdraw No</td>
                  <td className='pt-5'>WD-2023-001</td>
                </tr>
                <tr>
                  <td className='pt-5 text-grey w-[30%]' >Withdraw Type</td>
                  <td className='pt-5'>USD</td>
                </tr>
                <tr>
                  <td className='pt-5 text-grey w-[30%]' >Withdraw Amount</td>
                  <td className='pt-5'>20kg</td>
                </tr>
                <tr>
                  <td className='pt-5 text-grey w-[30%]' >File</td>
                  <td className='pt-5'>Transaction.pdf</td>
                </tr>
                <tr>
                  <td className='pt-5 text-grey w-[30%]' >Remark</td>
                  <td className='pt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing etrt.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col gap-3">
          <Customerinfo />

          <Withdrawsummary /> 
        </div>
      </div>
    </div>
  )
}
