import { IoIosCheckmarkCircleOutline } from "react-icons/io";
function ProcessCard({title,detail}) {
  return (
    
    <div className="w-full flex ">
      <div className="py-1.5 pr-2">
        <IoIosCheckmarkCircleOutline className={"text-2xl text-white/40 shrink-0"} />
      </div>
      <div className="" >
        <h4 className="text-2xl mb-4 ">{title}</h4>
        <p className="text-[14px] text-white/40">
         {detail}
        </p>
      </div>
    </div>
  );
}

export default ProcessCard;
