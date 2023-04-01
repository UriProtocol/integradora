import React, { useEffect, useState } from "react";
import { BsCaretRight, BsChevronRight } from "react-icons/bs";

const initialState = {
  nombre: '',
  apellido: '',
  genero: '',
  edad: ''
}

const FormPacienteGeneral = ({setForm}) => {

  const [datos, setDatos] = useState(initialState)

  useEffect(() =>{ //Si existe el objeto en sessionStorage, le asignamos su valor a la variable de datos
    if(sessionStorage.getItem('pacienteGeneral')){
      const pacienteGeneral = JSON.parse(sessionStorage.getItem('pacienteGeneral'))
      setDatos(pacienteGeneral)
    }
  }, [])

  function handleSubmit(e){ //Al subir el formulario, la información se guarda en sessionStorage
    if(e) e.preventDefault() //Si hacemos click en la flecha, no se ejecutará e.preventDefault
    sessionStorage.setItem('pacienteGeneral', JSON.stringify(datos))
  }
  function handleArrowClick(){ //Función para subir el formulario y redireccionar al hacer click en la flecha
    handleSubmit()
    setForm('curricular')
  }

  function handleChange(e){
    const {name, value} = e.target
    setDatos({...datos, [name]: value})
  }
  function handleCancel(){
    setDatos(initialState)
  }

  const {nombre, apellido, edad, genero, } = datos

  return (
    <>
     <div></div>
      <form className=" p-2 sm:p-6 pb-8 sm:border border-green-200 dark:border-zinc-600 rounded shadow col-span-8" onSubmit={handleSubmit}>
        <h1 className="text-lg sm:text-xl text-center mb-12">
          Información general
        </h1>
        <div className=" w-full grid sm:grid-cols-2 gap-10">
          <div className="text-center px-4 col-span-2 sm:col-span-1">
            <label className=" text-center">Nombre(s): </label>
            <br />
            <input
              type="text"
              placeholder="Juan Pablo"
              className="form-input w-full"
              name="nombre"
              value={nombre}
              onChange={handleChange}
            />
          </div>
          <div className="text-center px-4 col-span-2 sm:col-span-1">
            <label className=" text-center">Apellido(s): </label>
            <br />
            <input
              type="text"
              placeholder="Contreras Vasquez"
              className="form-input w-full"
              name="apellido"
              value={apellido}
              onChange={handleChange}
            />
          </div>
          <div className="text-center px-4 col-span-2 sm:col-span-1">
            <label className=" text-center">Género: </label>
            <br />
            <select className="form-input w-3/4" name="genero" value={genero} onChange={handleChange}>
              <option value="">----</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div className="text-center px-4 col-span-2 sm:col-span-1">
            <label className=" text-center">Edad: </label>
            <br />
            <input
              type="number"
              placeholder="18"
              className="form-input w-3/4"
              name="edad"
              value={edad}
              onChange={handleChange}
            />
          </div>
          <div className='mt-2 col-span-2 text-center'>
              {/* <button className='btn btn-green mx-4 !px-6' type='submit'>Aceptar</button> */}
              <button className='btn btn-red mx-4 !px-6 mt-4 sm:mt-0' onClick={handleCancel}>Cancelar</button>
          </div>
        </div>
      </form>
      <button className="self-center justify-self-center text-4xl group" onClick={()=> handleArrowClick()}>
        <BsChevronRight className=" group-hover:translate-x-1.5 group-hover:scale-105 transition" />
      </button>
    </>
  );
};

export default FormPacienteGeneral;
