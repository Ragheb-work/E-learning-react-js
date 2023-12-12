import header from "../assets/images/header.svg";

export const info = `Dive academy est un site web éducatif qu'il s'intéresse à tous qu'il
            est scolarité,dans le but de aide les étudiants de A jusqu'à Z. Son
            usage est simple mais très bénéfique.`;

const Home = () => {
  return (
    <div className=" relative top-20 overflow-hidden mb-20 h-[calc(100vh-80px)]">
      <div className=" grid items-center gap-20 h-full cols w-4/5 mx-auto my-0">
        <div className="header-left">
          <h1>
            Développez vos compétences pour dynamiser votre parcours
            professionnel.
          </h1>
          <p className=" mt-3">{info}</p>
          <a
            href="courses.html"
            className="btn btn-primary mr-10 my-4 rounded-xl"
          >
            Commencer
          </a>
        </div>

        <div className="header-right">
          <div className="header-right-img">
            <img src={header} alt="img svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
