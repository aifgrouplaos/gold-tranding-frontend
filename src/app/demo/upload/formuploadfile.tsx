"use client";
import { Converfiletobase64 } from '@/components/getbase64/Converfiletobase64';
import React, { useState } from 'react'

export default function Formuploadfile() { 
    // function getbase64(event:any) {
    //     const file = event.target.files[0]; 
    //     if (file) {
    //       const reader = new FileReader(); 
    //       reader.onload = function (e:any) {
    //         const base64Data = e.target.result;
    //         console.log(base64Data);
    //         // Do something with the base64 data
    //       }; 
    //       reader.readAsDataURL(file);
    //     }
    //   }
const [base64, setbase64] = useState('')
     
    return (
        <div>
            <p>base64: {base64}</p>
            <span>Uploadfile</span>
            <input type="file" name='profile' className='form-control' onChange={
                (e) => {
                    Converfiletobase64(e).then((result: any) => {
                        setbase64(result);
                    })
                }
            } />
        </div>
    )
}
