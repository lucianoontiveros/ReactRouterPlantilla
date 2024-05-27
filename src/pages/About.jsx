import React from "react";
import Portada from "../assets/fotoPortada_about.png";
import reactSvg from "../assets/react.svg";
import viteSvg from "../assets/vitejs.svg";
import flowbiteSgv from "../assets/flowbite.svg";

const About = () => {
  return (
    <div className="bg-slate-50 min-h-[79vh] flex flex-col items-center justify-around md:flex-row md:flex-wrap-reverse py-7">
      <div
        id="Cards"
        className="flex flex-col justify-around "
      >
        <div>
          {" "}
          <a
            href="https://vitejs.dev/"
            target="_blank"
            className="flex flex-col items-center md:flex-row md:max-w-xl hover:bg-gray-100 mb-5"
          >
            <img
              className="object-cover  rounded-t-lg h-28 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={viteSvg}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <p className="mb-3 font-normal text-gray-700">
                <spam className="mx-2 font-bold"> Vite.js:</spam>
                Es una herramienta veloz de desarrollo de proyectos web
                modernos. Se enfoca en la velocidad, el desempeño y mejora la
                experiencia del desarrollador. Vite usa las importaciones
                nativas ES (ECMA Script) del navegador para habilitar el soporte
                a navegadores modernos sin la necesidad de un proceso de
                compilación.
              </p>
            </div>
          </a>
        </div>

        <div>
          {" "}
          <a
            href="https://es.react.dev/"
            target="_blank"
            className="flex flex-col items-center md:flex-row md:max-w-xl hover:bg-gray-100 mb-5"
          >
            <img
              className="object-cover  rounded-t-lg h-28 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={reactSvg}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <p className="mb-3 font-normal text-gray-700">
                <spam className="mx-2 font-bold">React:</spam>
                Es una biblioteca de JavaScript de código abierto para construir
                interfaces de usuario. Está basada en la componetización de la
                UI: la interfaz se divide en componentes independientes, que
                contienen su propio estado.
              </p>
            </div>
          </a>
        </div>

        <div>
          {" "}
          <a
            href="https://flowbite.com/"
            target="_blank"
            className="flex flex-col items-center md:flex-row md:max-w-xl hover:bg-gray-100 mb-5"
          >
            <img
              className="object-cover  rounded-t-lg h-28 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={flowbiteSgv}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <p className="mb-3 font-normal text-gray-700">
                <spam className="mx-2 font-bold">FlowBite:</spam>
                Es una colección de código abierto de elementos de interfaz de
                usuario basada en el marco CSS Tailwind. Proporciona un conjunto
                robusto de tokens de diseño y componentes que facilitan la
                creación de aplicaciones web y móviles.
              </p>
            </div>
          </a>
        </div>
      </div>

      <div id="Portada_about">
        <img
          src={Portada}
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
