import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../Navigation/Navigation.module.css";

const getNavLinkClass = ({ isActive }) =>
  clsx(css.headerLink, {
    [css.active]: isActive,
  });

const Navigation = () => {
  return (
    <header className={css.header}>
      <NavLink className={getNavLinkClass} to="/">
        HOME
      </NavLink>
      <NavLink className={getNavLinkClass} to="/movies">
        MOVIES
      </NavLink>
    </header>
  );
};

export default Navigation;
