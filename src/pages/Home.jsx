import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineTeam, AiOutlineArrowRight, AiOutlineDiff, AiOutlineQuestionCircle, AiOutlineLoading } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import ModalEliminar from "../components/modals/ModalEliminar";


const Home = () => {
  const [mensaje, setMensaje] = useState("");
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [pacientes, setPacientes] = useState("");
  const [registros, setRegistros] = useState("");

  const navigate = useNavigate()

  useEffect(() => {
    const getCurrentHour = () => {
      const now = new Date();
      const hour = now.getHours();
      return hour;
    };

    const updateImageSrc = () => {
      const hour = getCurrentHour();
      console.log(hour)

      if (hour >= 0 && hour < 6) {
        setMensaje("Buenas noches!"); // Mensaje para la imagen de la noche
      } else if (hour >= 6 && hour < 12) {
        setMensaje("Buenos dias!"); // Mensaje para la imagen de la noche
      } else if (hour >= 12 && hour < 19) {
        setMensaje("Buenas tardes!"); // Mensaje para la imagen de la noche
      } else {
        setMensaje("Buenas noches!"); // Mensaje para la imagen de la noche
      }
    };


    const fetchData = async () => {
      try {
        const response = await axios.get('https://pruebasint323.fly.dev/pacientes');
        const response2 = await axios.get('https://pruebasint323.fly.dev/registros');
        const pacientesNumber = response.data.length;
        const registrosNumber = response2.data.length;
        setPacientes(pacientesNumber);
        setRegistros(registrosNumber);
      } catch (error) {
        console.log(error);
      }
    };

    updateImageSrc();

    // Configuramos el intervalo para llamar a fetchData() cada 1000 ms (1 segundo)
    const interval = setInterval(fetchData, 1000);

    // Limpiamos el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  function handleAgregar() {
    navigate('registrar/automatico')
  }

  function handleNewPaciente() {
    navigate('registrar/paciente')
  }

  function handlePacientes() {
    navigate('visualizar/pacientes')
  }

  function handleRegistros() {
    navigate('visualizar/registros')
  }

  return (
 
    
    <div className="grid grid-cols-2  gap-6 gap-x-12 w-full h-full items-center p-8 lg:p-16">
      {/* Mensaje en el lado izquierdo */}
      <div className="flex flex-col animate-appear-up">
        <h1 className="text-dark text-4xl sm:text-4xl 2xl:text-5xl">{mensaje}</h1>
      </div>

      {/* Botón en el lado derecho */}
      <div className="flex justify-end opacity-0 animate-home-buttons-appear">
        <button onClick={handleAgregar} className="shadow-lg btn btn-green px-6 py-3 rounded-md text-lg sm:px-4 flex items-center gap-1 mr-5">
          <p className="cursor-pointer"><AiOutlinePlus className="inline-block transform -translate-x-1 mb-1" /> Nuevo registro</p>
        </button>

        <button onClick={handleNewPaciente} className="shadow-lg btn btn-blue px-6 py-3 rounded-md text-lg sm:px-4 flex items-center gap-1">
          <p className="cursor-pointer"><AiOutlinePlus className="inline-block transform -translate-x-1 mb-1" /> Nuevo paciente</p>
        </button>
      </div>

      {/* PRIMERA CARTA */}
      <div className="fondo p-8 2xl:p-14 rounded-md shadow flex -mt-10 2xl:-mt-60 opacity-0 animate-card-left-appear">
        {/* Contenido de la primera carta */}
        <AiOutlineTeam className="w-20 h-20 2xl:w-32 2xl:h-32 mr-10 2xl:mr-14" />
        <div className="flex flex-col">
          <p className="dark:text-gray-500 text-green-900 text-xl sm:text-2xl 2xl:text-3xl dark:font-medium">Número de pacientes</p>
          <h1 className="dark:text-white text-green-600 font-bold text-3xl sm:text-4xl mb-4 2xl:text-5xl">{pacientes ? pacientes : <AiOutlineLoading className="animate-spin text-3xl mt-3"/>}</h1>
          <p className="mas cursor-pointer font-bold 2xl:text-xl" onClick={handlePacientes}>Ver todos <AiOutlineArrowRight className="inline-block hover:translate-x-1.5 hover:scale-105 transition" /></p>
        </div>
      </div>

      {/* SEGUNDA CARTA */}
      <div className="fondo p-8 2xl:p-14 rounded-md shadow flex -mt-10 2xl:-mt-60 opacity-0 animate-card-right-appear">
        {/* Contenido de la segunda carta */}
        <AiOutlineDiff className="w-20 h-20 2xl:w-28 2xl:h-28 mr-10 2xl:mr-14" />
        <div className="flex flex-col">
          <p className=" dark:text-gray-500 text-green-900 text-xl sm:text-2xl 2xl:text-3xl dark:font-medium">Número de registros</p>
          <h1 className="dark:text-white text-green-600 font-bold text-3xl sm:text-4xl mb-4 2xl:text-5xl">{registros ? registros : <AiOutlineLoading className="animate-spin text-3xl mt-3"/>}</h1>
          <p className="mas cursor-pointer font-bold 2xl:text-xl" onClick={handleRegistros}>Ver todos <AiOutlineArrowRight className="inline-block hover:translate-x-1.5 hover:scale-105 transition" /></p>
        </div>

      </div>

      {/* TERCERA CARTA */}
      <div className="fondo col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 p-5 2xl:p-10 rounded-md shadow -mt-16 2xl:-mt-80 opacity-0 animate-card-bottom-appear" style={{ gridColumn: "span 2 / span 1" }}>
        {/* Contenido de la tercera carta */}
        <h1 className="dark:text-gray-500 text-green-600 text-xl sm:text-2xl 2xl:text-3xl mb-5 dark:font-medium">¿Necesitas ayuda?</h1>
        <p className="text-black dark:text-white text-lg sm:text-lg 2xl:text-2xl mb-5">Tenemos para ti la seccion de ayuda, no dudes en usarla si te encuentras atascado en el sistema</p>
        <p className="mas cursor-pointer font-bold 2xl:text-xl" onClick={handleRegistros}>Ayuda <AiOutlineArrowRight className="inline-block hover:translate-x-1.5 hover:scale-105 transition" /></p>
      </div>
      <ModalEliminar nombre={"Ángel Uriel"} tipo={"registro"} fecha={"13-04-2023"} />
    </div>


  );
};

export default Home;