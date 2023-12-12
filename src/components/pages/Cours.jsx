import Course from "../Course";
import language from "../../assets/images/languageCourse.jpg";
import math from "../../assets/images/mathCourse.jpg";
import programming from "../../assets/images/programmingCourse.webp";
import ses from "../../assets/images/ses.jpeg";
import history from "../../assets/images/history.jpeg";
import affaire from "../../assets/images/affaire.jpeg";
import art from "../../assets/images/art.jpeg";
import env from "../../assets/images/environnement.jpeg";
import sante from "../../assets/images/sante.jpeg";

const Cours = () => {
  return (
    <section className="courses">
      <div className=" w-4/5 mx-auto grid right gap-8 ">
        <Course
          img={language}
          name={"Langues Étrangères"}
          info={
            "Améliorez vos capacités cognitives et votre mémoire en apprenant une nouvelle langue.  Améliorez votre écriture, votre grammaire et votre compréhension de la lecture."
          }
        />
        <Course
          img={math}
          name={"Mathématiques"}
          info={
            "Améliorez vos capacités cognitives et votre mémoire en apprenant une nouvelle langue.  Améliorez votre écriture, votre grammaire et votre compréhension de la lecture."
          }
        />
        <Course
          img={programming}
          name={"Programation"}
          info={
            "Améliorez vos capacités cognitives et votre mémoire en apprenant une nouvelle langue.  Améliorez votre écriture, votre grammaire et votre compréhension de la lecture."
          }
        />

        <Course
          img={ses}
          name={"Sciences économiques et sociales (SES)"}
          info={
            "vous enseigner les concepts fondamentaux de l'économie et de la société, analyser et évaluer les problèmes économiques et sociaux complexes."
          }
        />
        <Course
          img={history}
          name={"Histoire et Civilisation "}
          info={
            "Voyagez à travers le temps et explorez les événements qui ont façonné notre monde. Étudiez les civilisations historiques, les révolutions et les figures influentes qui ont joué un rôle clé dans l'histoire."
          }
        />
        <Course
          img={affaire}
          name={"Affaires et Entrepreneuriat "}
          info={
            "Acquérez des connaissances sur le monde des affaires. Apprenez le marketing, la finance, la gestion et l'entrepreneuriat. Développez les compétences nécessaires pour démarrer et gérer des entreprises prospères."
          }
        />
        <Course
          img={art}
          name={"Art et Design"}
          info={
            "Libérez votre créativité ! Explorez diverses formes d'art, le design graphique et le multimédia. Apprenez les principes du design, la théorie des couleurs et exprimez-vous à travers les arts visuels."
          }
        />
        <Course
          img={env}
          name={"Science de l'Environnement"}
          info={
            "Plongez dans les questions environnementales et les solutions. Apprenez sur le changement climatique, la durabilité et les efforts de conservation. Comprenez l'impact des activités humaines sur l'environnement."
          }
        />
        <Course
          img={sante}
          name={"Santé et Bien-être"}
          info={
            "Priorisez votre bien-être. Comprenez l'importance de la santé physique et mentale. Explorez des sujets tels que la nutrition, la remise en forme, la pleine conscience et la gestion du stress."
          }
        />
      </div>
    </section>
  );
};
export default Cours;
