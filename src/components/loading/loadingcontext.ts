import  { createContext } from 'react'
export const LoadingContext=createContext({
    loadings:false,
    setloadings:(e:boolean)=>{}
});