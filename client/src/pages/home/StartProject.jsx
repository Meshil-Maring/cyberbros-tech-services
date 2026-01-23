import ButtonWithIcon from "../../components/common/ButtonWithIcon";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function StartProject() {
  const whitebtn = " flex justify-center items-center w-45 py-2 text-center text-l  bg-white/90 text-black cursor-pointer transform hover:scale-104 duration-100 ease-in-out"
  return (
    <div className="h-screen w-full bg-white/5 flex justify-center items-center">
      <div className="w-270 ">
        <h3 className="text-3xl mb-8">Ready to start your project? </h3>
        <p className='text-[16px] text-white/60 mb-8 w-[65%]'>
          I work with a limited number of clients at a time to ensure each
          project receives proper attention. Clear pricing, honest timelines,
          and straightforward communication.
        </p>
        <Link to="Contact"><ButtonWithIcon title={"Get in touch"} icon={<FaArrowRight className=" ml-1 mt-1 text " />} btn={whitebtn}/></Link>
      </div>
    </div>
  );
}

export default StartProject;
