import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoriesItem = ({ icon, name, about }) => {
  return (
    <article className="category bg-[#424890] p-8 rounded-[2rem] transition-all   hover:shadow-2xl">
      <span className="category-icon bg-[#6c63ff] p-3 rounded-2xl">
        <FontAwesomeIcon icon={icon} />
      </span>
      <h5 className=" mt-8 mb-4">{name}</h5>
      <p className=" text-sm">{about}</p>
    </article>
  );
};
export default CategoriesItem;
