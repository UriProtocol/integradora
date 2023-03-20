import React from 'react'
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

const FormPacienteCurricular = ({setForm}) => {

    function handleSubmit(e){
        e.preventDefault()
    }

  return (
    <>
      <button className="self-center justify-self-center text-4xl group" onClick={()=> setForm('general')}>
        <BsChevronLeft className=" group-hover:-translate-x-1.5 group-hover:scale-105 transition" />
      </button>
      <form className="p-6 pb-8 border border-green-200 dark:border-zinc-600 rounded shadow col-span-8" onSubmit={handleSubmit}>
        <h1 className="text-xl text-center mb-12">
          Información curricular
        </h1>
        <div className=" w-full grid grid-cols-2 gap-10">
          
          <div className="text-center px-4">
            <label className="text-sm text-center">Carrera: </label>
            <br />
            <select className="form-input w-full" required>
                <option value="">-----</option>
                {optCarreras}
            </select>
          </div>
          <div className="text-center px-4">
            <label className="text-sm text-center">Cuatrimestre: </label>
            <br />
            <input
              type="number"
              placeholder="5"
              className="form-input w-full"
            />
          </div>
          <div className='mt-2 col-span-2 text-center'>
              <button className='btn btn-green mx-4 !px-6' type='submit'>Aceptar</button>
              <button className='btn btn-red mx-4 !px-6' type='reset'>Cancelar</button>
          </div>
        </div>
      </form>
      <button className="self-center justify-self-center text-4xl group" onClick={()=> setForm('hmedica')}>
        <BsChevronRight className=" group-hover:translate-x-1.5 group-hover:scale-105 transition" />
      </button>   
    </>
  )
}

export default FormPacienteCurricular
