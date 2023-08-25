import Link from 'next/link'
import React from 'react'

type Props = {
    icon:any,
    title:string,
    link:string,
}

export default function Boxiconitem({icon, title,link}: Props) {
  return (
    <Link href={link?link:'#'}>
        <div className="select-none cursor-pointer font-bold border border-solid text-dark bg-gray hover:bg-gray-light rounded shadow-sm w-full py-4 px-4 flex items-center gap-3 text-xl">
          {icon}
          <span>{title}</span>
        </div>
      </Link>
  )
}