import React from 'react'

function WorkflowCard({step,heading,para}) {
  return (
    <div className='w-80'>
      <p className='mb-4 text-white/50'>{step}</p>
      <h4 className='text-2xl mb-4 '>{heading}</h4>
      <p className='text-[14px] text-white/40'>{para}</p>
    </div>
  )
}

export default WorkflowCard
