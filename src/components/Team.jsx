import avatar from "../assets/images/avatar-1.jpg";
import avatar2 from "../assets/images/avatar-2.jpg";
import avatar3 from "../assets/images/avatar-3.jpg";
import avatar4 from "../assets/images/avatar-4.jpg";
import avatar5 from "../assets/images/avatar-4.jpg";
import avatar6 from "../assets/images/avatar-3.jpg";
import avatar7 from "../assets/images/avatar-2.jpg";
import avatar8 from "../assets/images/avatar-1.jpg";
import TeamMember from "./TeamMember";

const Team = () => {
  return (
    <section className="team bg-[#2e3267] shadow-xl">
      <h2>Notre équipe</h2>
      <div className="team-container w-4/5 mx-auto grid gap-8 footer-grid">
        <TeamMember img={avatar} name={"Ragheb Smary"} position={"PDG"} />
        <TeamMember
          img={avatar2}
          name={"Karym Hafsy"}
          position={"Créateur de Contenu Éducatif"}
        />
        <TeamMember
          img={avatar3}
          name={"Moez Dharhry"}
          position={"Responsable Technologique"}
        />
        <TeamMember
          img={avatar4}
          name={"Anis Sabri"}
          position={"Gestionnaire de Communauté"}
        />
        <TeamMember
          img={avatar5}
          name={"Ahmed Jelfy"}
          position={"Spécialiste en Marketing"}
        />
        <TeamMember
          img={avatar6}
          name={"Saif Jedlen"}
          position={"Spécialiste du Support Client"}
        />
        <TeamMember
          img={avatar7}
          name={"Marwen salah"}
          position={"Conseiller Pédagogique"}
        />
        <TeamMember
          img={avatar8}
          name={"Aala Malek"}
          position={"Analyste de Données"}
        />
      </div>
    </section>
  );
};
export default Team;
