const Course = ({ img, name, info }) => {
  return (
    <article className="course bg-[#2e3267] text-center border border-transparent transition-all hover:bg-transparent hover:border-[#6c63ff]">
      <div className="course-image">
        <img src={img} alt="img" className=" h-56" />
      </div>

      <div className="course-info p-8">
        <h4>{name}</h4>
        <p className=" mt-5 mb-8 text-sm">{info}</p>
        <a href="courses.html" className="btn btn-primary rounded-2xl">
          En savoir plus
        </a>
      </div>
    </article>
  );
};
export default Course;
