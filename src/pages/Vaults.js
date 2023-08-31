import React from "react";
import { useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { IconArrowRight, IconPlus } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import select_image from "../utils/images";

const Vaults = () => {
	useEffect(() => {
		const html = document.querySelector("html");
		html.classList.remove("overflow-hidden");
	}, []);

	const { theme } = React.useContext(ThemeContext);
	const navigate = useNavigate();
	let vaults = [
		{
			id: 1,
			name: "Favourites",
			description: "Your Favourtites",
		},
		{
			id: 2,
			name: "Passwords",
			description: "The place for your passwords",
		},
		{
			id: 3,
			name: "Cards",
			description: "Safely Store your cards",
		},
	];

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
			<div className="h-32 bg-transparent p-10 m-4 rounded-3xl flex justify-between">
				<div className="flex-1 flex items-center">
					<h1 className="text-5xl w-full font-bold text-base-content">
						Your Vaults
					</h1>
				</div>
				<div className="flex items-center">
					<button className="btn bg-secondary-focus border-none text-2xl btn-lg hover:bg-success hover:text-success-content flex items-center gap-2 text-secondary-content">
						Add Vaults
						<span className="text-secondary-content"></span>
						<IconPlus className="text-5xl text-secondary-content" />
					</button>
					{/* <button className="btn btn-success">Edit Vaults</button> */}
				</div>
			</div>
			<div>
				<div className="overflow-x-auto p-8 px-20 flex flex-wrap justify-center">
					{vaults.map((vault) => {
						return (
							<div className="card w-1/4 h-72 bg-base-100 shadow-xl image-full m-4">
								<div
									style={{
										backgroundImage: `url("${
											select_image()["image"]
										}")`,
										backgroundSize: "cover",
										backgroundPosition: "center",
										backgroundRepeat: "no-repeat",
									}}
									className="image-full rounded-xl h-full w-full"
								></div>
								<div className="card-body">
									<h2 className="card-title text-3xl">
										{vault.name}
									</h2>
									<p className="text-2xl">
										{vault.description}
									</p>
									<div className="card-actions justify-end">
										<button
											className="btn btn-primary btn-lg"
											onClick={() => {
												navigate(`/vaults/${vault.id}/${vault.name}`);
											}}
										>
											{" "}
											Open
											<IconArrowRight className="text-2xl" />
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Vaults;
