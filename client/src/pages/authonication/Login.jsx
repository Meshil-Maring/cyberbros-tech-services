import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ButtonWithIcon from "../../components/common/ButtonWithIcon";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const whitebtn =
    " flex justify-center items-center w-full py-2 text-center text-l  bg-white/90 text-black cursor-pointer  transform hover:scale-104 duration-100 ease-in-out mb-6";

  return (
    <div
      id="home"
      className=" text-white/90 h-screen w-full bg-black font-sens flex flex-col items-center justify-center"
    >
      <div className="w-120 flex flex-col justify-center items-center mt-24 bg-black border-white/40 border px-8 py-6">
        <h2 className="text-4xl font-medium leading-14 ">Login</h2>
        <Link to={"SignUp"}>
            <p className="text-white/60 mb-8 hover:text-white/80 ">Or Sign Up for an account</p>
          </Link>
        <form
          action="https://formspree.io/f/mpqprykk"
          method="POST"
          className="w-full"
        >
          <div className="w-full flex flex-col gap-3 mb-6 ">
            <label htmlFor="name">Username</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Enter username"
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
            <label htmlFor="Password">Password</label>
            <input
              id="Password"
              name="Password"
              type="password"
              placeholder="Enter password"
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

          <ButtonWithIcon id="contact-btn" title={"Login"} btn={whitebtn} />
          
        </form>
      </div>
    </div>
  );
}

export default Login;
