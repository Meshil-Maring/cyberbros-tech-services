import Navbar from "../../components/layout/Navbar";
import ServiceFooter from "./ServiceFooter";
import ServiceHeading from "./ServiceHeading";
import ServiceSection from "./ServiceSection";
import service_data from "./service.json";

function Service() {
  console.log(service_data.services[0].name);

  return (
    <div
      id="service"
      className=" text-white/90 bg-black font-sens flex flex-col items-center"
    >
      <Navbar />
      <ServiceHeading />

      {service_data.services.map((item, index) => (
        <ServiceSection
          key={index}
          service={item.name}
          ans1={item.what_it_is}
          ans2={item.who_its_for}
          ans3={item.problem_it_solves}
          ans4={item.what_you_get}
        />
      ))}

      <ServiceFooter />
    </div>
  );
}

export default Service;
