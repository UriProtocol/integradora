import React, { useEffect, useState } from "react";
import { BsEye, BsPen, BsTrash } from "react-icons/bs";
import { AiOutlineLoading } from "react-icons/ai";
import axios from "axios";

const VisualizarPacientes = () => {
  const [pacientes, setPacientes] = useState();

  useEffect(() => {
    getPacientes();
  }, []);

  async function getPacientes() {
    const pacientesVal = await axios.get("http://127.0.0.1:5000/pacientes");
    setPacientes(pacientesVal.data);
  }

  const tableRows = pacientes ? pacientes.map(p => (
    <tr>
       <td className="py-2">{p.nombre}</td> 
       <td className="py-2">{p.apellido}</td> 
       <td className="py-2">{p.edad}</td> 
       <td className="py-2">{p.carrera}</td> 
       <td className="py-2">{p.cuatrimestre ? p.cuatrimestre + ' °' : ''} {p.grupo}</td> 
       <td className="py-2">
        <button className='btn btn-red m-2'><BsTrash /></button>
        <button className='btn btn-teal m-2'><BsEye /></button>
        <button className='btn btn-blue m-2'><BsPen /></button>
       </td>
    </tr>
  )) : (
    <tr>
      <td className="py-14 text-center" colSpan="100%">
        <AiOutlineLoading className=" text-center text-6xl animate-spin inline-block" />
      </td>
    </tr>
  );

  return (
    <>
      <div className="container !py-10">
        <h1 className="container-title mb-5">Lista de pacientes</h1>
        {/* <hr className='my-2 w-1/2  mx-auto'/> */}
        <div className=" overflow-x-auto w-11/12 mx-auto mt-8 styled-scrollbar">
          <table className="table-auto rounded w-full min-w-max text-center">
            <thead className="border-b border-green-300 dark:border-zinc-400">
              <tr className="hover:bg-green-50 dark:hover:bg-zinc-700 transition text-xs sm:text-base">
                <th className="p-2">Nombre</th>
                <th className="p-2">Apellido</th>
                <th className="p-2">Edad</th>
                <th className="p-2">Carrera</th>
                <th className="p-2">Grado y grupo</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default VisualizarPacientes;
