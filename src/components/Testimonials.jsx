// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SlideItem from "./SlideItem";

import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";

const Testimonials = () => {
  return (
    <section className="w-4/5 mx-auto   overflow-x-hidden relative mb-20">
      <h2>Les Avis de nos étudiants</h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=" pt-8 mb-12">
          <SlideItem
            img={team1}
            name={"Ragheb Smary"}
            state={"étudiant"}
            msg={
              "Je suis impressionné par la qualité du contenu et la facilité d'utilisation du site. J'ai pu approfondir mes connaissances dans plusieurs domaines. Merci à l'équipe pour cette plateforme éducative exceptionnelle !"
            }
          />
        </SwiperSlide>
        <SwiperSlide className=" pt-8 mb-12">
          <SlideItem
            img={team2}
            name={"Mohammed Majdouby"}
            state={"étudiant"}
            msg={
              "J'ai trouvé toutes les réponses à mes questions sur ce site. Les explications sont claires et les ressources proposées sont vraiment utiles. Je recommande vivement à tous les apprenants de l'explorer."
            }
          />
        </SwiperSlide>
        <SwiperSlide className=" pt-8 mb-12">
          <SlideItem
            img={team3}
            name={"Salym Laajili"}
            state={"étudiant"}
            msg={
              "Grâce à ce site, j'ai pu développer mes connaissances dans des domaines qui me passionnent. Les contenus sont variés et les explications sont faciles à comprendre. Un grand merci à toute l'équipe !"
            }
          />
        </SwiperSlide>
        <SwiperSlide className=" pt-8 mb-12">
          <SlideItem
            img={team2}
            name={"Malik ben romdhan"}
            state={"étudiant"}
            msg={
              "J'ai trouvé toutes les réponses à mes questions sur ce site. Les explications sont claires et les ressources proposées sont vraiment utiles. Je recommande vivement à tous les apprenants de l'explorer."
            }
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Testimonials;
