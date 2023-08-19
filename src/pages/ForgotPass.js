import React from "react";
import { useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
const ForgotPass = () => {
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
		<div className="p-0 m-0">
			<div className="overflow-hidden">
				<div className="lg:flex rubik overflow-hidden">
					<div className="lg:w-1/2 xl:max-w-screen-sm">
						<div className="py-12 bg-indigo-100 lg:bg-transparent flex justify-center lg:justify-start lg:px-12">
							<div className="cursor-pointer flex items-center">
								<div id="logo" className="w-12 h-12 m-4"></div>
								<div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
									Anti Brutus
								</div>
							</div>
						</div>
						<div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
							<h2
								className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold"
							>
								Log in
							</h2>
							<div className="mt-12">
								<form>
									<div>
										<div className="text-2xl font-bold text-gray-700 tracking-wide">
											Email Address
										</div>
										<input
											className="w-full text-xl py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
											type=""
											placeholder="mike@gmail.com"
										/>
									</div>
									<div className="mt-8">
										<div className="flex justify-between items-center">
											<div className="text-2xl font-bold text-gray-700 tracking-wide">
												Master Password
											</div>
											<div>
												<NavLink
													className="text-xl font-display font-semibold text-indigo-600 hover:text-indigo-800
                                  cursor-pointer"
													to="/fpass"
												>
													Forgot Password?
												</NavLink>
											</div>
										</div>
										<input
											className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
											type=""
											placeholder="Enter your password"
										/>
									</div>
									<div className="mt-10">
										<button
											className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                          shadow-lg text-xl cursor-pointer"
										>
											Log In
										</button>
									</div>
								</form>
								<div className="mt-12 text-xl font-display font-semibold text-gray-700 text-center">
									Don't have an account ?{" "}
									<NavLink
										className="cursor-pointer text-indigo-600 hover:text-indigo-800"
										to="/signup"
									>
										Sign up
									</NavLink>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden lg:flex items-center justify-center bg-indigo-200 flex-1 h-screen">
						<div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
							<div
								id="mainsvg"
								className="w-[50rem] h-[40rem]"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPass;
