import React from "react";
import { useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Login = () => {
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
	return <div>Login</div>;
};

export default Login;
