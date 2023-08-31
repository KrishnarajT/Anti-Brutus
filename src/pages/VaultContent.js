import { IconDeviceFloppy, IconPlus, IconSearch } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VaultContent = () => {
	let passwords = [
		{
			id: 1,
			name: "Facebook",
			username: "username",
			password: "password",
			url: "https://facebook.com",
			description: "Your Favourtites",
			date: "12/12/12",
		},
		{
			id: 2,
			name: "Instagram",
			username: "username",
			password: "password",
			url: "https://instagram.com",
			description: "The place for your passwords",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
		},
	];
	useEffect(() => {
		console.log("VaultContent");
		const html = document.querySelector("html");
		html.classList.add("overflow-hidden");

		// get the passwords from the database

	}, []);
	const [selected_password, setSelectedPassword] = React.useState(null);
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [url, setUrl] = useState("");
	const [description, setDescription] = useState("");

	const params = useParams();
	console.log(params);
	return (
		<div>
			<div className="h-32 bg-transparent p-10 m-4 rounded-3xl flex justify-between items-center">
				<div className="flex-1 flex items-center">
					<h1 className="text-5xl w-full font-bold text-base-content">
						{params.name}
					</h1>
				</div>
				<div className="px-4 w-auto mr-10 text-2xl flex items-center gap-2 outline outline-1 rounded-full">
					<div className="rounded-full h-14 w-14 p-2 flex items-center justify-center">
						<IconSearch className="text-5xl text-primary-content h-7 w-7" />
					</div>
					<input
						type="text"
						placeholder="Search"
						className="text-2xl h-14 w-full rounded-2xl border-none outline-none"
					/>
				</div>
				<div className="flex items-center">
					<button className="btn bg-primary border-none text-2xl btn-lg hover:bg-primary-focus hover:text-primary-content flex items-center gap-2 text-primary-content">
						New Password
						<span className="text-primary-content"></span>
						<IconPlus className="text-5xl text-primary-content" />
					</button>
					{/* <button className="btn btn-success">Edit Vaults</button> */}
				</div>
			</div>
			<div className="flex">
				<div className="overflow-x-hidden p-8 px-20 flex-1 h-[70vh] scroll-m-4 will-change-scroll scroll-smooth">
					<table className="table text-xl">
						{/* head */}
						<thead>
							<tr className="text-3xl text-base-content border-base-content outline rounded-ss-2xl rounded-se-2xl">
								<th>Name</th>
								<th>Username</th>
								<th>Date</th>
							</tr>
						</thead>
						<tbody className="">
							{passwords.map((password) => {
								return (
									<tr
										className="h-14 transition-all duration-200 transform-gpu hover:bg-base-200 hover:cursor-pointer border-base-content"
										onClick={() => {
											setSelectedPassword(password);
											// set values as well from this password. 
											setName(password.name);
											setUsername(password.username);
											setPassword(password.password);
											setUrl(password.url);
											setDescription(password.description);
										}}
									>
										<td className="hover:text-accent text-3xl transition-all duration-300">
											{password.name}
										</td>
										<td className="text-2xl">
											{password.username}
										</td>
										<td className="text-2xl">
											{password.date}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				<div className="overflow-x-hidden p-8 px-20 flex-1 h-[70vh] scroll-m-4 will-change-scroll scroll-smooth">
					<div className="flex items-center justify-between">
						<div className="text-5xl font-bold text-center text-base-content">
							Details
						</div>
						<button className="btn btn-primary btn-lg text-2xl" onClick={
							() => {
								// save the password
								// create a json obejct containing the new values of the password. 
								// send it to the server. 
							}
						}>
							Save
							<IconDeviceFloppy className="text-5xl text-primary-content h-8 w-8" />
						</button>
					</div>

					{/* textbox for name and username */}
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text text-xl">
								Password Name
							</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
							value={password}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					{/* textbox for password */}

					{/* textbox for url */}

					{/* textbox for description */}
					<textarea
						className="textarea textarea-secondary"
						placeholder="Bio"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
				</div>
			</div>
		</div>
	);
};

export default VaultContent;
