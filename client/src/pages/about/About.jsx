import Navbar from "../../components/layout/Navbar";
import AboutHeader from "./AboutHeader";
import about_data from "../../data/about.json";
import AboutSection1 from "./AboutSection1";
import AboutSection2 from "./AboutSection2";
import AboutSection3 from "./AboutSection3";
import AboutSection4 from "./AboutSection4";
import AboutSection5 from "./AboutSection5";
import AboutFooter from "./AboutFooter";

const About = () => {
  return (
    <div
      id="service"
      className="text-white/90 bg-black font-sens flex flex-col items-center"
    >

      <AboutHeader
        aboutTitle={about_data.about.title}
        aboutContent={about_data.about.content}
      />

      <AboutSection1
        title={about_data.approach_to_work.title}
        paragraph={about_data.approach_to_work.paragraphs}
      />

      <AboutSection2
        title={about_data.values.title}
        items={about_data.values.items}
      />

      <AboutSection3
      title={about_data.communication.title}
      points={about_data.communication.points}
      />

       <AboutSection4
        title={about_data.client_experience.title}
        items={about_data.client_experience.items}
      />

      <AboutSection5
      title={about_data.projects.title}
      para={about_data.projects.paragraphs}
      />

      <AboutFooter title={about_data.call_to_action.title}
      content={about_data.call_to_action.content} />
    </div>
  );
};

export default About;

