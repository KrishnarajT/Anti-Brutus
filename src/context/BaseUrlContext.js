import { createContext, useState } from "react";

export const BaseUrlContext = createContext();

export const BaseUrlProvider = ({ children }) => {
	const [baseUrl, setBaseUrl] = useState("https://52c0-45-250-227-54.ngrok-free.app");

	return (
		<BaseUrlContext.Provider value={{ baseUrl, setBaseUrl }}>
			{children}
		</BaseUrlContext.Provider>
	);
};
