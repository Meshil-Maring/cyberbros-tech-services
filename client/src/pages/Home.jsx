import "react";
import Navbar from "../components/layout/Navbar";
import ButtonWithIcon from "../components/common/ButtonWithIcon";

function Home() {

  return (
    <div
      id="home"
      className="bg-black/90 font-sens h-screen w-screen border-2 "
    >
      <Navbar />

      <div className="mt-40 text-white px-10 w-[80%]">
        <h2 className="text-6xl font-medium leading-20">
          We build reliable, high-performing websites that help bussiness grow
          with confidence.
        </h2>

        <p className="text-white/60 text-2xl my-8">
          Through Structured planning, clear communication , and attention to
          technical detail. We deliver web solutions that work seamlessly and scale with your bussiness needs.
        </p>

        <div className=" flex gap-4 mt-12">
            <ButtonWithIcon title={"Start a Project"}/>
            <ButtonWithIcon title={"View my Process"}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
