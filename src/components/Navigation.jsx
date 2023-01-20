import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <Link to={`/portfolio`}>portfolio</Link>
      </nav>
    </>
  );
};

export default Navigation;