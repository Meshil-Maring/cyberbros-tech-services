import Navbar from "../../components/layout/Navbar";
import work_data from "../../data/work.json";
import ProcessHeader from "../process/ProcessHeader";
import WorkFooter from "./WorkFooter";
import WorkHeader from "./WorkHeader";
import WorkSection from "./Worksection";

function Work() {
  return (
    <div
      id="service"
      className=" text-white/90 bg-black font-sens flex flex-col items-center"
    >
    
      <WorkHeader WorkTitle={"Work"} WorkDescription={work_data.work.intro} />

      {work_data.work.case_studies.map((item, index) => (
        <WorkSection
        key={index}
          category={item.category}
          title={item.title}
          problem={item.problem}
          approach={item.approach}
          solution={item.solution}
          outcome={item.outcome}
        />
      ))}

      <WorkFooter title={work_data.work.cta.title} description={work_data.work.cta.description}/>
    </div>
  );
}

export default Work;
