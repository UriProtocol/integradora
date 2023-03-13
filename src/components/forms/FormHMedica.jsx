import React from 'react'
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs'

const FormHMedica = ({setForm}) => {
  return (
    <>
      <button className="self-center justify-self-start text-3xl" onClick={()=> setForm('curricular')}>
        <BsCaretLeft />
      </button>
      <form className="p-6 pb-8 border border-green-200 dark:border-zinc-600 rounded shadow col-span-8">
        <h1 className="text-xl w-fit mx-auto text-center px-3 pb-2 mb-10 text-green-900 dark:text-green-50 border-b border-green-600 dark:border-green-100">
          Historia médica
        </h1>
        <div className=" w-full grid grid-cols-2 gap-10">
          
          <div className="text-center px-4">
            <label className="text-sm text-center">Padecimiento: </label>
            <br />
            <input
              type="text"
              placeholder="padecimiento"
              className="mt-3 py-1.5 px-4 bg-green-50 dark:bg-zinc-700 border-b rounded-t border-green-500 dark:border-zinc-400 text-green-900 dark:text-green-50 placeholder:text-green-600 dark:placeholder:text-zinc-400 focus:outline-none w-full"
            />
          </div>
          <div className="text-center px-4">
            <label className="text-sm text-center">Medicamento: </label>
            <br />
            <input
              type="text"
              placeholder="medicamento"
              className="mt-3 py-1.5 px-4 bg-green-50 dark:bg-zinc-700 border-b rounded-t border-green-500 dark:border-zinc-400 text-green-900 dark:text-green-50 placeholder:text-green-600 dark:placeholder:text-zinc-400 focus:outline-none w-full"
            />
          </div>
          <div className="text-center px-4 col-span-2">
            <label className="text-sm text-center">Observaciones: </label>
            <br />
            <textarea
              placeholder="observaciones"
              className="mt-3 py-1.5 px-4 bg-green-50 dark:bg-zinc-700 border-b rounded-t border-green-500 dark:border-zinc-400 text-green-900 dark:text-green-50 placeholder:text-green-600 dark:placeholder:text-zinc-400 focus:outline-none w-full resize-none"
            />
          </div>
          <div className='col-span-2 mt-4 text-center'>
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