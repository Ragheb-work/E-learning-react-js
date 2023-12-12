import { useEffect, useState } from "react";
import NavItem from "../NavItem";

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled beyond a certain threshold (e.g., 100 pixels)
      const isScrolling = window.scrollY > 150;
      setScrolling(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolling ? "window-scroll" : ""}>
      <div className="h-20 flex justify-between items-center w-4/5 mx-auto my-0">
        <a href="/">Dive Academy</a>
        <ul className="nav-menu flex items-center gap-16">
          <NavItem href={"/"} name={"Accueil"} />
          <NavItem href={"/parcours"} name={"Parcours"} />
          <NavItem href={"/cours"} name={"Nos Cours"} />
          <NavItem href={"/contact"} name={"Contactez nous"} />
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
