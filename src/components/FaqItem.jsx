import { useRef } from "react";
import { FaPlusMinus } from "react-icons/fa6";

const FaqItem = ({ question, answer }) => {
  const p = useRef();

  const handleClick = () => {
    p.current.classList.toggle("open");
  };

  return (
    <article
      className="  p-8 flex items-center gap-6 h-fit bg-[#6c63ff] cursor-pointer"
      onClick={handleClick}
    >
      <div className=" self-start text-xl">
        <FaPlusMinus />
      </div>
      <div className="question-answer">
        <h4 className=" text-base ">{question}</h4>
        <p className=" mt-3 border-t hidden" ref={p}>
          {answer}
        </p>
      </div>
    </article>
  );
};
export default FaqItem;
