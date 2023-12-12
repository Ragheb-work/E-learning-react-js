import { Link } from "react-router-dom";

const NavItem = ({ name, href }) => {
  return (
    <li>
      <Link to={href} className="transition-all hover:text-[#424890]">
        {name}
      </Link>
    </li>
  );
};
export default NavItem;
