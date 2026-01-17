function ContactSection4({img,title,content}) {
  return (
     <div className='w-full border border-white/20 mb-10 px-6 py-8 flex gap-4'>
      <div className="pt-1">{img}</div>
      <div>
        <h3 className="text-2xl text-white/90 mb-4">{title}</h3>
        <p className="text-[14px] text-white/60">{content}</p>
      </div>
    </div>
  )
}

export default ContactSection4
