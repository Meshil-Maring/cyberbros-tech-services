import React from 'react'

function ServiceCard({heading,para1,para2}) {
  return (
    <div className='w-131 border bg-white/5 border-white/10 p-5 m-h-50 '>
      <h4 className='text-2xl mb-4 '>{heading}</h4>
      <p className='text-[16px] text-white/60 mb-4'>{para1}</p>
      <p className='text-[14px] text-white/40'>{para2}</p>
    </div>
  )
}

export default ServiceCard
