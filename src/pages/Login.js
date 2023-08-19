import React from "react";
import { useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../css/Navbar.css";
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
												<a
													className="text-xl font-display font-semibold text-indigo-600 hover:text-indigo-800
                                  cursor-pointer"
												>
													Forgot Password?
												</a>
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
									<a className="cursor-pointer text-indigo-600 hover:text-indigo-800">
										Sign up
									</a>
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
				<div
					className="REMOVE-THIS-ELEMENT-IF-YOU-ARE-USING-THIS-PAGE hidden treact-popup fixed inset-0 flex items-center justify-center"
					style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
				>
					<div className="max-w-lg p-8 sm:pb-4 bg-white rounded shadow-lg text-center sm:text-left">
						<h3 className="text-xl sm:text-2xl font-semibold mb-6 flex flex-col sm:flex-row items-center">
							<div className="bg-green-200 p-2 rounded-full flex items-center mb-4 sm:mb-0 sm:mr-2">
								<svg
									className="text-green-800 inline-block w-5 h-5"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
								</svg>
							</div>
							Free TailwindCSS Component Kit!
						</h3>
						<p>
							I recently released Treact, a{" "}
							<span className="font-bold">free</span> TailwindCSS
							Component Kit built with React.
						</p>
						<p className="mt-2">
							It has 52 different UI components, 7 landing pages,
							and 8 inner pages prebuilt. And they are
							customizable!
						</p>
						<div className="mt-8 pt-8 sm:pt-4 border-t -mx-8 px-8 flex flex-col sm:flex-row justify-end leading-relaxed">
							<button className="close-treact-popup px-8 py-3 sm:py-2 rounded border border-gray-400 hover:bg-gray-200 transition duration-300">
								Close
							</button>
							<a
								className="font-bold mt-4 sm:mt-0 sm:ml-4 px-8 py-3 sm:py-2 rounded bg-purple-700 text-gray-100 hover:bg-purple-900 transition duration-300 text-center"
								href="https://treact.owaiskhan.me"
								target="_blank"
							>
								See Treact
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
