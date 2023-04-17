import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import ModalEliminar from '../../../components/modals/ModalEliminar';

const initialState = {
    _id: "",
    fecha: "",
    nombre: "",
    apellido: "",
    genero: "",
    edad: "",
    carrera: "",
    cuatrimestre: "",
    grupo: "",
    padecimiento: "",
    medicamento: "",
    observaciones: "",
}

const VerPaciente = () => {

    const colorScheme = localStorage.getItem('theme')

    const {id} = useParams()

    const [paciente, setPaciente] = useState(initialState)
    const [modal, setModal] = useState({
      tipo: '',
      isActive: false,
      id: '',
      nombre: '',
      fecha: ''
    })
    const [isModalActive, setIsModalActive] = useState(localStorage.getItem('isModalActive') || 'true') //Variable de estado para revisar si las ventanas modales están activadas o desactivadas en la configuración


    const navigate = useNavigate()
    
    useEffect(()=>{
        getPaciente()
        window.addEventListener('modalEvent', getIsModalActive)
        return () =>{
          window.removeEventListener('modalEvent', getIsModalActive)
        }
    }, [])

    async function getPaciente(){
        try {
            const pacienteVal = await axios.get(`http://127.0.0.1:5000/pacientes/ver/${id}`)
            setPaciente(pacienteVal.data)
        } catch (error) {
            console.error(error)
        }
    }

    async function handleEliminar(){
        try {
          const eliminarPaciente = await axios.delete(`http://127.0.0.1:5000/pacientes/eliminar/${id}`)
          notify(eliminarPaciente.status)
          setTimeout(() => {
            navigate('/visualizar/pacientes')
          }, 1500);
        } catch (error) {
          console.error(error)
          notify(500)
        }
      }
    
      function notify(num){
        if(num >= 200 && num < 300){
            toast.warning(
                'Paciente eliminado',
                {
                  autoClose:500,
                },
      
              )
        }else{
            toast.error('¡Ha ocurrido un error!',{
                autoClose: 500
            })
        }
    }
    function handleModal(tipo = '', nombre = '', fecha = '', id = ''){
      setModal({
        isActive: true,
        tipo: tipo,
        nombre: nombre,
        fecha: fecha,
        id: id
      })
    }
    function getIsModalActive(){
      setIsModalActive(localStorage.getItem('isModalActive'))
    }

    const { fecha, nombre, apellido, genero, edad, carrera, cuatrimestre, grupo, padecimiento, medicamento, observaciones} = paciente

    

  return (
    <>
        <div className='container'>
            <h2 className='container-title mb-6'>{nombre ? nombre : '. . . '} {apellido ? apellido : '. . .'}</h2>
            <div className='sm:border border-green-200 dark:border-zinc-600 shadow rounded p-6 w-11/12 mx-auto'> 
                <p className='my-2 text-lg'><b className='mr-2'>Fecha de registro:</b> {fecha ? fecha : '. . .'}</p>
                <p className='my-2 text-lg'><b className='mr-2'>Nombre completo:</b> {nombre ? nombre : '. . .'} {apellido ? apellido : '. . .'}</p>
                {/* <p className='my-2 text-lg mr-4'><b>Apellido:</b> {apellido}</p> */}
                <p className='my-2 text-lg'><b className='mr-2'>Género:</b> {genero ? genero : '. . .'}</p>
                <p className='my-2 text-lg'><b className='mr-2'>Edad:</b> {edad ? edad : '. . .'}</p>
                <p className='my-2 text-lg'><b className='mr-2'>Carrera:</b> {carrera ? carrera : '. . .'}</p>
                <p className='my-2 text-lg'><b className='mr-2'>Cuatrimestre:</b> {cuatrimestre ? cuatrimestre : '. . .'}</p>
                <p className='my-2 text-lg'><b className='mr-2'>Grupo:</b> {grupo ? grupo : '. . .'}</p>
                <p className='my-2 text-lg'><b className='mr-2'>Padecimiento:</b> {padecimiento ? padecimiento : '. . .'}</p>
                <p className='my-2 text-lg'><b className='mr-2'>Medicamento:</b> {medicamento ? medicamento : '. . .'}</p>
                <p className='my-2 text-lg'><b className='mr-2'>Observaciones:</b> {observaciones ? observaciones : '. . .'}</p>
            </div>
            <div className='mt-6 flex justify-center gap-6'>
                <button className='btn btn-slate !px-3' onClick={()=> navigate('/visualizar/pacientes')}>Volver</button>
                {isModalActive === 'true'
                ? <button className='btn btn-red' onClick={() => handleModal('paciente', `${nombre} ${apellido}`)}>Eliminar</button>
                : <button className='btn btn-red' onClick={() => handleEliminar(id)}>Eliminar</button>
                }
                {/* <button className='btn btn-red' onClick={() => handleModal('paciente', `${nombre} ${apellido}`)}>Eliminar</button> */}
                <button className='btn btn-blue' onClick={()=> navigate(`/modificar/paciente/${id}`)}>Modificar</button>
            </div>
        </div>

        <ToastContainer theme={colorScheme} position="top-center" />
        <ModalEliminar isActive={modal.isActive} handleEliminar={handleEliminar} setModal={setModal} tipo={modal.tipo} nombre={modal.nombre} fecha={modal.fecha} id={id} />
    </>
  )
}

export default VerPaciente
