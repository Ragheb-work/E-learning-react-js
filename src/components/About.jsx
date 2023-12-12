import AboutStats from "./aboutStats";
import { faVideo, faUsers, faTrophy } from "@fortawesome/free-solid-svg-icons";
import about from "../assets/images/about achievements.svg";
const p =
  "Découvrez fièrement nos réalisations exceptionnelles. De la création de contenus captivants à des partenariats enrichissants, notre plateforme éducative s'engage résolument dans l'excellence, contribuant ainsi à redéfinir l'avenir de l'apprentissage en ligne.";
const About = () => {
  return (
    <section className="about-achievement mt-12">
      <div className=" about-achievement-container w-4/5 mx-auto grid categories-container gap-20">
        <div className="about-left">
          <img src={about} alt="img" />
        </div>
        <div className="about-achievement-right">
          <h1>Réalisation</h1>
          <p className=" mt-7 mb-10">{p}</p>
          <div className="achievements-cards grid gap-6 right">
            <AboutStats icon={faVideo} number={"450+"} name={"Cours"} />
            <AboutStats icon={faUsers} number={"79,000+"} name={"étudiants"} />
            <AboutStats icon={faTrophy} number={"26"} name={"Trophées"} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
