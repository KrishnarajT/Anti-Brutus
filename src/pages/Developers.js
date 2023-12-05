import React, { useEffect } from "react";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandWhatsapp,
  IconPhoneCall,
} from "@tabler/icons-react";
import { ThemeContext } from "../context/ThemeContext";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const Developers = ({ data }) => {
  const { theme } = React.useContext(ThemeContext);

  useEffect(() => {
    if (theme === "light") {
      const light_button = document.getElementById("light_button");
      light_button.click();
    } else {
      const dark_button = document.getElementById("dark_button");
      dark_button.click();
    }
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        id={`${data.image}`}
        className="w-44 h-44 md:w-72 md:h-72 m-8 rounded-full"
      ></div>
      <div className="text-4xl text-center">{data.name}</div>

      <div className="flex justify-center flex-col align-middle items-center w-96 flex-wrap">
        <div className="flex flex-wrap gap-4 m-4 justify-center mt-10">
          <button
            className="btn btn-neutral btn-circle btn-lg"
            onClick={() => {
              navigator.clipboard.writeText("+91 9834312135");
              const toast = document.querySelector(".toast");
              toast.classList.remove("hidden");
              setTimeout(() => {
                toast.classList.add("hidden");
              }, 2000);
            }}
          >
            <IconPhoneCall stroke={1} className="w-8 h-8" />
          </button>
          <button
            className="btn btn-neutral btn-circle btn-lg"
            onClick={() => {
              window.open(data.whatsapp, "_blank");
            }}
          >
            <IconBrandWhatsapp stroke={1} className="w-8 h-8" />
          </button>
          <button
            className="btn btn-neutral btn-circle btn-lg"
            onClick={() => {
              window.open("mailto:" + data.mail, "_blank");
            }}
          >
            <IconBrandGmail stroke={1} className="w-8 h-8" />
          </button>
          <button
            className="btn btn-neutral btn-circle btn-lg"
            onClick={() => {
              window.open(data.github, "_blank");
            }}
          >
            <IconBrandGithub stroke={1} className="w-8 h-8" />
          </button>
        </div>
      </div>
      <div className="toast toast-bottom toast-center duration-300 transform-gpu ease-in-out hidden md:toast-end">
        <div className="alert alert-success">
          <span className="flex items-center gap-4 text-2xl">
            <CheckBadgeIcon className="w-10 h-10" />
            Copied to Clipboard!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Developers;
