import { FaArrowRight } from "react-icons/fa";
import ButtonWithIcon from "../../components/common/ButtonWithIcon";

function ServiceFooter() {
    const whitebtn =" flex justify-center items-center px-4 py-2 text-center border-2 border-white/10 text-l  bg-white/90 text-black";
  return (
     <div className="w-full  text-white flex justify-center items-center">
      <div className="mt-4 mb-30 pt-12 flex items-center text-white/90 w-270 border-white/20 border-t">
        <div className="w-[55%]">
          <h2 className="text-3xl font-medium leading-14">Not sure which service you need?</h2>

          <p className="text-white/60 text-xl my-8">
            Let's discuss your project and determine the best approach. I'll provide honest recommendations based on your specific situation and goals.
          </p>

          <ButtonWithIcon
              title={"Schedule a Conversation"}
              icon={<FaArrowRight className=" ml-2" />}
              btn={whitebtn}
            />
        </div>
      </div>
    </div>
  );
}

export default ServiceFooter
