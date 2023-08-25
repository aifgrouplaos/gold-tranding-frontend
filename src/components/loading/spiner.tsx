"use client"
import React, { useContext } from 'react'
import { LoadingContext } from './loadingcontext';

export default function Spiner() {
    const isloading=useContext(LoadingContext);
    const checking =async(status:boolean)=>{
        isloading.setloadings(status)  
    }
    return checking;
}
