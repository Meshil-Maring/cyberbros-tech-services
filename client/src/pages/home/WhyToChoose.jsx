import SkillsCard from '../../components/common/SkillsCard'
import { IoCodeSlash } from "react-icons/io5";
import { FiShield } from "react-icons/fi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";




function WhyToChoose() {
    const iconStyle = "text-4xl mb-2";
  return (
    <div className="w-full h-screen bg-white/5 flex justify-center items-center">
      <div className="w-270">
        <h3 className="text-3xl mb-8">Why clients choose to work with us</h3>
        <div className="flex justify-between flex-wrap gap-6">
          <SkillsCard
            icon={<IoIosCheckmarkCircleOutline className={iconStyle} />}
            heading={"Clear Communicaton"}
            para={
              "We explain technical decisions in plain language. you'll always understand whats happening, why it matters, and what comes next. "
            }
          />
          <SkillsCard
            icon={<IoCodeSlash className={iconStyle} />}
            heading={"Structured Workflow"}
            para={
              "From requirements to deployment, we follow a proven process. This removes the confusion and ensures nothing falls through the cracks."
            }
          />
          <SkillsCard
            icon={<FiShield className={iconStyle} />}
            heading={"Long-term thinking"}
            para={
              "We built for maintainability and growth. Your website won't become a problem six months later-it will continue serving your business"
            }
          />
        </div>
      </div>
    </div>
  );

}

export default WhyToChoose

