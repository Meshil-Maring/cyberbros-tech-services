import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ButtonWithIcon from "../../components/common/ButtonWithIcon";

function HeroSection() {
  const whitebtn =" flex justify-center items-center w-45 py-2 text-center cursor-pointer border-2 border-white/10 text-l  bg-white/90 text-black transform hover:scale-104 duration-100 ease-in-out";

  const blackbtn =" flex text-white/90 justify-center items-center w-45 py-2 text-center cursor-pointer border-2  border-white/50 text-l transform hover:scale-104 duration-100 ease-in-out";
  return (
    <div className="h-screen w-full  text-white flex justify-center items-center">
      <div className="h-screen flex items-center text-white/90 w-270">
        <div className="w-[65%]">
          <h2 className="text-4xl font-medium leading-14">
            We build reliable, high-performing websites that help bussiness grow
            with confidence.
          </h2>

          <p className="text-white/60 text-xl my-8 ">
            Through Structured planning, clear communication , and attention to
            technical detail. We deliver web solutions that work seamlessly and
            scale with your bussiness needs.
          </p>

          <div className=" flex gap-4 mt-12">
            <ButtonWithIcon
              title={"Start a Project"}
              icon={<FaArrowRight className=" ml-1 mt-1 text " />}
              btn={whitebtn}
            />
            <Link to={"Process"}><ButtonWithIcon title={"View my Process"} btn={blackbtn} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
