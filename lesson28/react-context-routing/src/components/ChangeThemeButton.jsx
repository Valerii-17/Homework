import { useContext } from "react";
import { ThemeContext, themes } from "../themeContext";

const ChangeThemeButton = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme.color === "white" ? themes.orange : themes.green);
  };

  return <button onClick={handleClick}>Change theme</button>;
};

export default ChangeThemeButton;
