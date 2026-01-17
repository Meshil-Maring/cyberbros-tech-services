import React from "react";
import WorkCard from "../../components/common/WorkCard";

function WorkSection({ category, title,problem,approach,solution,outcome }) {
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="w-270 px-12 border-white/20 border pt-8 my-8 ">
        <p className="text-white/40 mb-4">{category}</p>
        <h3 className="text-3xl mb-4">{title}</h3>
        <p className="text-white/60 mb-6"></p>
        <div className="w-full p-5 m-h-50 ">
          <h4 className="text-2xl mb-4 ">Problem</h4>
          <p className="text-[16px] text-white/60 mb-4">{problem}</p>
          <h4 className="text-2xl mb-4 ">Approach</h4>
          <p className="text-[16px] text-white/60 mb-4">{approach}</p>
          <h4 className="text-2xl mb-4 ">Solution</h4>
          <p className="text-[16px] text-white/60 mb-4">{solution}</p>
          <hr className="border-white/20 mb-4"/>
          <h4 className="text-2xl mb-4 ">Outcome</h4>
          <p className="text-[16px] text-white/60 mb-4">{outcome}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkSection;
