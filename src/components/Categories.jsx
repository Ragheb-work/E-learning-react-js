import CategoriesItem from "./CategoriesItem";
import {
  faLandmark,
  faSquareRootVariable,
  faCode,
  faVials,
  faDollarSign,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  return (
    <section className=" bg-[#2e3267] h-[35rem]">
      <div className="w-4/5 mx-auto my-0 categories-container grid layout">
        <div className="left mr-16">
          <h1 className=" mb-12 leading-tight">Catégories</h1>
          <p className=" mt-4  mb-12">
            Découvrez Dive academy qui propose une variété de matières afin de
            vous aider à enrichir vos connaissances, nous mettons à votre
            disposition des ressources pédagogiques de haute qualité dans
            diverses matières.
          </p>
          <a href="#" className="btn rounded-2xl">
            En savoir plus
          </a>
        </div>

        <div className="right grid gap-5">
          <CategoriesItem
            icon={faSquareRootVariable}
            name={"Mathématiques"}
            about={
              " Développez votre raisonnement logique et vos compétences en résolution de problèmes."
            }
          />
          <CategoriesItem
            icon={faScroll}
            name={"Littérature"}
            about={
              "Parcourez les chefs-d'œuvre de la littérature et plongez dans l'univers des mots."
            }
          />
          <CategoriesItem
            icon={faLandmark}
            name={"Histoire"}
            about={
              "Remontez le temps et explorez les événements et les personnages clés qui ont façonné notre monde."
            }
          />
          <CategoriesItem
            icon={faCode}
            name={"Programmation "}
            about={
              "Découvrez les secrets des langages de programmation tels que JavaScript, Python et Java. Apprenez à coder.."
            }
          />
          <CategoriesItem
            icon={faVials}
            name={"Sciences et Technologies"}
            about={
              "Comprenez les principes de la physique, de la chimie et de la biologie."
            }
          />
          <CategoriesItem
            icon={faDollarSign}
            name={"Affaires et Entrepreneuriat"}
            about={
              "Acquérez des connaissances sur le monde des affaires. Apprenez le marketing et l'entrepreneuriat."
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Categories;
