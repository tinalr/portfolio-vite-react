import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/portfolio`}>Portfolio</NavLink>
      </nav>
    </>
  );
};

export default Navigation;