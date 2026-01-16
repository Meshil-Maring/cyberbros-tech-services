
function WorkHeader({WorkTitle,WorkDescription}) {
  return (
   <div className="w-full  text-white flex justify-center items-center">
      <div className="mt-40 mb-5 flex items-center text-white/90 w-270">
        <div className="w-[65%]">
          <h2 className="text-4xl font-medium leading-14">
            {WorkTitle}
          </h2>

          <p className="text-white/60 text-xl my-8">
            {WorkDescription}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WorkHeader
