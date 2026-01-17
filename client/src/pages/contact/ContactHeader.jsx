
function ContactHeader({title,intro}) {
  return (
     <div className="w-full  text-white flex justify-center items-center">
      <div className="mt-40 mb-5 flex items-center text-white/90 w-270">
        <div className="w-[65%]">
          <div className="mb-12">
            <h2 className="text-4xl font-medium leading-14 mb-4">
              {title}
            </h2>

            <p className="text-white/60 text-xl mb-8">{intro}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactHeader
