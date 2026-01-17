function ContactSection3({img,title,intro,items}) {
  return (
    <div className="w-full border border-white/20 mb-10 px-6 py-8 flex gap-4">
      <div className="pt-1 text-white/40">{img}</div>
      <div>
        <h3 className="text-2xl text-white/90 mb-4">{title}</h3>
        <p className="text-[14px] text-white/60 mb-4">{intro}</p>

        {
          items.map((item,index)=>(
            <p className="text-[14px] text-white/60 mb-2" key={index}>•&nbsp;&nbsp;{item}</p>
          ))
        }

      </div>
    </div>
  )
}

export default ContactSection3
