import { info } from "../Home";
import Icon from "../Icon";
import NavItem from "../NavItem";

import {
  faLinkedinIn,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#2e3267] pt-20 text-sm">
      <div className="w-4/5 mx-auto footer-container grid footer-grid  gap-20">
        <div className="footer-1">
          <a href="index.html" className="footer-logo">
            <h4 className=" mb-5">Dive Academy</h4>
          </a>
          <p className=" mb-8">{info}</p>
        </div>
        <div className="footer-2">
          <h4 className=" mb-5">Permalinks</h4>
          <ul className="permalinks">
            <NavItem name={"Accueil"} />
            <NavItem name={"Parcours"} />
            <NavItem name={"Nos Cours"} />
            <NavItem name={"Contactez nous"} />
          </ul>
        </div>

        <div className="footer-3">
          <h4 className=" mb-5">Privacy</h4>
          <ul className="privacy">
            <NavItem name={"Privacy Policy"} />
            <NavItem name={"Terms and Conditions"} />
            <NavItem name={"Refund Policy"} />
          </ul>
        </div>

        <div className="footer-4">
          <h4 className=" mb-5">Contact Us</h4>
          <div>
            <p>+216 12 555 555</p>
            <p className="mt-2">dive.academy@company.com</p>
          </div>
          <ul className="footer-socials flex gap-4 text-xl mt-8">
            <Icon icon={faFacebook} />
            <Icon icon={faInstagram} />
            <Icon icon={faTwitter} />
            <Icon icon={faLinkedinIn} />
          </ul>
        </div>
      </div>
      <div className="footer-copyright text-center mt-16 py-9 px-0 border-t border-[#424890]">
        <small>Copyright &copy; Dive Academy 2023</small>
      </div>
    </footer>
  );
};
export default Footer;
