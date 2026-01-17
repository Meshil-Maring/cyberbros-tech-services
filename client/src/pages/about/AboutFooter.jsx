import React from 'react'

function AboutFooter({title,content}) {
  return (
    <div className="w-full flex justify-center items-center  mb-26">
      <div className="w-270  py-12  ">
        <div className="w-[65%]">
          <h3 className="text-3xl mb-8">{title}</h3>
          <p className="text-[14px] text-white/40" >{content}</p>
          
        </div>
      </div>
    </div>
  )
}

export default AboutFooter
