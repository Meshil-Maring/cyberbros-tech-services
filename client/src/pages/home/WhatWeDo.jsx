import ServiceCard from '../../components/common/ServiceCard' 
import { FaArrowRight } from "react-icons/fa6";


function WhatWeDo() {
  return (
   <div className="h-screen flex items-center">
      <div className="w-270">
        <h3 className="text-3xl mb-8">What we do</h3>
        <div className="py-8 justify-between flex flex-wrap gap-6">
          <ServiceCard
            heading={"Website Design & Development"}
            para1={
              "For businesses that need a professional web presence with custom functionality, responsive design, and seamless user experience."
            }
            para2={
              "Result: A website that represents your brand professionally and converts visitors into customers."
            }
          />
          <ServiceCard
            heading={"Backend & API Development"}
            para1={
              "For applications that require secure data handling, third-party integrations, and robust server-side logic."
            }
            para2={
              "Result: Reliable systems that handle your business operations without breaking."
            }
          />

          <ServiceCard
            heading={"Backend & API Development"}
            para1={
              "For applications that require secure data handling, third-party integrations, and robust server-side logic."
            }
            para2={
              "Result: Reliable systems that handle your business operations without breaking."
            }
          />

          <ServiceCard
            heading={"Maintenance & Support"}
            para1={
              "For businesses that need ongoing updates, bug fixes, performance optimization, and technical support after launch."
            }
            para2={
              "Result: Peace of mind knowing your website stays current, secure, and working properly."
            }
          />
        </div>
        <div className="h-8 flex items-center ">
          <p className="text-[18px] text-white/60">View all services</p>
          <FaArrowRight className=" text-white/60 ml-3 text-xl" />
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo

