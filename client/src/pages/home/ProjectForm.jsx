import { useForm } from "react-hook-form";
import { useState } from "react";
import ButtonWithIcon from "../../components/common/ButtonWithIcon";

function ProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedType, setSelectedType] = useState("");

  const projectTypes = [
    "Business Website",
    "Portfolio",
    "E-commerce",
    "Landing Page",
    "Redesign",
    "Not Sure",
  ];

  const whitebtn =
    " flex justify-center items-center w-full py-2 text-center text-l  bg-white/90 text-black cursor-pointer  transform hover:scale-104 duration-100 ease-in-out";

  return (
    <div className="w-270 flex justify-center items-center my-16 ">
      <div>
        {/* Header */}
        <div>
          <h2 className="text-4xl font-medium leading-14">
            Build Your Website
          </h2>
          <p className="text-white/60 text-xl my-8 ">
            Tell us a bit about your project and we’ll get back within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form>
          {/* Name & Email */}
          <div className="w-full flex flex-col gap-3 mb-8 ">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Enter Your name"
              className={`p-3 bg-white/10 border border-white/20 rounded
                      focus:outline-none
                      ${errors.name ? "ring-2 ring-red-300 border-transparent" : "focus:ring-2 focus:ring-white/30"}
                      `}
              {...register("name", {
                required: "Name should not be empty",
                pattern: {
                  value: /^[A-Za-z]+( [A-Za-z]+)*$/,
                  message: "Name should contain atleast three characters",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-300">{errors.name.message}</p>
            )}

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              className={`
    p-3 bg-white/10 rounded border outline-none transition-colors duration-200
    ${errors.email ? "border-red-300 focus:border-red-300" : "border-white/20 focus:border-white/40"}
  `}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message: "Enter a valid Gmail address",
                },
              })}
            />
          </div>

          {/* Company & Phone */}
          <div className="w-full flex flex-col gap-3 mb-8">
            <label htmlFor="organization">Company / Brand</label>
            <input
              type="text"
              placeholder="Company / Brand (optional)"
              className={`
    p-3 bg-white/10 rounded border outline-none transition-colors duration-200
    ${errors.email ? "border-red-300 focus:border-red-300" : "border-white/20 focus:border-white/40"}
  `}
            />
            <label htmlFor="number">Phone / WhatsApp</label>
            <input
              id="number"
              type="number"
              placeholder="Phone / WhatsApp (optional)"
              className={`
    p-3 bg-white/10 rounded border outline-none transition-colors duration-200
    ${errors.email ? "border-red-300 focus:border-red-300" : "border-white/20 focus:border-white/40"}
  `}
            />
          </div>

          <div className="w-160">
            <h3 className="mb-2">Project Type</h3>
            <div className="flex flex-wrap gap-x-16 gap-y-3">
              {projectTypes.map((type) => (
                <label key={type} className={`w-[40%] shrink-0 cursor-pointer rounded-lg border p-3 transition
              ${
                selectedType === type
                  ? "bg-white text-black border-white"
                  : "bg-black text-white border-white"
              }
            `}>
                  <input type="radio"
              name="projectType"
              value={type}
              checked={selectedType === type}
              onChange={() => setSelectedType(type)}
              className="hidden" />

                  <span className="ml-2">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col mt-8">
            <label htmlFor="description">Description</label>
            <textarea
              rows="4"
              placeholder="Tell us about your website (goals, ideas, features)"
               className={`
                    p-3 min-h-54 resize-none overflow-y-auto
                    rounded bg-white/10 border mt-2
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

            />
          </div>

          {/* Budget & Timeline */}
          <div className="my-8 flex justify-between gap-5 ">
            <select className="input bg-neutral-500">
              <option>Estimated Budget</option>
              <option>&lt; $500</option>
              <option>$500 – $1,500</option>
              <option>$1,500 – $5,000</option>
              <option>$5,000+</option>
              <option>Not sure</option>
            </select>

            <select className="input">
              <option>Timeline</option>
              <option>ASAP</option>
              <option>2to4 weeks</option>
              <option>1to2 months</option>
              <option>Flexible</option>
            </select>
          </div>

          {/* Submit */}
          <ButtonWithIcon title={"Start Project"} btn={whitebtn}/>
        </form>
      </div>
    </div>
  );
}

export default ProjectForm;
