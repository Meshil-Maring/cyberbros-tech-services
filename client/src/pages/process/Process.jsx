import Navbar from "../../components/layout/Navbar";
import ProcessHeader from "./ProcessHeader";
import ProcessSection from "./ProcessSection";
import process_data from "../../data/process.json";
import ProcessFooter from "./ProcessFooter";

function Process() {
  return (
    <div
      id="service"
      className=" text-white/90 bg-black font-sens flex flex-col items-center"
    >

      <ProcessHeader />

      {process_data.phases.map((item, index) => (
        <ProcessSection
          key={index}
          phase={item.phase}
          headtitle={item.title}
          goal={item.goal}
          steps={item.steps}
        />
      ))}

      <ProcessFooter/>
    </div>
  );
}

export default Process;
