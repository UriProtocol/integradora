import React, { useEffect, useState } from 'react'
import { BsChevronLeft, BsDash } from 'react-icons/bs'
import {MdOutlineArrowRight} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'
import { DateTime } from 'luxon'

const initialState = {
    nombre: '',
    apellido: '',
    genero: '',
    edad: '',
    carrera: '',
    cuatrimestre: '',
    grupo: '',
    padecimiento: '',
    medicamento: '',
    observaciones: ''
}

const VerificarPaciente = ({setForm}) => {

      const colorScheme = localStorage.getItem('theme') //Solo para cambiar el color del calendario en input type="date"

    const [datos, setDatos] = useState(initialState)

    const navigate = useNavigate()

    useEffect(()=>{ //Obteniendo todos los datos en el sessionStorage
        const datosGeneral = JSON.parse(sessionStorage.getItem('pacienteGeneral'))
        const datosCurricular = JSON.parse(sessionStorage.getItem('pacienteCurricular'))
        const datosHMedica = JSON.parse(sessionStorage.getItem('pacienteHMedica'))

        const {nombre, apellido, genero, edad} = datosGeneral
        const {carrera, cuatrimestre, grupo} = datosCurricular
        const {padecimiento, medicamento, observaciones} = datosHMedica

        setDatos({nombre, apellido, genero, edad, carrera, cuatrimestre, grupo, padecimiento, medicamento, observaciones})

    }, [])

    function handleSubmit(e){ //Subir la información a la base de datos con axios
        e.preventDefault()
    }
    function handleCancelar(){
        sessionStorage.clear()
        navigate('/')
    }

    const {nombre, apellido, genero, edad, carrera, cuatrimestre, grupo, padecimiento, medicamento, observaciones} = datos

  return (
    <>
    <button className="self-center justify-self-center text-4xl group" onClick={()=> setForm('hmedica')}>
        <BsChevronLeft className=" group-hover:-translate-x-1.5 group-hover:scale-105 transition"/>
    </button>
    <div className="p-6 pb-8 border border-green-200 dark:border-zinc-600 rounded shadow col-span-8" onSubmit={handleSubmit}>

        <h1 className='text-2xl mb-4 text-center'>¿La información es correcta?</h1>

        <h2 className=' font-semibold text-lg mb-2'><MdOutlineArrowRight className='inline-block mb-1 text-xl' /> Información general</h2>
        <p className='ml-6'><BsDash className='inline-block mb-0.5'/><b className='mr-2'>Fecha de registro: </b><input type='date' className='form-input !border-none !rounded !mt-0' style={colorScheme === 'dark' ? {colorScheme: 'dark'} : {}} value={DateTime.now().toISODate()}/></p>
        <p className='ml-6'><BsDash className='inline-block mb-0.5'/> <b className=' mr-2'>Nombre completo: </b>{nombre} {apellido}</p>
        <p className='ml-6'><BsDash className='inline-block mb-0.5'/> <b className=' mr-2'>Genero: </b>{genero} <b className='ml-4 mr-2'>Edad: </b> {edad}</p>

        <h2 className=' font-semibold text-lg mt-3 mb-2'><MdOutlineArrowRight className='inline-block mb-1 text-xl' /> Información curricular</h2>
        <p className='ml-6'><BsDash className='inline-block mb-0.5'/> <b className=' mr-2'>Carrera: </b>{carrera}</p>
        <p className='ml-6'><BsDash className='inline-block mb-0.5'/> <b className=' mr-2'>Grado y grupo: </b>{cuatrimestre > 0 ? cuatrimestre + ' °' : ''} {grupo}</p>

        <h2 className=' font-semibold text-lg mt-3 mb-2'><MdOutlineArrowRight className='inline-block mb-1 text-xl' /> Historia médica</h2>
        <p className='ml-6'><BsDash className='inline-block mb-0.5'/> <b className=' mr-2'>Padecimiento: </b>{padecimiento}</p>
        <p className='ml-6'><BsDash className='inline-block mb-0.5'/> <b className=' mr-2'>Medicamento: </b>{medicamento}</p>
        <p className='ml-6'><BsDash className='inline-block mb-0.5'/> <b className=' mr-2'>Observaciones: </b>{observaciones}</p>

    </div>
    <div />


    <div className='col-span-10 text-center mt-6'>
        <button className='btn btn-red' onClick={handleCancelar}>Cancelar</button>
        <button className='btn btn-green !px-6 ml-6'>Subir</button>
    </div>

    <div />
    </>
  )
}

export default VerificarPaciente
