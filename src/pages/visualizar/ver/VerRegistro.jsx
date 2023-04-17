import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify'
import axios from 'axios'
import ModalEliminar from '../../../components/modals/ModalEliminar'

const initialState = {
  _id: "",
  fecha: "",
  nombre: "",
  apellido: "",
  oximetria: "",
  frecuencia: "",
  observaciones: "",
    
}

const VerRegistro = () => {
  const colorScheme = localStorage.getItem('theme')

  const {id} = useParams()

  const [registro, setRegistro] = useState(initialState)
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
      getRegistro()
      window.addEventListener('modalEvent', getIsModalActive)
      return () =>{
        window.removeEventListener('modalEvent', getIsModalActive)
      }
  }, [])

  async function getRegistro(){
      try {
          const registroVal = await axios.get(`http://127.0.0.1:5000/registros/ver/${id}`)
          setRegistro(registroVal.data)
      } catch (error) {
          console.error(error)
      }
  }

  async function handleEliminar(){
      try {
        const eliminarRegistro = await axios.delete(`http://127.0.0.1:5000/registros/eliminar/${id}`)
        notify(eliminarRegistro.status)
        setTimeout(() => {
          navigate('/visualizar/registros')
        }, 1500);
      } catch (error) {
        console.error(error)
        notify(500)
      }
    }
  
    function notify(num){
      if(num >= 200 && num < 300){
          toast.warning(
              'Registro eliminado',
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

  const {fecha, nombre, apellido, oximetria, frecuencia, observaciones} = registro



  return (
    <>
      <div className='container'>
      <h2 className='container-title mb-6'>{nombre ? nombre : '. . . '} {apellido ? apellido : '. . .'}</h2>
            <div className='sm:border border-green-200 dark:border-zinc-600 shadow rounded p-6 w-11/12 mx-auto'> 
                <p className='my-2 text-lg'><b className='mr-2'>Fecha de registro:</b> {fecha ? fecha : '. . .'}</p>
                <p className='my-2 text-lg'><b className='mr-2'>Nombre :</b> {nombre ? nombre : '. . .'}</p>
                <p className='my-2 text-lg'><b className='mr-2'>Apellido :</b> {apellido ? apellido : '. . .'}</p>
                <p className='my-2 text-lg'><b className='mr-2'>Oximetría:</b> {oximetria ? oximetria : '. . .'}</p>
                <p className='my-2 text-lg'><b className='mr-2'>Frecuencia:</b> {frecuencia ? frecuencia : '. . .'}</p>
                <p className='my-2 text-lg'><b className='mr-2'>Observaciones:</b> {observaciones ? observaciones : '. . .'}</p>
            </div>
            <div className='mt-6 flex justify-center gap-6'>
                <button className='btn btn-slate !px-3' onClick={()=> navigate('/visualizar/registros')}>Volver</button>
                {isModalActive === 'true'
                ? <button className='btn btn-red' onClick={() => handleModal('registro', `${nombre} ${apellido}`, fecha)}>Eliminar</button>
                : <button className='btn btn-red' onClick={() => handleEliminar()}>Eliminar</button>
                }
            </div>
      </div>
      <ToastContainer theme={colorScheme} position="top-center" />
      <ModalEliminar isActive={modal.isActive} handleEliminar={handleEliminar} setModal={setModal} tipo={modal.tipo} nombre={modal.nombre} fecha={modal.fecha} id={id} />
    </>
  )
}

export default VerRegistro
