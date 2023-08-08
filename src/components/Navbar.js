import React, { useEffect, useContext } from "react";
import "../input.css";
import "../style.css";
import { themeChange } from "theme-change";
import { ThemeContext } from "../context/ThemeContext";

import {
  SunIcon,
  MoonIcon,
  AcademicCapIcon,
  HashtagIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export function Navbar() {
  useEffect(() => {
    themeChange(false);
  }, []);

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="navbar bg-secondary rounded-xl text-secondary-content h-24">
      <div className="">
        <NavLink to={"/"}>
          <a className="btn btn-ghost normal-case text-2xl" href=".">
            Password Gen
          </a>
        </NavLink>
      </div>
      <div className="flex-row justify-center flex-1 ">
        <ul className="menu menu-horizontal px-1 first-letter:text-2xl">
          <li className="text-2xl">
            <NavLink to={"/random"} id="contact_element">
              <QuestionMarkCircleIcon className="w-8 h-8" />
              Random
            </NavLink>
          </li>
          <li className="text-2xl">
            <NavLink to={"/hashed"} id="contact_element">
              <HashtagIcon className="w-8 h-8" />
              Hashed
            </NavLink>
          </li>
          <li className="text-2xl">
            <NavLink to={"/master"} id="contact_element">
              <AcademicCapIcon className="w-8 h-8" />
              Master
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul className="menu menu-horizontal px-1 text-secondary-content">
          <li className="text-2xl">
            <NavLink to={"/about"} id="contact_element">
              <InformationCircleIcon className="w-8 h-8" />
              About
            </NavLink>
          </li>
          <li>
            <details>
              <summary className="text-2xl">Theme</summary>
              <ul className="p-1 text-base-content">
                <li
                  data-set-theme="cupcake"
                  className="text-xl p-2"
                  onClick={() => setTheme("light")}
                >
                  <a>
                    <SunIcon className="w-8 h-8" />
                    Light
                  </a>
                </li>
                <li className="text-xl p-2" onClick={() => setTheme("dark")}>
                  <a data-set-theme="dracula">
                    <MoonIcon className="w-8 h-6" />
                    Dark
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
