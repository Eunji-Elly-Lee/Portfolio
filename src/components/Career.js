import { GrDocumentText } from "react-icons/gr";
import { translations } from "../translations";
import { experiences } from "../data";
import Experience from "./Experience"
import './Career.css';

function Career({ useKorean }) {
  const getTrans = (key) => translations.career[key][useKorean ? "ko" : "en"];

  return (
    <section id="career">
      <div>
        <h2>
          <GrDocumentText className="mb-1 me-2" />
          My Career
        </h2>
        <p className="section-description mx-auto mb-4 mb-md-5">
          {getTrans("description")}
        </p>
      </div>
      {experiences.map((experience) => (
        <Experience
          key={experience.id}
          company={experience.company}
          role={experience.role}
          location={experience.location}
          period={experience.period}
          stack={experience.stack}
          description={getTrans(experience.id)}
        />
      ))}
    </section>
  );
}

export default Career;
