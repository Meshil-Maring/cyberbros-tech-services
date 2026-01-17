import React from 'react'

function SkillsCard({icon,heading,para}) {
  return (
    <div className='w-72'>
      <div className='text-white/50 '>{icon}</div>
      <h4 className='text-2xl mb-4 '>{heading}</h4>
      <p className='text-[16px] text-white/60'>{para}</p>

    </div>
  )
}

export default SkillsCard
