import React, { useState, useEffect } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const carreras = [
    'TSU en Desarrollo de Negocios Área Mercadotecnia',
    'TSU en Diseño Digital Área Animación',
    'TSU en Energías Renovables Área Calidad y Ahorro De Energía',
    'TSU en Lengua Inglesa',
    'TSU en Mantenimiento Área Industrial',
    'TSU en Mecatrónica Área Sistemas de Manufactura Flexible',
    'TSU en Operaciones Comerciales Internacionales Área Clasificación Arancelaria y Despacho Aduanero',
    'TSU en Procesos Industriales Área Manufactura',
    'TSU en Tecnologias de la Información',
    'Ingeniería en desarrollo y gestión de software',
    'Ingeniería en energías renovables',
    'Ingeniería en logística internacional',
    'Ingeniería en mantenimiento industrial',
    'Ingeniería en mecatrónica',
    'Licenciatura en gestión institucional, educativa y curricular',
    'Licenciatura en innovación de negocios y mercadotecnia'
]

const optCarreras = carreras.map(car => <option key={car} value={car}>{car}</option>)

const initialState = {
  carrera: '',
  cuatrimestre: '',
  grupo: ''
}

const FormPacienteCurricular = ({setForm}) => {

  const [datos, setDatos] = useState(initialState)

  useEffect(() =>{ //Si existe el objeto en sessionStorage, le asignamos su valor a la variable de datos
    if(sessionStorage.getItem('pacienteCurricular')){
      const pacienteCurricular = JSON.parse(sessionStorage.getItem('pacienteCurricular'))
      setDatos(pacienteCurricular)
    }
  }, [])

  function handleSubmit(e){ //Al subir el formulario, la información se guarda en sessionStorage
      if(e) e.preventDefault() //Si hacemos click en la flecha, no se ejecutará e.preventDefault
      sessionStorage.setItem('pacienteCurricular', JSON.stringify(datos))
  }
  function handleArrowClick(dir){ //Función para subir el formulario y redireccionar al hacer click en la flecha, pasamos la direccion de la flecha como parámetro
    handleSubmit()
    if(dir === 'left'){
      setForm('general')
    }else{
      setForm('hmedica')
    }
  }

  function handleChange(e){
    const {name, value} = e.target
    setDatos({...datos, [name]: value})
  }

  function handleCancel(){
    setDatos(initialState)
  }

  const {carrera, cuatrimestre, grupo} = datos

  return (
    <>
      <button className="self-center justify-self-center text-4xl group" onClick={()=> handleArrowClick('left')}>
        <BsChevronLeft className=" group-hover:-translate-x-1.5 group-hover:scale-105 transition" />
      </button>
      <form className=" p-2 sm:p-6 pb-8 sm:border border-green-200 dark:border-zinc-600 rounded shadow col-span-8" onSubmit={handleSubmit}>
        <h1 className="text-lg sm:text-xl text-center mb-12">
          Información curricular
        </h1>
        <div className=" w-full grid sm:grid-cols-2 gap-6">
          
          <div className="text-center px-4 col-span-2 sm:col-span-1">
            <label className="text-sm text-center">Carrera: </label>
            <br />
            <select className="form-input w-full" name='carrera' value={carrera} onChange={handleChange}>
                <option value="">-----</option>
                {optCarreras}
            </select>
          </div>
          <div className="text-center px-4 grid sm:grid-cols-2 col-span-2 sm:col-span-1 gap-8">
            <div>
              <label className="text-sm text-center">Cuatrimestre: </label>
              <br />
              <input
                type="number"
                placeholder="10"
                className="form-input w-full"
                name='cuatrimestre'
                value={cuatrimestre}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-sm text-center">Grupo: </label>
              <br />
              <select
                className="form-input w-full"
                name='grupo'
                value={grupo}
                onChange={handleChange}
              >
                <option value="">-----</option>
                <option value="A">A</option>
                <option value="B">B</option>
              </select>
            </div>
          </div>
          <div className='mt-4 col-span-2 text-center'>
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

export default FormPacienteCurricular
