import ProcessCard from "../../components/common/ProcessCard"


function ProcessSection({phase,headtitle,goal,steps}) {


  const stp =steps
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="w-270 px-12 border-white/20 border-l my-8 ">
      <p className="text-white/40 mb-4">Phase-{phase}</p>
        <h3 className="text-3xl mb-4">{headtitle}</h3>
        <p className="text-white/60 mb-6">{goal}</p>
        <div className="w-full flex flex-wrap gap-5 ">
          
          {steps.map((item,index) => (
            <ProcessCard 
            key={index}
            title={item.title}
            detail={item.details}

            />
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default ProcessSection
