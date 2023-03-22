import React, { useState } from 'react'
import FormHMedica from '../../components/forms/FormHMedica'
import FormPacienteCurricular from '../../components/forms/FormPacienteCurricular'
import FormPacienteGeneral from '../../components/forms/FormPacienteGeneral'
import VerificarPaciente from '../../components/forms/VerificarPaciente'

const RegistroPaciente = () => {

  const [form, setForm] = useState('general')

  let renderedForm

  switch (form) {
    case 'general':
      renderedForm = <FormPacienteGeneral setForm={setForm}/>
      break;
    case 'curricular':
      renderedForm = <FormPacienteCurricular setForm={setForm}/>
      break;
    case 'hmedica':
      renderedForm = <FormHMedica setForm={setForm}/>
      break;
    case 'verificar':
      renderedForm = <VerificarPaciente setForm={setForm}/>
  }

  return (
    <>
      <div className='container !pb-10 grid grid-cols-10'>
        <h1 className='container-title col-span-10 mb-6'>Agregar paciente</h1>
        {/* <button className='self-center justify-self-start text-3xl'><BsCaretLeft /></button> */}
        {renderedForm}

      </div>
    </>
  )
}

export default RegistroPaciente
