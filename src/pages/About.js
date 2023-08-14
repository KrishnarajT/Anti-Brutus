import React from "react";
import { useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
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
	return (
		<div>
			<div
				className="flex justify-center p-4 flex-col align-middle items-center"
				id="how"
			>
				<div className="text-base-content text-5xl p-4 text-center rounded-full px-16 outline-secondary outline">
					Developer
				</div>
				<div className="flex justify-center p-8 flex-col align-middle items-center">
					<div className="text-base-content text-3xl p-8 bg-base-200 rounded-3xl outline">
						Developed by{" "}
						<a href="https://github.com/KrishnarajT">
							{" "}
							Krishnaraj T
						</a>
						.
					</div>

					<div className="text-base-content text-5xl p-4 text-center rounded-full px-16 outline-secondary outline m-8">
						Credits and Thanks
					</div>
					<div className="text-base-content text-3xl p-8 bg-base-200 rounded-3xl flex flex-col items-center outline">
						Huge thanks to DaisyUI for the CSS framework, and
						Heroicons for the icons. Here are the links:
						<br></br>
						<div className="flex m-4 p-4">
							<a
								href="https://daisyui.com/"
								className="outline rounded-full m-4 p-4 text-center self-center hover:bg-neutral hover:text-neutral-content"
							>
								{" "}
								DaisyUI{" "}
							</a>
							<br></br>
							<a
								href="https://heroicons.com/"
								className="outline rounded-full m-4 p-4 text-center self-center hover:bg-neutral hover:text-neutral-content"
							>
								{" "}
								Heroicons{" "}
							</a>
							<a
								href="https://www.tailwindcss.com/"
								className="outline rounded-full m-4 p-4 text-center self-center hover:bg-neutral hover:text-neutral-content"
							>
								{" "}
								TailwindCSS{" "}
							</a>
							<a
								href="https://react.dev/"
								className="outline rounded-full m-4 p-4 text-center self-center hover:bg-neutral hover:text-neutral-content"
							>
								{" "}
								ReactJS{" "}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
