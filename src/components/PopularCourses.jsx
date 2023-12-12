import Course from "./Course";
import languageCourse from "../assets/images/languageCourse.jpg";
import mathCourse from "../assets/images/mathCourse.jpg";
import programmingCourse from "../assets/images/programmingCourse.webp";
const PopularCourses = () => {
  return (
    <section className=" mt-40">
      <h2>Nos cours populaires</h2>
      <div className=" grid right gap-8 w-4/5 mx-auto">
        <Course
          img={languageCourse}
          name={"Langues Étrangères"}
          info={
            "Améliorez vos capacités cognitives et votre mémoire en apprenant une nouvelle langue.  Améliorez votre écriture, votre grammaire et votre compréhension de la lecture."
          }
        />
        <Course
          img={mathCourse}
          name={"Mathématiques"}
          info={
            "Explorez le monde des nombres, des équations et de la résolution de problèmes. Des bases de l'arithmétique au calcul avancé, maîtrisez les concepts fondamentaux qui constituent la base des mathématiques."
          }
        />
        <Course
          img={programmingCourse}
          name={"Programation"}
          info={
            "Découvrez les secrets des langages de programmation tels que JavaScript, Python et Java. Apprenez à coder, à construire des applications logicielles et à comprendre la logique derrière les programmes informatiques."
          }
        />
      </div>
    </section>
  );
};
export default PopularCourses;
