import React, { useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../css/About.css";
import Developers from "./Developers";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const developers = [
  {
    name: "Krishnaraj Thadesar",
    github: "https://www.github.com/KrishnarajT",
    phone: "+91 9834312135",
    whatsapp: "https://wa.link/zu05s5",
    mail: "mailto:kpt.krishnaraj@gmail.com",
    image: "krishnaraj",
  },
  {
    name: "Sourab Karad",
    github: "https://github.com/sourab777karad",
    phone: "+91 6281819844",
    whatsapp: "https://wa.me/qr/XXI2PFLHKZH6G1",
    mail: "mailto: karadsaisourab9@gmail.com",
    image: "karad",
  },
  {
    name: "Parth Zarekar",
    github: "https://github.com/Parth4123",
    phone: "+91 8796180288",
    whatsapp: "https://wa.link/biyqac",
    mail: "mailto:parthzarekar@gmail.com",
    image: "parth",
  },
  {
    name: "Saubhagya Singh",
    github: "https://www.github.com/SaubhagyaSingh",
    phone: "+91 7007084088",
    whatsapp: "https://wa.link/vphagl",
    mail: "mailto: saubhagyasingh65@gmail.com",
    image: "saubhagya",
  },
];

const About = () => {
  const { theme } = React.useContext(ThemeContext);

  useEffect(() => {
    const themeButton =
      theme === "light"
        ? document.getElementById("light_button")
        : document.getElementById("dark_button");
    themeButton.click();
  }, [theme]);

  return (
    <div>
      <div
        className="flex justify-center p-2 flex-col align-middle items-center md:p-4"
        id="how"
      >
        <div className="mt-6 text-base-content text-4xl p-2 text-center rounded-full px-12 outline-secondary mb-6 outline md:text-6xl md:mb-12 md:mt-12">
          Developers
        </div>
        <div className="flex flex-wrap gap-12 items-center justify-center align-middle mx-2 md:mx-10 md:gap-16">
          {developers.map((dev, index) => (
            <Developers key={index} data={dev} />
          ))}

        </div>

        <div className="text-base-content text-5xl p-4 text-center rounded-full px-16 outline-secondary outline m-20 md:text-6xl">
          Credits and Thanks
        </div>
        <div className="text-base-content text-2xl p-4 bg-base-200 rounded-3xl flex flex-col items-center outline mb-16 text-center md:text-3xl">
          Huge thanks to DaisyUI for the CSS framework, and Heroicons for the
          icons. Here are the links:
          <br />

          <div className="flex m-2 p-2 flex-wrap md:m-4 md:p-4">
            <a
              href="https://daisyui.com/"
              className="ml-16 outline rounded-full m-3 p-4 w-44 text-center self-center hover:bg-neutral hover:text-neutral-content md:w-48 md:ml-8"

            >
              {" "}
              DaisyUI{" "}
            </a>
            <br></br>
            <a
              href="https://heroicons.com/"
              className="ml-16 outline rounded-full m-3 p-4 w-44 text-center self-center hover:bg-neutral hover:text-neutral-content md:w-48 md:ml-8"
            >
              {" "}
              Hero Icons{" "}
            </a>
            <a
              href="https://tabler-icons.io/"
              className=" ml-16 outline rounded-full m-3 p-4 w-44 text-center self-center hover:bg-neutral hover:text-neutral-content md:w-48 md:ml-8"
            >
              {" "}
              Tabler Icons{" "}
            </a>
            <a
              href="https://www.tailwindcss.com/"
              className="ml-16 outline rounded-full m-3 p-4 w-44 text-center self-center hover:bg-neutral hover:text-neutral-content md:w-48 md:ml-8"
            >
              {" "}
              TailwindCSS{" "}
            </a>
            <a
              href="https://react.dev/"
              className=" ml-16 outline rounded-full m-3 p-4 w-44 text-center self-center hover:bg-neutral hover:text-neutral-content md:w-48 md:ml-8"
            >
              DaisyUI
            </a>
            {/* Add other links here */}
          </div>
          This project was made as a part of the assignments for Full Stack
          Development Course at MIT WPU.
          <br />
          We are grateful to our teachers, and our parents for encouraging us to
          keep trying new stuff, without any restrictions.
          <br />
          None of this would be possible without their help.
          <br />
          <br />
          We are also grateful to our friends, for their inputs on the looks and
          features of the website, and for constantly encouraging us to keep
          going.
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

export default About;
