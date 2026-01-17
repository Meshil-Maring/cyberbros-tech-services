import React from "react";

function ContactSection2({img, title, intro, steps}) {
  return (
    <div className="w-full border border-white/20 mb-10 px-6 py-8 flex gap-4">
      <div className="pt-1 text-white/40">{img}</div>
      <div>
        <h3 className="text-2xl text-white/90 mb-4">{title}</h3>
        <p className="text-[14px] text-white/60 mb-4">{intro}</p>
        {steps.map((items,index)=>(
          <p className="text-[14px] text-white/60 mb-2" key={index}>{index+1}.&nbsp;  {items}</p>
        ))}

      </div>
    </div>
  );
}

export default ContactSection2;
