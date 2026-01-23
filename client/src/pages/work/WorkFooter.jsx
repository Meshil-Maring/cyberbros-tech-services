import React from 'react'

function WorkFooter({title,description}) {
  return (
    <div className="w-full  text-white flex justify-center items-center">
      <div className="mt-16 mb-30 pt-8 flex items-center text-white/90 w-270 border-white/20 border-t">
        <div className="w-[65%]">
          <h2 className="text-2xl font-medium leading-14">
            {title}
          </h2>

          <p className="text-white/60 text-xl my-4">
          {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WorkFooter
