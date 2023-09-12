
import React from 'react'
import Image from 'next/image';
import Iconhistory from '@/icon/iconhistory';
import Icondowup from '@/icon/icondowup';
export default function Activitylog() {
    return (
        <div className="bg-white p-5 rounded-lg">
            <div className='mb-3 flex justify-between'>
                <span className='text-xl flex flex-wrap items-center gap-1'>
                    <Iconhistory/> Activity Log
                </span>

                <button className='btn btn-default'>
                    <Icondowup/> Show detail
                </button>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Profile</th>
                        <th>Datetime</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='flex items-center gap-2'>
                            <Image src="/avatar.jpg" width={30} height={100}
                                className="rounded-full bg-white"
                                alt={"avatar"} />
                            <span>Macky BUY Physical 10kg</span>
                        </td>
                        <td>10/09/2023 2:30PM</td>
                    </tr>
                    <tr>
                        <td className='flex items-center gap-2'>
                            <Image src="/avatar.jpg" width={30} height={100}
                                className="rounded-full bg-white"
                                alt={"avatar"} />
                            <span>Macky BUY Physical 3kg</span>
                        </td>
                        <td>10/09/2023 2:30PM</td>
                    </tr>
                    <tr>
                        <td className='flex items-center gap-2'>
                            <Image src="/avatar.jpg" width={30} height={100}
                                className="rounded-full bg-white"
                                alt={"avatar"} />
                            <span>Macky BUY Physical 5kg</span>
                        </td>
                        <td>10/09/2023 2:30PM</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
