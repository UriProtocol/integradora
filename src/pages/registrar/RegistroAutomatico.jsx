import React from 'react'
import {BsFillHeartPulseFill} from 'react-icons/bs'
import {TbTemperatureCelsius} from 'react-icons/tb'
import {SiOxygen} from 'react-icons/si'
import { DateTime } from 'luxon'

function BarraCircular({id, name}){

  const svgStyles = {
    width: '8rem',
    height: '8rem',
    marginInline: 'auto',
    marginTop: '-4rem'
  }

  return(
    <>
      <svg viewBox="0 0 100 100" style={svgStyles}>
        <g fill="none" stroke="#ddd">
          <circle cx="50" cy="100" r="40" strokeWidth="5" />
          <circle cx="50" cy="100" r="40" strokeWidth="5" id={id} className="stroke-green-400"
          // strokeDasharray="125.6 "
          strokeDasharray="252"
          />
          <text></text>
        </g>
      </svg>
      <p className='absolute -translate-y-8 w-full'>90</p>
      <p>{name}</p>
    </>
  )
}

const RegistroAutomatico = () => {

  const colorScheme = localStorage.getItem('theme') //Solo para cambiar el color del calendario en input type="date"

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
            <input type='date' className='form-input w-3/4' style={colorScheme === 'dark' ? {colorScheme: 'dark'} : {}}  value={DateTime.now().toISODate()}/>
          </div>
          <div className='text-center'>
            <label>Alumno</label><br />
            <select className='form-input w-3/4'>
              <option>Ángel Uriel González Urrutia</option>
            </select>
          </div>
        </div>
        <div className='text-center relative'>
          <BarraCircular id="oximetria" name="Oximetría"/>
        </div>
        <div className='text-center relative'>
          <BarraCircular id="presion" name="Presión" />
        </div>
        <div className='text-center relative'>
          <BarraCircular id="temperatura" name="Temperatura" />
        </div>
        <div className='text-center col-span-3'>
          <label htmlFor=''>Observaciones</label><br />
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

export default RegistroAutomatico
