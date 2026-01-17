import React from 'react'

function AboutSection4({title,items}) {
  return (
      <div className="w-full flex justify-center items-center">
      <div className="w-270 border-white/20 border-t py-12">
        <div className="w-[65%]">
          <h3 className="text-3xl mb-8">{title}</h3>

            
          <div className="w-full flex justify-between flex-wrap gap-5">
            {items.map((item, index) => (
              <div className="mb-4" key={index}>
                <p className="text-[14px] text-white/40"><span className="text-[18px] text-white/60">{item.heading}</span>.  {item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection4
