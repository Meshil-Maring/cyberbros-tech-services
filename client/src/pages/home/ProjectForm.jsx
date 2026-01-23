import { useForm } from "react-hook-form";
import ButtonWithIcon from "../../components/common/ButtonWithIcon";

function ProjectForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const selectedType = watch("projectType");

  const projectTypes = [
    "Business Website",
    "Portfolio",
    "E-commerce",
    "Landing Page",
    "Redesign",
    "Others",
  ];

  const whitebtn =
    "flex justify-center items-center w-full py-2 text-center text-l bg-white/90 text-black cursor-pointer transform hover:scale-104 duration-100 ease-in-out";

  const onSubmit = async (data) => {
    try {
      await fetch("https://formspree.io/f/mbdgokpk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      alert("Thanks! We’ll get back to you within 24 hours 🚀");
      reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
       <div
      id="home"
      className=" text-white/90 w-full bg-black font-sens flex flex-col items-center"
    >
      
   
    <div className="w-270 flex justify-center items-center my-32 bg-black">
      <div>
        {/* Header */}
        <div>
          <h2 className="text-4xl font-medium leading-14">
            Build Your Website
          </h2>
          <p className="text-white/60 text-xl my-8">
            Tell us a bit about your project and we’ll get back within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name & Email */}
          <div className="w-full flex flex-col gap-3 mb-8">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className={`p-3 bg-white/10 border border-white/20 focus:outline-none
                ${
                  errors.name
                    ? "ring-2 ring-red-300 border-transparent"
                    : "focus:ring-2 focus:ring-white/30"
                }`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-300">{errors.name.message}</p>
            )}

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email address"
              className={`p-3 bg-white/10 border outline-none transition-colors duration-200
                ${
                  errors.email
                    ? "border-red-300"
                    : "border-white/20 focus:border-white/40"
                }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-300">{errors.email.message}</p>
            )}
          </div>

          {/* Company & Phone */}

          <div className="w-full flex flex-col gap-3 mb-8">
            <label>Company / Brand</label>
            <input
              type="text"
              placeholder="Company / Brand (optional)"
              className="p-3 bg-white/10 border border-white/20"
              {...register("Company")}
            />

            <label>Phone / WhatsApp</label>
            <input
              type="tel"
              placeholder="Phone / WhatsApp (optional)"
              className="p-3 bg-white/10 border border-white/20"
              {...register("Phone", {
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be exactly 10 digits",
                },
              })}
            />
            {errors.Phone && (
              <p className="text-red-300">{errors.Phone.message}</p>
            )}
          </div>

          {/* Project Type */}
          <div className="w-160">
            <h3 className="mb-2">Project Type</h3>
            <div className="flex flex-wrap gap-x-16 gap-y-3">
              {projectTypes.map((type) => (
                <label
                  key={type}
                  className={`w-[40%] shrink-0 cursor-pointer border p-3 transition
                    ${
                      selectedType === type
                        ? "bg-white/80 text-black border-white/20"
                        : "bg-black text-white/60 border-white/20 transform hover:scale-105"
                    }`}
                >
                  <input
                    type="radio"
                    value={type}
                    className="hidden"
                    {...register("projectType", {
                      required: "Select a project type",
                    })}
                  />
                  <span className="ml-2">{type}</span>
                </label>
              ))}
            </div>
            {errors.projectType && (
              <p className="text-red-300 mt-2">{errors.projectType.message}</p>
            )}
          </div>

          {/* Description */}
          <div className="flex flex-col mt-8">
            <label>Description</label>
            <textarea
              rows="4"
              placeholder="Tell us about your website (goals, ideas, features)"
              className={`p-3 min-h-54 resize-none bg-white/10 border mt-2
                ${
                  errors.description
                    ? "border-red-300"
                    : "border-white/20 focus:border-white/40"
                }`}
              {...register("description", {
                required: "Project description is required",
              })}
            />
            {errors.description && (
              <p className="text-red-300">{errors.description.message}</p>
            )}
          </div>

          {/* Budget & Timeline */}
          <div className="my-8 flex justify-between gap-5">
            <select
              className="input bg-black text-white/60"
              {...register("budget")}
            >
              <option value="">Estimated Budget</option>
              <option>&lt; $500</option>
              <option>$500 – $1,500</option>
              <option>$1,500 – $5,000</option>
              <option>$5,000+</option>
              <option>Not sure</option>
            </select>

            <select
              className="input bg-black text-white/60"
              {...register("timeline")}
            >
              <option value="">Timeline</option>
              <option>ASAP</option>
              <option>2–4 weeks</option>
              <option>1–2 months</option>
              <option>Flexible</option>
            </select>
          </div>

          {/* Submit */}
          <ButtonWithIcon title="Start Project" btn={whitebtn} />
        </form>
      </div>
    </div>
     </div>
  );
}

export default ProjectForm;
