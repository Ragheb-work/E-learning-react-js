import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const TeamMember = ({ img, name, position }) => {
  return (
    <article className="team-member bg-[#424890] p-8 border border-transparent transition-all relative overflow-hidden hover:bg-transparent hover:border-[#6c63ff]">
      <div className="team-member-image  ">
        <img src={img} alt="" className="saturate-0 rounded-full" />
      </div>
      <div className="team-member-info text-center mt-6">
        <h4>{name}</h4>
        <p className="text-[rgba(255, 255, 255, 0.7)]">{position}</p>
      </div>
      <div className="team-member-socials absolute top-1/2 -translate-y-1/2 -right-full flex flex-col bg-[#6c63ff]  rounded-l-2xl shadow-xl transition-all">
        <TeamIcon icon={faInstagram} />
        <TeamIcon icon={faTwitter} />
        <TeamIcon icon={faLinkedinIn} />
      </div>
    </article>
  );
};
export default TeamMember;

export const TeamIcon = ({ icon }) => {
  return (
    <a href="#" className="p-4">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};
