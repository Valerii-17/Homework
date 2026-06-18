import { createContext } from "react";

export const themes = {
  green: {
    color: "white",
    backgroundColor: "#7d7d7d",
  },
  orange: {
    color: "orange",
    backgroundColor: "#fff",
  },
};

export const ThemeContext = createContext();
