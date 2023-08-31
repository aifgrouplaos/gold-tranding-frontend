import React from 'react'

export default function page() {
  return (
    <div className='grid grid-cols-12 gap-2'>
      <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-8 ">
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 md:col-span-6 bg-slate-400">
            Logo
          </div>
          <div className="col-span-12 md:col-span-6 bg-sky-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.  
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-md-6 lg:col-span-6 xl:col-span-4 px-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officiis qui ipsum provident rerum consequatur minima animi odio, aliquid, perspiciatis amet itaque blanditiis. Neque sapiente ducimus laudantium ipsum placeat dolore.
      </div>

    </div>
  )
}
