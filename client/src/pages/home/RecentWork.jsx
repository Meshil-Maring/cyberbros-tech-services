import { FaArrowRight } from "react-icons/fa6";
import RecentWorkCard from "../../components/common/RecentWorkCard";

export default function RecentWork() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-270 ">
        <h3 className="text-3xl mb-8">Recent Work</h3>
        <div className='py-8 flex flex-wrap justify-start gap-6 mb-4'>
          <RecentWorkCard
            project={" E-commerce Platform"}
            heading={"Custom Shopify Integration for Growing Retailer"}
            problem={
              " Manual inventory management across multiple sales channels was creating errors and wasting hours of staff time daily."
            }
            solution={
              " Built a custom integration connecting Shopify with their warehouse system, automating inventory updates and order processing."
            }
            result={
              " Reduced processing time by 80%, eliminated stock errors, and freed up 15 hours of staff time per week."
            }
          />

          <RecentWorkCard
            project={"SaaS Application"}
            heading={"Dashboard Redesign for Analytics Platform"}
            problem={
              " Users found the existing dashboard confusing and struggled to find the data they needed, leading to support tickets and churn."
            }
            solution={
              " Redesigned information architecture and rebuilt the frontend with improved data visualization and intuitive navigation."
            }
            result={
              " Support tickets decreased by 60%, user satisfaction scores increased 35%, and trial-to-paid conversion improved by 22%."
            }
          />
        </div>
        
      </div>
    </div>
  );
}
