const SlideItem = ({ img, name, state, msg }) => {
  return (
    <>
      <div className="avatar w-24 h-24 rounded-[50%] overflow-hidden m-[0 auto 1rem] mt-0 mx-auto mb-4 border border-[#2e3267]">
        <img src={img} alt="img" />
      </div>
      <div className="testimonial-info text-center">
        <h5>{name}</h5>
        <small>{state}</small>
      </div>
      <div className="testimonial-body bg-[#6c63ff] p-8 mt-12 relative">
        <p>{msg}</p>
      </div>
    </>
  );
};
export default SlideItem;
