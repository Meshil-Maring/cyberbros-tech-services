import data from "../../../data/contact.json"
import ContactSection1 from './ContactSection1'
import { IoTimeOutline } from "react-icons/io5";

import { LuMessageSquare } from "react-icons/lu";

import { FiMail } from "react-icons/fi";
import ContactSection2 from "./ContactSection2";
import ContactSection3 from "./ContactSection3";
import ContactSection4 from "./ContactSection4";


function ContactSection() {
  return (
    <div className='w-lg mb-12'>


     <ContactSection1  img={<IoTimeOutline className="text-3xl text-white/50" />} title={data.contact.response_time.title} content={data.contact.response_time.content}/>

     <ContactSection2  img={<LuMessageSquare className="text-3xl" />} title={data.contact.what_happens_next.title} intro={data.contact.what_happens_next.intro} steps={data.contact.what_happens_next.steps}/>

     <ContactSection3 img={<FiMail className="text-3xl" />} title={data.contact.what_to_include.title} intro={data.contact.what_to_include.intro} items={data.contact.what_to_include.items}/>
    
    <ContactSection4   title={data.contact.response_time.title} content={data.contact.no_pressure.content}/>
    </div>
  )
}

export default ContactSection
