import React, { useEffect } from "react";
import "../input.css";
import "../style.css";
import { themeChange } from "theme-change";
import { ThemeContext } from "../context/ThemeContext";

import {
	SunIcon,
	MoonIcon,
	BookmarkIcon,
	DevicePhoneMobileIcon,
	InformationCircleIcon,
	Bars3Icon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { IconLockSquare, IconUserBolt } from "@tabler/icons-react";

export function Navbar() {
	useEffect(() => {
		themeChange(false);
	}, []);

	const { theme, setTheme } = React.useContext(ThemeContext);
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
		<div className="pr-4 mr-4 z-50">
			<div
				className={`navbar bg-secondary rounded-xl text-secondary-content flex-row-reverse justify-between m-4 
			md:flex-row`}
			>
				{/* name */}
				<div
					className="flex-row-reverse px-2 gap-0
			md:flex-row"
				>
					{/* <UserCircleIcon className="w-8 h-8" /> */}
					<IconUserBolt className="w-8 h-8" />
					<NavLink to={"/"}>
						<div className="btn btn-ghost normal-case text-lg md:text-2xl">
							Krishnaraj
						</div>
					</NavLink>
				</div>
				{/* maincontents */}
				<div
					className="hidden
			   md:flex"
				>
					<ul className="menu menu-horizontal px-1">
						<li className="text-lg md:text-2xl">
							<NavLink to={"/projects"} id="contact_element">
								<IconLockSquare className="w-8 h-8" />
								Vaults
							</NavLink>
						</li>
						<li className="text-lg md:text-2xl">
							<NavLink to={"/about"} id="contact_element">
								<InformationCircleIcon className="w-8 h-8" />
								About
							</NavLink>
						</li>
						<li className="text-lg md:text-2xl">
							<NavLink to={"/contact"} id="contact_element">
								<DevicePhoneMobileIcon className="w-8 h-8" />
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
				{/* Theme */}
				<div className="hidden md:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<details>
								<summary className="text-lg md:text-2xl">
									Theme
								</summary>
								<ul className="p-2 bg-base-100 text-base-content">
									<li
										// data-set-theme="cupcake"
										className="text-lg"
										onClick={() => setTheme("light")}
									>
										<div>
											<SunIcon className="w-8 h-8" />
											Light
										</div>
									</li>
									<li
										className="text-lg"
										// data-set-theme="dracula"
										onClick={() => setTheme("dark")}
									>
										<div>
											<MoonIcon className="w-8 h-6" />
											Dark
										</div>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				</div>

				{/* hamburger */}
				<div className="md:hidden">
					<ul className="menu menu-horizontal px-1">
						<li>
							<details>
								<summary className="text-lg md:text-2xl">
									<Bars3Icon className="w-8 h-8" />
								</summary>
								<ul className="p-2 bg-base-100 text-base-content z-50">
									<li className="text-lg md:text-2xl">
										<NavLink
											to={"/projects"}
											id="contact_element"
										>
											<BookmarkIcon className="w-8 h-8" />
											Projects
										</NavLink>
									</li>
									<li className="text-lg md:text-2xl">
										<NavLink
											to={"/about"}
											id="contact_element"
										>
											<InformationCircleIcon className="w-8 h-8" />
											About
										</NavLink>
									</li>
									<li className="text-lg md:text-2xl">
										<NavLink
											to={"/contact"}
											id="contact_element"
										>
											<DevicePhoneMobileIcon className="w-8 h-8" />
											Contact
										</NavLink>
									</li>
									<li className="menu menu-horizontal px-1 ">
										<details>
											<summary className="text-lg md:text-2xl ">
												Theme
											</summary>
											<ul className="p-2 bg-base-100 text-base-content">
												<li
													// data-set-theme="cupcake"
													className="text-lg"
													onClick={() =>
														setTheme("light")
													}
												>
													<a>
														<SunIcon className="w-8 h-8" />
														Light
													</a>
												</li>
												<li
													className="text-lg"
													// data-set-theme="dracula"
													onClick={() =>
														setTheme("dark")
													}
												>
													<a>
														<MoonIcon className="w-8 h-6" />
														Dark
													</a>
												</li>
											</ul>
										</details>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
