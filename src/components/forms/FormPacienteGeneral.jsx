import React from "react";
import { BsCaretRight, BsChevronRight } from "react-icons/bs";

const FormPacienteGeneral = ({setForm}) => {

     function handleSubmit(e){
        e.preventDefault()
    }

  return (
    <>
     <div></div>
      <form className=" p-6 pb-8 border border-green-200 dark:border-zinc-600 rounded shadow col-span-8" onSubmit={handleSubmit}>
        <h1 className="text-xl text-center mb-12">
          Información general
        </h1>
        <div className=" w-full grid grid-cols-2 gap-10">
          <div className="text-center px-4">
            <label className=" text-center">Nombre(s): </label>
            <br />
            <input
              placeholder="Juan Pablo"
              className="form-input w-full"
            />
          </div>
          <div className="text-center px-4">
            <label className=" text-center">Apellido(s): </label>
            <br />
            <input
              placeholder="Contreras Vasquez"
              className="form-input w-full"
            />
          </div>
          <div className="text-center px-4">
            <label className=" text-center">Género: </label>
            <br />
            <select className="form-input w-3/4">
              <option>Masculino</option>
              <option>Femenino</option>
              <option>Otro</option>
            </select>
          </div>
          <div className="text-center px-4">
            <label className=" text-center">Edad: </label>
            <br />
            <input
              type="number"
              placeholder="18"
              className="form-input w-3/4"
            />
          </div>
          <div className='mt-2 col-span-2 text-center'>
              <button className='btn btn-green mx-4 !px-6' type='submit'>Aceptar</button>
              <button className='btn btn-red mx-4 !px-6'>Cancelar</button>
          </div>
        </div>
      </form>
      <button className="self-center justify-self-center text-4xl group" onClick={()=> setForm('curricular')}>
        <BsChevronRight className=" group-hover:translate-x-1.5 group-hover:scale-105 transition" />
      </button>
    </>
  );
};

export default FormPacienteGeneral;
