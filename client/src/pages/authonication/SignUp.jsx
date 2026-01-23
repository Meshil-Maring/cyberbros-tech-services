import { useForm } from "react-hook-form";
import ButtonWithIcon from "../../components/common/ButtonWithIcon";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const whitebtn =
    " flex justify-center items-center w-full py-2 text-center text-l  bg-white/90 text-black cursor-pointer  transform hover:scale-104 duration-100 ease-in-out mb-2";


  return (
    <div
      id="home"
      className=" text-white/90 h-screen w-full bg-black font-sens flex flex-col justify-center items-center"
    >
      <div className="w-120 flex flex-col justify-center items-center mt-24 bg-black border-white/40 border px-8 py-4">
        <h2 className="text-4xl font-medium leading-14 mb-8">Sign Up</h2>
        <form action="https://formspree.io/f/mqepbang" method="POST"className="w-full" >
          <div className="w-full flex flex-col gap-3 mb-6 ">
            <label htmlFor="name">Username</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Enter Your name"
              className={`p-3 bg-white/10 border border-white/20 
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
          </div>

          <div className="w-full flex flex-col gap-3 mb-6 ">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              className={`
                        p-3 bg-white/10 border outline-none transition-colors duration-200
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
            {errors.email && (
              <p className="text-red-300">{errors.email.message}</p>
            )}
          </div>

          <div className="w-full flex flex-col gap-3 mb-6 ">
            <label htmlFor="Password">Password</label>
           <input
              id="Password"
              name="Password"
              type="password"
              placeholder="password must contain minimum 6 chars, letters & numbers"
              className={`
                        p-3 bg-white/10 border outline-none transition-colors duration-200
                        ${errors.email ? "border-red-300 focus:border-red-300" : "border-white/20 focus:border-white/40"}
                     `}
              {...register("email", {
                required: "Password required",
                pattern: {
                  value: /^[A-Za-z\d]{6,}$/,
                  message: "Enter a valid password",
                },
              })}
            />
            {errors.detail && (
              <p className="text-red-300">{errors.detail.message}</p>
            )}
          </div>


          <div className="w-full flex flex-col gap-3 mb-6 ">
            <label htmlFor="ConfPassword">Confirm password</label>
           <input
              id="ConfPassword"
              name="ConfPassword"
              type="password"
              placeholder="Enter Confirm password"
              className={`
                        p-3 bg-white/10 border outline-none transition-colors duration-200
                        ${errors.email ? "border-red-300 focus:border-red-300" : "border-white/20 focus:border-white/40"}
                     `}
              {...register("email", {
                required: "Password required",
                pattern: {
                  value: /^[A-Za-z\d]{6,}$/,
                  message: "Enter a valid password",
                },
              })}
            />
            {errors.detail && (
              <p className="text-red-300">{errors.detail.message}</p>
            )}
          </div>

          <ButtonWithIcon
            id="contact-btn"
            title={"Sign Up"}
            btn={whitebtn}
          />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
