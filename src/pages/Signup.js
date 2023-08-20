import React, { useState } from "react";
import { useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
	IconCircleCheckFilled,
	IconCircleFilled,
	IconCross,
	IconEye,
	IconEyeClosed,
	IconX,
	IconXboxX,
} from "@tabler/icons-react";

const Signup = (props) => {
	let navigate = useNavigate();
	const [passVisible, setPassVisible] = useState(false);
	// password criteria states
	const [passLength, setPassLength] = useState(0);
	const [passContainsNumber, setPassContainsNumber] = useState(false);
	const [passContainsSpecialChar, setPassContainsSpecialChar] =
		useState(false);
	const [passContainsUppercase, setPassContainsUppercase] = useState(false);
	const [passMatchesConfirm, setPassMatchesConfirm] = useState(false);

	function handleClick() {
		props.setisNavbarPresent(true);
		navigate("/home");
	}
	const { theme, setTheme } = React.useContext(ThemeContext);
	useEffect(() => {
		console.log(theme);
		setTheme("light");
		const light_button = document.getElementById("light_button");
		light_button.click();
	});
	return (
		<div className="p-0 m-0 bg-base-100">
			<div className="">
				<div className="lg:flex rubik ">
					<div className="lg:w-2/3">
						<div className="px-16 py-12 rubik text-center text-4xl text-primary-content font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
							Sign Up!
							<div className="text-center text-xl text-secondary-focus font-display font-semibold lg:text-left xl:text-xl xl:text-bold rubik pt-3">
								<span className="italic">
									“I love the name of honour more than I fear
									death.”
								</span>
								<br></br>
								<span className="text-secondary">
									{" "}
									Brutus to Ceasar, Act 1, Scene 2.
								</span>
								<br></br>
								<br></br>
								<span className="text-accent"> So do we.</span>
								<br></br>
							</div>
						</div>
						<div className="p-4">
							<form className="">
								<div className="flex">
									<div className="p-12 w-full flex flex-col gap-6">
										{/* name */}
										<div>
											<div className="text-2xl font-bold text-primary-content tracking-wide">
												Name
											</div>
											<input
												className="w-full text-xl py-2 border-b border-primary focus:outline-none focus:border-accent bg-transparent"
												type="text"
												placeholder="Julius Ceasar"
											/>
										</div>

										{/* email */}
										<div>
											<div className="text-2xl font-bold text-primary-content tracking-wide mt-8">
												Email Address
											</div>
											<input
												className="w-full text-xl py-2 border-b border-primary focus:outline-none focus:border-accent bg-transparent"
												type="email"
												placeholder="Brutus@rome.com"
											/>
										</div>
										<div className="text-base-content rubik text-xl">
											The OTP will be sent to this email.
										</div>
										{/* otp */}
										<div>
											<div className="text-2xl font-bold text-primary-content tracking-wide mt-6">
												OTP
											</div>
											<input
												className="w-full text-xl py-2 border-b border-primary focus:outline-none focus:border-accent bg-transparent"
												type="number"
												placeholder="Enter OTP Received on Email ID"
											/>
										</div>
									</div>

									<div className="p-12 pt-0 mt-0 w-full">
										{/* 
										name
										otp
										password instructions
										password
										confirm password
										eye of password
									*/}
										<div className="text-accent rubik text-xl bg-base-200 rounded-xl p-8 mt-0">
											This is the only Password you have
											to remember. Make sure it is Secure,
											and you never forget it. Do not
											write it down anywhere. Do not share
											it with anyone.
										</div>
										<div className="mt-8">
											<div className="flex justify-between items-center">
												<div className="text-2xl font-bold text-primary-content bg-transparent tracking-wide">
													Master Password
												</div>
											</div>
											<div className="flex flex-row gap-6 w-[34rem]">
												<input
													className="w-full text-lg py-2 border-b border-primary focus:outline-none focus:border-accent bg-transparent"
													type={
														passVisible
															? "text"
															: "password"
													}
													placeholder="Enter your password. Never Forget it. "
												/>

												{passVisible ? (
													<IconEye
														className="w-10 h-10"
														onClick={() => {
															setPassVisible(
																() => {
																	return !passVisible;
																}
															);
														}}
													/>
												) : (
													<IconEyeClosed
														className="w-10 h-10"
														onClick={() => {
															setPassVisible(
																() => {
																	return !passVisible;
																}
															);
														}}
													/>
												)}
											</div>
										</div>
										<progress
											className="progress progress-error w-[30rem] mt-8 mb-4"
											value="10"
											max="100"
										></progress>

										{/* tell them requirements of the password */}

										<div className="py-2 flex flex-wrap gap-2 w-[34rem] justify-between">
											<div className="flex gap-2 items-center text-xl min-w-[14rem]">
												{passLength > 7 ? (
													<IconCircleCheckFilled className="w-7 h-7" />
												) : (
													<IconCircleFilled className="w-7 h-7" />
												)}
												Minimum 8 Characters
											</div>
											<div className="flex gap-2 items-center text-xl min-w-[14rem]">
												{passLength > 7 ? (
													<IconCircleCheckFilled className="w-7 h-7" />
												) : (
													<IconCircleFilled className="w-7 h-7" />
												)}
												1 Number
											</div>
											<div className="flex gap-2 items-center text-xl min-w-[14rem]">
												{passLength > 7 ? (
													<IconCircleCheckFilled className="w-7 h-7" />
												) : (
													<IconCircleFilled className="w-7 h-7" />
												)}
												1 Special Character
											</div>
											<div className="flex gap-2 items-center text-xl min-w-[14rem]">
												{passLength > 7 ? (
													<IconCircleCheckFilled className="w-7 h-7" />
												) : (
													<IconCircleFilled className="w-7 h-7" />
												)}
												1 Capital Letter
											</div>
										</div>

										<div className="mt-12">
											<div className="flex justify-between items-center">
												<div className="text-2xl font-bold text-primary-content bg-transparent tracking-wide">
													Confirm Master Password
												</div>
											</div>
											<div className="flex flex-row gap-6 w-[34rem]">
												<input
													className="w-full text-lg py-2 border-b border-primary focus:outline-none focus:border-accent bg-transparent"
													type={
														passVisible
															? "text"
															: "password"
													}
													placeholder="Enter your password"
												/>
											</div>
										</div>
										<div className="flex gap-2 items-center text-xl my-4">
											{passLength < 7 ? (
												<IconCircleCheckFilled className="w-7 h-7" />
											) : (
												<IconCircleFilled className="w-7 h-7" />
											)}
											Passwords Match
										</div>
									</div>
								</div>
							</form>
						</div>
						<div className="flex justify-center">
							<div className="mt-10 w-96 flex justify-center">
								<button
									className="bg-primary p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-focus text-primary-content shadow-lg text-xl cursor-pointer"
									onClick={() => {
										console.log("clicked");
										// navigate to home using router
										handleClick();
									}}
								>
									Welcome to the Empire!
								</button>
							</div>
						</div>
						<div className="mt-4 text-xl font-display font-semibold text-primary-content text-center">
							Already have an account ?{" "}
							<NavLink
								className="cursor-pointer text-accent hover:text-accent-focus"
								to="/"
							>
								Log in
							</NavLink>
						</div>
					</div>
					<div className="hidden lg:flex items-start flex-col bg-primary w-1/3 h-screen p-4">
						<div className="py-8 bg-base-100 lg:bg-transparent flex justify-end lg:justify-end lg:px-12 w-full">
							<div className="cursor-pointer flex items-center mb-0 justify-end">
								<div className="text-4xl text-primary-content tracking-wide ml-2 font-semibold">
									Anti Brutus
								</div>
								<div id="logo" className="w-16 h-16 m-4"></div>
							</div>
						</div>

						<div className="max-w-xs transform duration-200 hover:scale-105 cursor-pointer">
							<div
								id="mainsvgsignup"
								className="w-[50rem] h-[50rem]"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
