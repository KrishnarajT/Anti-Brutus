import React from "react";
import "../css/Home.css";

import { ThemeContext } from "../context/ThemeContext";
import { useEffect } from "react";

const Generator_Home = () => {
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

    

}

export default Generator_Home;