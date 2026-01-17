import React from 'react'

function AboutSection5({title,para}) {
  return (
     <div className="w-full flex justify-center items-center ">
      <div className="w-270 border-white/20 border-t py-12 ">
        <div className="w-[65%]">
          <h3 className="text-3xl mb-8">{title}</h3>
          <div className="w-full flex justify-between flex-wrap gap-5 ">
            {para.map((item, index) => (
              <p className="text-[14px] text-white/40" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection5
