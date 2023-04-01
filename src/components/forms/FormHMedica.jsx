import React, { useState, useEffect } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const initialState = {
  padecimiento: '',
  medicamento: '',
  observaciones: ''
}

const FormHMedica = ({setForm}) => {

  const [datos, setDatos] = useState(initialState)

  useEffect(() =>{ //Si existe el objeto en sessionStorage, le asignamos su valor a la variable de datos
    if(sessionStorage.getItem('pacienteHMedica')){
      const pacienteHMedica = JSON.parse(sessionStorage.getItem('pacienteHMedica'))
      setDatos(pacienteHMedica)
    }
  }, [])


  function handleChange(e){
    const {name, value} = e.target
    setDatos({...datos, [name]: value})
  }

  function handleSubmit(e){
      if (e) e.preventDefault()
      sessionStorage.setItem('pacienteHMedica', JSON.stringify(datos))
  }

  function handleArrowClick(dir){ //Función para subir el formulario y redireccionar al hacer click en la flecha, pasamos la direccion de la flecha como parámetro
    handleSubmit()
    if(dir === 'left'){
      setForm('curricular')
    }else{
      setForm('verificar')
    }
  }

  function handleCancel(){
    setDatos(initialState)
  }

  const {padecimiento, medicamento, observaciones} = datos

  return (
    <>
      <button className="self-center justify-self-center text-4xl group" onClick={()=> handleArrowClick('left')}>
        <BsChevronLeft className=" group-hover:-translate-x-1.5 group-hover:scale-105 transition"/>
      </button>
      <form className="p-2 sm:p-6 pb-8 sm:border border-green-200 dark:border-zinc-600 rounded shadow col-span-8" onSubmit={handleSubmit}>
        <h1 className="text-lg sm:text-xl text-center mb-12">
          Historia médica
        </h1>
        <div className=" w-full grid grid-cols-2 gap-10">
          
          <div className="text-center px-4 col-span-2 sm:col-span-1">
            <label className="text-sm text-center">Padecimiento: </label>
            <br />
            <input
              type="text"
              placeholder="Padecimiento"
              className="form-input w-full"
              name="padecimiento"
              value={padecimiento}
              onChange={handleChange}
            />
          </div>
          <div className="text-center px-4 col-span-2 sm:col-span-1">
            <label className="text-sm text-center">Medicamento: </label>
            <br />
            <input
              type="text"
              placeholder="Medicamento"
              className="form-input w-full"
              name="medicamento"
              value={medicamento}
              onChange={handleChange}
            />
          </div>
          <div className="text-center px-4 col-span-2">
            <label className="text-sm text-center">Observaciones: </label>
            <br />
            <textarea
              placeholder="Observaciones"
              className="form-input w-full h-20 resize-none styled-scrollbar"
              name="observaciones"
              value={observaciones}
              onChange={handleChange}
            />
          </div>
          <div className='mt-2 col-span-2 text-center'>
              {/* <button className='btn btn-green mx-4 !px-6' type='submit'>Aceptar</button> */}
              <button className='btn btn-red mx-4 !px-6 mt-4 sm:mt-0' onClick={handleCancel}>Cancelar</button>
          </div>
        </div>
      </form>
      <button className="self-center justify-self-center text-4xl group" onClick={()=> handleArrowClick('right')}>
        <BsChevronRight className=" group-hover:translate-x-1.5 group-hover:scale-105 transition" />
      </button>  
    </>
  )
}

export default FormHMedica