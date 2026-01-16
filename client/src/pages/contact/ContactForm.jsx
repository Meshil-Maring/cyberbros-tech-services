import ButtonWithIcon from "../../components/common/ButtonWithIcon";

function ContactForm() {
  const whitebtn =
    " flex justify-center items-center w-full py-2 text-center text-l  bg-white/90 text-black";
  return (
    <div className="w-lg h-180 ">
      <form action="">
        <div className="w-full flex flex-col gap-3 mb-8 ">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Your name"
            className="p-3 border border-white/20 bg-white/10"
          />
        </div>

        <div className="w-full flex flex-col gap-3 mb-8 ">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter email address"
            className="p-3 border border-white/20 bg-white/10"
          />
        </div>

        <div className="w-full flex flex-col gap-3 mb-8 ">
          <label htmlFor="detail">Project Details</label>
          <textarea
            id="detail"
            placeholder="Tell us about your project: What problem are you trying to solve? What's your timeline? Any specific requirements or constraints?"
            className="
                p-3 min-h-54 resize-none overflow-y-auto
    border border-white/20 bg-white/10
    [scrollbar-width:none]
    [-ms-overflow-style:none]
    [&::-webkit-scrollbar]:hidden
  "
          ></textarea>
        </div>

        <ButtonWithIcon title={"Send Message"} btn={whitebtn} />
      </form>
    </div>
  );
}

export default ContactForm;
