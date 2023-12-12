import contact from "../../assets/images/contact.svg";
import Icon from "../Icon";
import {
  faLinkedinIn,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <section className="contact">
      <div className="w-4/5 mx-auto bg-[#2e3267] p-16 grid gap-16 h-[30rem] my-28 rounded-2xl categories-container">
        <aside className="contact-aside bg-[#6c63ff] p-12 rounded-2xl relative bottom-40">
          <div className="aside-image w-48 mb-8">
            <img src={contact} alt="" />
          </div>
          <h2 className="text-left mb-4">Contactez Nous</h2>
          <p className=" text-sm mb-8">
            N hésitez pas à partager vos pensées à travers le formulaire
            ci-dessous. Nous sommes impatients de vous lire et vous répondrons
            dans les plus brefs délais.
          </p>
          <ul className="contact-details">
            <li className="flex gap-4 items-center mb-4">
              <i className="uil uil-phone-times"></i>
              <h5>+216 55.000.111</h5>
            </li>

            <li className="flex gap-4 items-center mb-4">
              <i className="uil uil-envelope"></i>
              <h5>dive.academy@company.com</h5>
            </li>

            <li className="flex gap-4 items-center mb-4">
              <i className="uil uil-location-point"></i>
              <h5>Tunis</h5>
            </li>
          </ul>

          <ul className="contact-socials flex gap-3 mt-12">
            <Icon icon={faFacebook} />
            <Icon icon={faInstagram} />
            <Icon icon={faTwitter} />
            <Icon icon={faLinkedinIn} />
          </ul>
        </aside>

        <form
          action="https://formspree.io/f/xqkjdovl"
          method="post"
          className="flex flex-col gap-5 mr-16"
        >
          <div className="form-name flex gap-5">
            <input
              className="w-1/2"
              type="text"
              name="First Name"
              placeholder="Prenom"
              required
            />
            <input
              className="w-1/2"
              type="text"
              name="Last Name"
              placeholder="Nom"
              required
            />
          </div>
          <input
            type="email"
            name="Email"
            placeholder="Ton e-mail s'il vous plait"
            required
          />
          <textarea
            name="Message"
            rows="7"
            required
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary w-max  cursor-pointer rounded-xl"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
