import React from "react";
import { hookContext } from "../context/UserContext";
import { Card } from "flowbite-react";
import { Progress } from "flowbite-react";
import foto_perfil from "../assets/fotoPerfil.png";
import gatoPortada from "../assets/gatoPortada.png";
import equipoPortada from "../assets/equipoPortada.png";
import equipo1 from "../assets/equipo_1.png";
import equipo2 from "../assets/equipo_2.png";
import equipo3 from "../assets/equipo_3.png";
import equipo4 from "../assets/equipo_4.png";

const Dashboard = () => {
  const { user } = hookContext();
  return (
    <div
      id="dasboard_contenedor"
      className="bg-slate-50 min-h-[79vh] text-slate-200 flex justify-around flex-wrap"
    >
      <div
        id="dasboard_usuario"
        className="flex flex-col items-center max-w-[320px] px-4 pt-4 text-sky-700"
      >
        <Card className="w-full min-w-[300px] p-2">
          <div className="flex flex-col items-center pb-10">
            <img
              alt="Bonnie image"
              height="130"
              src={foto_perfil}
              width="130"
              className="mb-3 rounded-full shadow-lg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900">
              {user.name}
            </h5>
            <span className="text-sm 0">{user.email}</span>
            <span className="text-xs text-black px-4 pt-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quas repellendus alias dolor, a dolorem magni? Quidem, sint, dolor
              iste ullam eius quas suscipit harum, obcaecati aperiam
              consequuntur placeat inventore.
            </span>
          </div>
        </Card>
        <div className="pt-5 w-full">
          <input
            type="text"
            placeholder="Buscar..."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="pt-5 w-full">
          <Progress
            progress={50}
            textLabel="Flowbite"
            size="lg"
            labelProgress
            labelText
          />
        </div>
      </div>

      <div className="flex flex-col mt-5 ">
        <Card
          className="w-full  mb- 2"
          imgSrc={equipo1}
          horizontal
        >
          <div className="p-3">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </Card>

        <Card
          className="w-full mb-2 "
          imgSrc={equipo2}
          height="200px"
          horizontal
        >
          <div className="p-3">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </Card>

        <Card
          className="w-full mb-2 "
          imgSrc={equipo3}
          height="200px"
          horizontal
        >
          <div className="p-3">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </Card>

        <Card
          className="w-full mb-2 "
          imgSrc={equipo4}
          height="200px"
          horizontal
        >
          <div className="p-3">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </Card>
      </div>

      <div className="flex flex-col justify-around">
        <div>
          height="200px"
          <Card
            className="max-w-xs"
            renderImage={() => (
              <img
                width={600}
                height={400}
                src={equipoPortada}
                alt="image 1"
              />
            )}
          >
            <div className="p-2">
              <h5 className="text-xl font-bold tracking-tight text-gray-900">
                Nuestro Equipo está listo para ayudarte.
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam animi iure, consectetur non alias dolorum? Quo atque,
                eum exercitationem soluta magni, a rerum quis quaerat dolore
                ipsum natus corrupti ut.
              </p>
            </div>
          </Card>
        </div>
        <div>
          <img
            width={300}
            height={400}
            src={gatoPortada}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
