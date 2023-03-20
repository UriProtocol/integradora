import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'

const FormHMedica = ({setForm}) => {

    function handleSubmit(e){
        e.preventDefault()
    }

  return (
    <>
      <button className="self-center justify-self-center text-4xl group" onClick={()=> setForm('curricular')}>
        <BsChevronLeft className=" group-hover:-translate-x-1.5 group-hover:scale-105 transition"/>
      </button>
      <form className="p-6 pb-8 border border-green-200 dark:border-zinc-600 rounded shadow col-span-8" onSubmit={handleSubmit}>
        <h1 className="text-xl text-center mb-12">
          Historia médica
        </h1>
        <div className=" w-full grid grid-cols-2 gap-10">
          
          <div className="text-center px-4">
            <label className="text-sm text-center">Padecimiento: </label>
            <br />
            <input
              type="text"
              placeholder="padecimiento"
              className="form-input w-full"
            />
          </div>
          <div className="text-center px-4">
            <label className="text-sm text-center">Medicamento: </label>
            <br />
            <input
              type="text"
              placeholder="medicamento"
              className="form-input w-full"
            />
          </div>
          <div className="text-center px-4 col-span-2">
            <label className="text-sm text-center">Observaciones: </label>
            <br />
            <textarea
              placeholder="observaciones"
              className="form-input w-full h-20 resize-none styled-scrollbar"
            />
          </div>
          <div className='mt-2 col-span-2 text-center'>
              <button className='btn btn-green mx-4 !px-6' type='submit'>Aceptar</button>
              <button className='btn btn-red mx-4 !px-6' type='reset'>Cancelar</button>
          </div>
        </div>
      </form>
      {/* <button className="self-center justify-self-end text-3xl" onClick={()=> setForm('hmedica')}>
        <BsCaretRight />
      </button>    */}
    </>
  )
}

export default FormHMedica