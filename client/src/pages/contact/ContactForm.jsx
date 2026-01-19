import { data } from "react-router-dom";
import ButtonWithIcon from "../../components/common/ButtonWithIcon";
import { useForm } from 'react-hook-form';

function ContactForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const whitebtn =
    " flex justify-center items-center w-full py-2 text-center text-l  bg-white/90 text-black";

     let submitAlert = (data) =>{
            console.log(data)
    }

  return (

    <div className="w-lg h-180 ">


      <form action="" onSubmit={handleSubmit(submitAlert)}>
        <div className="w-full flex flex-col gap-3 mb-8 ">
          <label htmlFor="name">Your Name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Enter Your name"
            className={`p-3 bg-white/10 border border-white/20 rounded
                      focus:outline-none
                      ${errors.name ? "ring-2 ring-red-300 border-transparent" : "focus:ring-2 focus:ring-white/30"}
                      `}

           {...register('name',{
            required:"Name should not be empty",
            pattern:{
              value:/^[A-Za-z]+( [A-Za-z]+)*$/,
              message: "Name should contain atleast three characters"}
           })}
          />

          {errors.name && (<p className="text-red-300">{errors.name.message}</p>)}
        </div>

        <div className="w-full flex flex-col gap-3 mb-8 ">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address"
             className={`p-3 bg-white/10 border border-white/20 rounded
                      focus:outline-none
                      ${errors.email ? "ring-2 ring-red-300 border-transparent" : "focus:ring-2 focus:ring-white/30 "}
                      `}
           {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
              message: "Enter a valid Gmail address",
              },
            })}
          />
          {errors.email && (<p className="text-red-300">{errors.email.message}</p>)}
        </div>

        <div className="w-full flex flex-col gap-3 mb-8 ">
          <label htmlFor="detail">Project Details</label>
          <textarea
            id="detail"
            name="detail"
            placeholder="Tell us about your project: What problem are you trying to solve? What's your timeline? Any specific requirements or constraints?"
            className={`
                    p-3 min-h-54 resize-none overflow-y-auto
                    rounded bg-white/10 border
                    outline-none focus:outline-none
                    transition-colors duration-200
                    [scrollbar-width:none]
                    [-ms-overflow-style:none]
                    [&::-webkit-scrollbar]:hidden
                    ${
                      errors.detail
                      ? "border-red-300 focus:border-red-300 focus:ring-0"
                      : "border-white/20 focus:border-white/40"
                    }
            `}
              {...register('detail',{
            required:"Project details required",
            minLength:{value:1, message:"Name should not be empty..."}
           })}
          ></textarea>
          {errors.detail && (<p className="text-red-300">{errors.detail.message}</p>)}
        </div>

        <ButtonWithIcon id="contact-btn" title={"Send Message"} btn={whitebtn} />
      </form>
    </div>
  );
}

export default ContactForm;
