import FaqItem from "./FaqItem";

const Faqs = () => {
  return (
    <section className="faqs bg-[#2e3267] shadow-xl">
      <h2>Questions Populaires</h2>
      <div className="faqs-container w-4/5 mx-auto grid cols gap-4 ">
        <FaqItem
          question={"Comment puis-je accéder aux cours en ligne ?"}
          answer={
            "Pour accéder aux cours en ligne, il vous suffit de créer un compte sur notre site web. Une fois connecté, vous pourrez accéder à tous les cours disponibles."
          }
        />
        <FaqItem
          question={
            "Est-ce que les cours sont disponibles en plusieurs langues ?"
          }
          answer={
            "Oui, nous proposons des cours dans différentes langues pour répondre aux besoins des apprenants du monde entier."
          }
        />
        <FaqItem
          question={"Comment puis-je poser une question à un enseignant ?"}
          answer={
            "Vous pouvez poser vos questions en utilisant notre formulaire de contact. Nos enseignants répondront rapidement et avec précision à vos interrogations."
          }
        />
        <FaqItem
          question={"Comment fonctionne la tarification ?"}
          answer={
            "Notre modèle tarifaire varie en fonction du cours. Certains cours sont disponibles gratuitement, tandis que d'autres peuvent avoir des frais d'achat ponctuels ou un modèle d'abonnement."
          }
        />
        <FaqItem
          question={"Y a-t-il des évaluations ou des quiz dans les cours ?"}
          answer={
            "Oui, de nombreux cours incluent des évaluations, des quiz et des devoirs pour renforcer votre apprentissage. Ces activités sont conçues pour évaluer votre compréhension du contenu du cours et offrir une expérience d'apprentissage pratique."
          }
        />
        <FaqItem
          question={"Combien de temps ai-je accès à un cours après l'achat ?"}
          answer={
            "Une fois inscrit à un cours, vous avez généralement un accès à vie au contenu du cours. Cela vous permet d'apprendre à votre propre rythme et de revisiter le matériel quand vous le souhaitez."
          }
        />
        <FaqItem
          question={
            "Puis-je obtenir un remboursement si je ne suis pas satisfait d'un cours ?"
          }
          answer={
            "Nous nous efforçons de fournir un contenu de haute qualité, mais si vous n'êtes pas satisfait d'un cours, nous proposons un remboursement dans une période spécifiée après votre achat."
          }
        />
        <FaqItem
          question={
            "Puis-je interagir avec les instructeurs et les autres étudiants ?"
          }
          answer={
            "Oui, Dive Academy encourage l'interaction. Vous pouvez participer aux forums de discussion, poser des questions et interagir avec les instructeurs et les autres étudiants pour améliorer votre expérience d'apprentissage."
          }
        />
      </div>
    </section>
  );
};
export default Faqs;
