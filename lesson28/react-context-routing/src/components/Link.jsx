import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import { NavLink } from "react-router";

const Link = (props) => {
  const [theme] = useContext(ThemeContext);

  const { href, children } = props;

  return (
    <NavLink to={href} style={{ color: theme.color }}>
      {children}
    </NavLink>
  );
};

export default Link;
