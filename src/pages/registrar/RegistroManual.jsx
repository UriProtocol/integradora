import React from 'react'
import {BsFillHeartPulseFill} from 'react-icons/bs'
import {TbTemperatureCelsius} from 'react-icons/tb'
import {SiOxygen} from 'react-icons/si'


const RegistroManual = () => {

  function handleSubmit(e){
    e.preventDefault()
  }
  
  return (
    <>
    <div className='container'>
      <h1 className='container-title mb-6'>Agregar registro</h1>
      <form className=" p-6 pb-8 mb-2 border border-green-200 dark:border-zinc-600 rounded shadow grid grid-cols-3 gap-4 gap-y-10 w-11/12 mx-auto" onSubmit={handleSubmit}>

        <div className='col-span-3 grid grid-cols-2 gap-4'>
          <div className='text-center'>
            <label>Fecha</label><br />
            <input className='form-input w-3/4' value={new Date().toLocaleDateString()}/>
          </div>
          <div className='text-center'>
            <label>Alumno</label><br />
            <select className='form-input w-3/4'>
              <option>Ángel Uriel González Urrutia</option>
            </select>
          </div>
        </div>
        <div className='text-center'>
          <label htmlFor=''>Oximetría <SiOxygen className='inline-block ml-3 text-xl'/></label><br />
          <input type='number' placeholder='95' className='form-input w-3/4'/>
        </div>
        <div className='text-center'>
          <label htmlFor=''>Presión arterial <BsFillHeartPulseFill className='inline-block ml-3 text-xl'/></label><br />
          <input type='number' placeholder='110' className='form-input w-3/4'/>
        </div>
        <div className='text-center'>
          <label htmlFor=''>Temperatura</label> <TbTemperatureCelsius className='inline-block ml-3 text-xl'/><br />
          <input type='number' placeholder='37' className='form-input w-3/4'/>
        </div>
        <div className='text-center col-span-3'>
          <label htmlFor=''>Observaciones</label> <TbTemperatureCelsius className='inline-block ml-3 text-xl'/><br />
          <textarea placeholder='Observaciones' className='form-input h-16 resize-none !text-justify w-5/6 styled-scrollbar'/>
        </div>
        <div className='col-span-3 text-center'>
              <button className='btn btn-green mx-4 !px-6' type='submit'>Aceptar</button>
              <button className='btn btn-red mx-4 !px-6'>Cancelar</button>
          </div>

      </form>
    </div>
    </>
  )
}

export default RegistroManual
