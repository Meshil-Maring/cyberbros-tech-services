import { FaHeading } from "react-icons/fa6"

function RecentWorkCard({project,heading,problem,solution,result}) {
  return (
    <div className='w-full border bg-white/5 border-white/10 p-5 m-h-50 '>
      <p className='text-[16px] text-white/40 mb-4'>{project}</p>
       <h4 className='text-2xl mb-4 '>{heading}</h4>
       <p className='text-[16px] text-white/40 mb-4'>Problem: <span className="text-white/60">{problem}</span></p>
       <p className='text-[16px] text-white/40 mb-4'>Solution: <span className="text-white/60">{solution}</span></p>
       <p className='text-[16px] text-white/40 mb-4'>Result: <span className="text-white/60">{result}</span></p>
    </div>
  )
}

export default RecentWorkCard
