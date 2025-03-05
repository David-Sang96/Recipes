import { NavLink } from "react-router";

const Header = () => {
  return (
    <nav className="flex items-center justify-between pb-4 font-semibold  border-b border-b-sky-400 3E">
      <NavLink to={"/"} className="text-3xl  text-sky-500">
        GUSTO
      </NavLink>
      <div className="space-x-3">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-sky-400" : "")}
        >
          Recipe
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "text-sky-400" : "")}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
