import contact_data from "../../data/contact.json";
import Navbar from "../../components/layout/Navbar";
import ContactForm from "./ContactForm";
import ContactSection from "./ContactSections/ContactSection";
import ContactHeader from "./ContactHeader";

function Contact() {
  return (
    <div
      id="service"
      className="text-white/90 bg-black font-sens flex flex-col items-center"
    >
      <ContactHeader title={contact_data.contact.title} intro={contact_data.contact.intro}/>

      <div className="w-full flex justify-center items-center my-8">
        <div className="w-270  flex justify-between flex-wrap">
          <ContactForm/>
          <ContactSection/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
