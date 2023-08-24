import React from "react";
import { useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Vaults = () => {
  const { theme } = React.useContext(ThemeContext);
  useEffect(() => {
    console.log(theme);
    if (theme === "light") {
      const light_button = document.getElementById("light_button");
      light_button.click();
    } else {
      const dark_button = document.getElementById("dark_button");
      dark_button.click();
    }
  });
  return <div>vaults</div>;
};

export default Vaults;
