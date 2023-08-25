import React from "react";
import { useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { IconPlus } from "@tabler/icons-react";
import { NavLink, useNavigate } from "react-router-dom";

const Vaults = () => {
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
			<div className="h-44 bg-secondary p-10 m-4 rounded-3xl flex justify-between">
				<div className="flex-1 flex items-center">
					<h1 className="text-5xl w-full font-bold text-secondary-content">
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
				<div className="overflow-x-auto p-8 px-20">
					<table className="table text-3xl">
						{/* head */}
						<thead>
							<tr className="text-4xl text-base-content border-base-content">
								<th></th>
								<th>Name</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody className="">
							{vaults.map((vault) => {
								return (
									<tr
										className="h-24 transition-all duration-300 transform-gpu hover:bg-base-200 rounded-3xl hover:cursor-pointer border-base-content"
										onClick={() => {
											navigate(`/vaults/${vault.id}`);
										}}
									>
										<th>{vault.id}</th>
										<td className="hover:text-accent text-5xl transition-all duration-300">
											{vault.name}
										</td>
										<td className="">
											{vault.description}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Vaults;
