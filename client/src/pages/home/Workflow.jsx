import WorkflowCard from "../../components/common/WorkflowCard";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";



function Workflow() {
  return (
        <div className="h-screen bg-white/5 w-full flex justify-center items-center">
      <div className="w-270 ">
        <h3 className="text-3xl mb-8">Our workflow</h3>
        <p className="text-[18px] text-white/60 mb-6">
          We follow a structured process that keeps projects organized, on
          schedule, and stress-free for clients. We follow a structured process
          that keeps projects organized, on schedule, and stress-free for
          clients.
        </p>
        <div className="py-8 flex flex-wrap justify-start gap-6 mb-4">
          <WorkflowCard
            step={"Step 1"}
            heading={"Discovery & Planning"}
            para={
              "Understanding your goals, documenting requirements, and setting clear expectations."
            }
          />
          <WorkflowCard
            step={"Step 2-4"}
            heading={"Design & Development"}
            para={
              "Creating wireframes, building features, and implementing with clean, tested code."
            }
          />
          <WorkflowCard
            step={"Step 5-7"}
            heading={"Launch & Support"}
            para={
              "Testing thoroughly, deploying securely, and providing ongoing maintenance."
            }
          />
        </div>
         <Link to={"Work"}>
         <div className=" flex items-center text-white/60 hover:text-white/80 ">
          <p className="text-[18px] ">See detailed workflow</p>
          <FaArrowRight className=" ml-1 mt-1 text " />
        </div></Link>
      </div>
    </div>
  )
}

export default Workflow

