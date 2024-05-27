import React from "react";
import { hookContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Portada from "../assets/fotoPortada.png";
const Home = () => {
  const { user, setUser } = hookContext();
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser({
      name: "Polo",
      email: "polo@gmail.com",
    });
    navigate("/Dashboard");
  };

  return (
    <div className="bg-slate-50 min-h-[79vh] text-slate-200 flex flex-wrap justify-around p-3 items-center">
      <div className=" p-2">
        <div className="text-green-500 m-2">
          <h1 className="text-3xl md:text-7xl">PLANTILLA DE REACT</h1>
          <h1 className="text-5xl md:text-7xl">ROUTER 6.4</h1>
          <p className="p-0 mt-5 text-black text-xl">
            React Router 6.4 ofrece varias mejoras y características nuevas que
            pueden ser útiles para la gestión de rutas
          </p>
        </div>
        <div className="mt-10">
          <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span className="text-gray-950">
                Enrutamiento más inteligente
              </span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span className="text-gray-950">
                Reducción del tamaño del paquete y del código.{" "}
              </span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span className="text-gray-950">
                Protección de rutas y navegación.{" "}
              </span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span className="text-gray-950">
                Nuevas funciones en los formularios{" "}
              </span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span className="text-gray-950">
                Compatibilidad con los principios básicos de React.
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-20 mb-4">
          <button
            onClick={handleLogin}
            type="button"
            className="text-white w-[100%] bg-gray-800 dark:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login
          </button>
        </div>
      </div>
      <div className="mt-5 md:mt-0">
        <img
          className="w-[250px] md:w-[700px]"
          src={Portada}
          width="700px"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
