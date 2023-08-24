import { createContext, useState } from "react";

export const BaseUrlContext = createContext();

export const BaseUrlProvider = ({ children }) => {
	const [baseUrl, setBaseUrl] = useState("http://localhost:3000");

	return (
		<BaseUrlContext.Provider value={{ baseUrl, setBaseUrl }}>
			{children}
		</BaseUrlContext.Provider>
	);
};
