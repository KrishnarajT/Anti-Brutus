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
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.facebook.com/&size=128",
		},
		{
			id: 2,
			name: "Instagram",
			username: "username",
			password: "password",
			url: "https://instagram.com",
			description: "The place for your passwords",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.instagram.com/&size=128",
		},
		{
			id: 3,
			name: "Google",
			username: "username",
			password: "password",
			url: "https://google.com",
			description: "The place for your passwords",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://google.com&size=128",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://twitter.com&size=128",
		},
		{
			id: 3,
			name: "Icones",
			username: "username",
			password: "password",
			url: "https://icones.js.org/",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://icones.js.org&size=128",
		},
		{
			id: 3,
			name: "Whatsapp",
			username: "username",
			password: "password",
			url: "https://web.whatsapp.com/",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://web.whatsapp.com/&size=128",
		},
		{
			id: 3,
			name: "Chat GPT",
			username: "username",
			password: "password",
			url: "https://chat.openai.com/",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://chat.openai.com/&size=128",
		},
		{
			id: 3,
			name: "Amazon",
			username: "username",
			password: "password",
			url: "https://www.amazon.in/",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.amazon.in/&size=128",
		},
		{
			id: 3,
			name: "Github",
			username: "username",
			password: "password",
			url: "https://github.com",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://github.com&size=128",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://google.com&size=128",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://google.com&size=128",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://google.com&size=128",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://google.com&size=128",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://google.com&size=128",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://google.com&size=128",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://google.com&size=128",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://google.com&size=128",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://google.com&size=128",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://google.com&size=128",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://google.com&size=128",
		},
		{
			id: 3,
			name: "Twitter",
			username: "username",
			password: "password",
			url: "https://twitter.com",
			description: "Safely Store your cards",
			date: "12/12/12",
			icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://google.com&size=128",
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
						<IconSearch className="text-5xl text-base-content h-7 w-7" />
					</div>
					<input
						type="text"
						placeholder="Search"
						className="text-2xl h-14 w-full rounded-2xl border-none outline-none bg-transparent"
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
								<th></th>
								<th>Name</th>
								<th>Username</th>
								<th>Date</th>
							</tr>
						</thead>
						<tbody className="">
							{passwords.map((password) => {
								return (
									<tr
										className="h-16 transition-all duration-200 transform-gpu hover:bg-base-200 hover:cursor-pointer border-base-content"
										onClick={() => {
											setSelectedPassword(password);
											// set values as well from this password.
											setName(password.name);
											setUsername(password.username);
											setPassword(password.password);
											setUrl(password.url);
											setDescription(
												password.description
											);
										}}
									>
										<td>
											<img
												src={password.icon}
												className="h-12 w-12 rounded-full outline outline-2 outline-offset-2 outline-primary"
												alt=""
											/>
										</td>
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
							Details {selected_password ? selected_password.name : null}
						</div>
						<button
							className="btn btn-primary btn-lg text-2xl"
							onClick={() => {
								// save the password
								// create a json obejct containing the new values of the password.
								// send it to the server.
							}}
						>
							Save
							<IconDeviceFloppy className="text-5xl text-primary-content h-8 w-8" />
						</button>
					</div>

					{/* textbox for name and username */}
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text text-xl">Name</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text text-xl">UserName</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					{/* textbox for password */}
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text text-xl">Password</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
							value={password}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>

					{/* textbox for url */}
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text text-xl">url</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
							value={url}
							onChange={(e) => setUrl(e.target.value)}
						/>
					</div>

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
