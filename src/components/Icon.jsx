import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon }) => {
  return (
    <li>
      <a
        href="#"
        className="  transition-all inline-block mx-4 my-0 hover:-translate-y-1"
      >
        <FontAwesomeIcon icon={icon} size="2x" />
      </a>
    </li>
  );
};
export default Icon;
