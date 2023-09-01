import React, { useCallback } from "react";
import { useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { IconArrowRight, IconPlus } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import select_image from "../utils/images";
import axios from "axios";
import { BaseUrlContext } from "../context/BaseUrlContext";
import { UserInfoContext } from "../context/UserInfoContext";

const Vaults = () => {
	const base_url = React.useContext(BaseUrlContext).baseUrl;
	const userEmail = React.useContext(UserInfoContext).userEmail;
	useEffect(() => {
		const html = document.querySelector("html");
		html.classList.remove("overflow-hidden");
	}, []);

	const [vaults, setVaults] = React.useState([]);
	const [newVaultName, setNewVaultName] = React.useState("");
	const [newVaultDescription, setNewVaultDescription] = React.useState("");

	const { theme } = React.useContext(ThemeContext);
	const navigate = useNavigate();

	useEffect(() => {
		console.log(theme);
		if (theme === "light") {
			const light_button = document.getElementById("light_button");
			light_button.click();
		} else {
			const dark_button = document.getElementById("dark_button");
			dark_button.click();
		}
		if (vaults.length === 0) {
			getVaults();
		}
	});

	const getVaults = async () => {
		const response = await axios
			.post(
				`${base_url}/get_vaults`,
				{},
				{
					params: {
						user_email: userEmail,
					},
				}
			)
			.then((response) => {
				return response;
			})
			.catch((error) => {
				console.error(error);
				// alert("server not running! a simulated response is being sent");
				const response = {
					data: {
						message: "simulation",
					},
				};
				return response;
			});

		if (response.data.message === "simulation") {
			setVaults([
				{
					id: 1,
					name: "Favourifgtes",
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
			]);
		} else {
			// setVaults(response.data);
			setVaults([
				{
					id: 1,
					name: "Favourifgtes",
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
			]);
		}
		console.log("password sending", response.data);
	};

	const handleSave = async () => {
		const modal = document.getElementById("my_modal_3");
		modal.close();

		// send request to server to add a new vault.
		const response = await axios
			.post(
				`${base_url}/add_vault`,
				{},
				{
					params: {
						name: newVaultName,
						description: newVaultDescription,
					},
				}
			)
			.then((response) => {
				return response;
			})
			.catch((error) => {
				console.error(error);
				alert("server not running! a simulated response is being sent");
				const response = {
					data: {
						message: "simulation",
					},
				};
				return response;
			});
		console.log("password sending", response.data);
	};
	return (
		<div>
			<div className="h-32 bg-transparent p-10 m-4 rounded-3xl flex justify-between">
				<div className="flex-1 flex items-center">
					<h1 className="text-5xl w-full font-bold text-base-content">
						Your Vaults
					</h1>
				</div>
				<div className="flex items-center">
					<button
						className="btn bg-secondary-focus border-none text-2xl btn-lg hover:bg-success hover:text-success-content flex items-center gap-2 text-secondary-content"
						onClick={() => {
							const modal = document.getElementById("my_modal_3");
							modal.showModal();
						}}
					>
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
												navigate(
													`/vaults/${vault.id}/${vault.name}`
												);
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
			<dialog id="my_modal_3" className="modal">
				<form method="dialog" className="modal-box">
					<div className="font-bold text-3xl">Add New Vault</div>
					<div className="flex gap-4 flex-col">
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text text-xl">Name</span>
							</label>
							<input
								type="text"
								placeholder="Enter Name Here"
								className="input input-bordered w-full max-w-xs"
								value={newVaultName}
								onChange={(e) =>
									setNewVaultName(e.target.value)
								}
							/>
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text text-xl">
									Description
								</span>
							</label>
							<input
								type="text"
								placeholder="Type here"
								className="input input-bordered w-full max-w-xs"
								value={newVaultDescription}
								onChange={(e) =>
									setNewVaultDescription(e.target.value)
								}
							/>
						</div>
					</div>
					<div className="modal-action">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn" onClick={handleSave}>
							Save
						</button>
					</div>
				</form>
			</dialog>
		</div>
	);
};

export default Vaults;
