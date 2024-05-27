import React from "react";
import gitHubSvg from "../assets/github.svg";
import reactSvg from "../assets/react.svg";
import viteSvg from "../assets/vitejs.svg";
import flowbiteSgv from "../assets/flowbite.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 absolute bottom-auto w-full">
      <div className="max-w-screen-xl mx-auto p-5 flex justify-center items-center">
        <a
          href="https://es.react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="m-1"
            src={reactSvg}
            width="50px"
            alt="Logo React"
          />
        </a>
        <a
          href="https://github.com/lucianoontiveros"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="m-1"
            src={gitHubSvg}
            width="50px"
            alt="Logo Github"
          />
        </a>
        <a
          href="https://vitejs.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="m-1"
            src={viteSvg}
            width="50px"
            alt="Logo Vite"
          />
        </a>
        <a
          href="https://flowbite.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="m-1"
            src={flowbiteSgv}
            width="50px"
            alt="Logo Flowbite"
          />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
