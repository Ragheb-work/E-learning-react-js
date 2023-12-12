import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutStats = ({ icon, number, name }) => {
  return (
    <article className="achievement-card bg-[#2e3267] p-6 rounded-2xl text-center transition-all hover:bg[#424890] shadow-xl">
      <span className="achievement-icon bg-[#f75842] p-2 rounded-2xl inline-block mb-8 text-[2rem]">
        <FontAwesomeIcon icon={icon} />
      </span>
      <h3>{number}</h3>
      <p className=" mt-4">{name}</p>
    </article>
  );
};
export default AboutStats;
