import React from 'react'
import {BsFillHeartPulseFill, BsSearch} from 'react-icons/bs'
import {TbTemperatureCelsius} from 'react-icons/tb'
import {SiOxygen} from 'react-icons/si'

function RegistroCard({nombre, oximetria, presion, temperatura, fecha}){
  return (
    <div className='p-4 rounded shadow w-3/4 mx-auto my-10 bg-white dark:bg-zinc-800 snap-center'>
      <h1 className='text-xl font-semibold text-center'>{nombre}</h1>
      <div className='grid grid-cols-3 gap-4 mt-6 text-center'>
        <p>Oximetría<br />
          <SiOxygen className=' text-xl inline-block mb-1 mr-1'/> : {oximetria}
        </p>
        <p>Presión <br />
          <BsFillHeartPulseFill className=' text-xl inline-block mb-0.5 mr-1'/> : {presion}
        </p>
        <p>Temperatura <br />
          <TbTemperatureCelsius className=' text-xl inline-block mb-0.5 mr-1'/> : {temperatura}
        </p>
        <p className='text-center text-lg col-span-3 mt-4'>{fecha}</p>
      </div>
      <div className='text-center mt-6'>
        <button className='btn btn-red'>Eliminar</button>
      </div>
    </div>
  )
}

const VisualizarRegistros = () => {
  return (
    <>
      <div className='container h-5/6'>
        <h1 className='container-title'>Historial de registros</h1>
        <div className='w-3/4 overflow-y-auto snap-y h-3/4 mx-auto mt-8 rounded bg-green-100 dark:bg-zinc-900 scrollbar-thin scrollbar-thumb-green-400 dark:scrollbar-thumb-zinc-700 relative'>
          
          <div className='top-0 left-0 sticky group w-full sm:w-1/2 h-14'>
            <input className='form-input !border-none !pl-10 !bg-green-300 dark:!bg-zinc-700 placeholder:!text-green-700 dark:placeholder:!text-zinc-200 !mt-0 border-r !rounded-r-none !rounded-br opacity-50 hover:opacity-100 focus:opacity-100 -translate-y-7 group-hover:translate-y-0 group-active:translate-y-0 focus:translate-y-0 peer !duration-200 absolute !w-full' placeholder='Buscar'/>
            <BsSearch className='absolute ml-3 mt-2.5 z-10 opacity-50 -translate-y-8 group-hover:translate-y-0 peer-focus:translate-y-0 peer-focus:opacity-100 group-hover:opacity-100 transition !duration-200'/>
          </div>

          <RegistroCard nombre='Ángel Uriel González Urrutia' oximetria={90} presion={120} temperatura={38} fecha={new Date().toLocaleString()}/>
          <RegistroCard nombre='Gerardo Compean Macías' oximetria={98} presion={110} temperatura={39} fecha={new Date().toLocaleString()}/>
          <RegistroCard nombre='Juan' oximetria={80} presion={60} temperatura={18} fecha={new Date().toLocaleString()}/>
        </div>
      </div>
    </>
  )
}

export default VisualizarRegistros
