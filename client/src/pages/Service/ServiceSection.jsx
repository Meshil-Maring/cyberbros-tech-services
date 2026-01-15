
import ServiceQuery from '../../components/common/ServiceQuery'

function ServiceSection({service,ans1,ans2,ans3,ans4}) {
  return (
  <div className="w-full flex justify-center items-center ">
      <div className="w-270 border-white/20 border-t py-12 ">
        <h3 className="text-3xl mb-8">{service}</h3>
        <div className='w-full flex justify-between flex-wrap gap-5 '>
          <ServiceQuery query={" What it is"} answer={ans1}/>
          <ServiceQuery query={"Who it's for"} answer={ans2}/>
          <ServiceQuery query={"What problem it solves"} answer={ans3}/>
          <ServiceQuery query={"What you get"} answer={ans4}/>
          
        </div>
      </div>
    </div>
  )
}


export default ServiceSection

