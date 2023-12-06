import React, { useEffect, useContext } from "react";
import Card from "../components/Card";
import {
  AcademicCapIcon,
  HashtagIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import { ThemeContext } from "../context/ThemeContext";
import { ReactComponent as PassSVGLight } from "../assets/undraw_fingerprint_login_re_t71l.svg";
import { ReactComponent as PassSVGDark } from "../assets/undraw_fingerprint_login_re_t71l.svg";

const GeneratorHome = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "light") {
      const lightButton = document.getElementById("light_button");
      lightButton.click();
    } else {
      const darkButton = document.getElementById("dark_button");
      darkButton.click();
    }
  }, [theme]);

  const random_text =
    "Create a totally random password by checking some boxes, and deciding what kind of password you want. This is perfect if you want a secure password for something that you aren't going to visit often, and will always have access to this website, or your generated password. ";
  const hashed_text =
    "Create a password that has the necessary symbols to be used on any site, but it will be the hash of a simpler password that you can remember. This is perfect for websites where you need a very secure password, that no one can guess, and you may not have access to this website. ";
  const master_text =
    "Create a password that will be based on a single master password that you will always remember. You can then add details about the respective website, and a hash combining both passwords will be generated. This is for websites where security is paramount, but you access it often. It is for those that are bad at remembering passwords. ";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-between p-8">
        <div
          className={`flex flex-col items-center lg:items-start align-middle justify-center ${
            theme === "light" ? "svgthing" : "svgthingdark"
          }`}
        >
          <div className="text-4xl lg:text-9xl titillium text-center lg:text-left">
            Generate your Own Secure Passwords!
          </div>
          <button
            className="btn btn-primary rounded-full mt-4 lg:mt-10 text-xl lg:text-5xl p-2 lg:p-6 w-32 lg:w-96 h-16 lg:h-32 rubik shadow-xl"
            onClick={() => {
              window.location.href = "#def";
            }}
          >
            Try
          </button>
        </div>
        {theme === "light" ? <PassSVGLight /> : <PassSVGDark />}
      </div>
      <div className="flex flex-col justify-center lg:justify-start p-4 m-2">
        <div className="text-base lg:text-3xl p-2 lg:p-4 w-full lg:w-3/6 text-center lg:text-left">
          Tired of using the same password for everything? Annoyed at having to
          add symbols and numbers to your passwords? Why not make your own
          unique password that is easy to remember and secure!
        </div>
      </div>
      <section id="def" className="py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 p-4 lg:justify-center">
          <Card
            id="randomcard"
            text={random_text}
            title={"Random"}
            icon={<QuestionMarkCircleIcon className="w-14 h-14" />}
          />
          <Card
            id="hashedcard"
            text={hashed_text}
            title={"Hashed"}
            icon={<HashtagIcon className="w-14 h-14" />}
          />
          <Card
            id="mastercard"
            text={master_text}
            title={"Master"}
            icon={<AcademicCapIcon className="w-14 h-14" />}
          />
        </div>
      </section>
    </div>
  );
};

export default GeneratorHome;
