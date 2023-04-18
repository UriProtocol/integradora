import React, {useState, useEffect} from 'react'
import {BsFillHeartPulseFill, BsSearch, BsTrash, BsEye} from 'react-icons/bs'
import {TbTemperatureCelsius} from 'react-icons/tb'
import { AiOutlineLoading, AiOutlinePlus } from 'react-icons/ai'
import {SiOxygen} from 'react-icons/si'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import ModalEliminar from '../../components/modals/ModalEliminar'

function RegistroCard({nombre, apellido, oximetria, frecuencia, temperatura, fecha, id, handleModal, handleEliminar, isModalActive}){

  const navigate = useNavigate()

  return (
    <div className='p-4 rounded shadow w-3/4 mx-auto my-10 bg-white dark:bg-zinc-800 snap-center'>
      <h1 className='text-xl font-semibold text-center'>{nombre ? nombre: '. . . '} {apellido ? apellido : '. . .'}</h1>
      <div className='grid sm:grid-cols-3 gap-4 mt-6 text-center'>
        <p className='col-span-2 sm:col-span-1'>Oximetría<br />
          <SiOxygen className=' text-xl inline-block mb-1 mr-1'/> : {oximetria ? oximetria : '. . .'}
        </p>
        <p className='col-span-2 sm:col-span-1'>Frecuencia cardiaca <br />
          <BsFillHeartPulseFill className=' text-xl inline-block mb-0.5 mr-1'/> : {frecuencia ? frecuencia : '. . .'}
        </p>
        <p className='col-span-2 sm:col-span-1'>Temperatura <br />
          <TbTemperatureCelsius className=' text-xl inline-block mb-0.5 mr-1'/> : {temperatura ? temperatura : '. . .'}
        </p>
        <p className='text-center text-lg col-span-3 mt-4'>{fecha ? fecha : '. . .'}</p>
      </div>
      <div className='text-center mt-6 flex justify-center gap-6'>
        {isModalActive === 'true' 
        ? <button className='btn btn-red' onClick={() => handleModal('registro', `${nombre} ${apellido}`, fecha, id)}>Eliminar</button>
        : <button className='btn btn-red' onClick={() => handleEliminar(id)}>Eliminar</button>
        }
        <button className='btn btn-teal !px-5' onClick={() => navigate(`/ver/registro/${id}`)}>Ver</button>
      </div>
    </div>
  )
}

function VisualizarRegistros() {

  const [registros, setRegistros] = useState()
  const [buscar, setBuscar] = useState({
    buscarTipo: 'nombre',
    buscarValor: ''
  })
  const [visualizarRegistros, setVisualizarRegistros] = useState(localStorage.getItem('visualizarRegistros'))
  const [modal, setModal] = useState({
    tipo: '',
    isActive: false,
    id: '',
    nombre: '',
    fecha: ''
  })
  const [isModalActive, setIsModalActive] = useState(localStorage.getItem('isModalActive') || 'true') //Variable de estado para revisar si las ventanas modales están activadas o desactivadas en la configuración

  const colorScheme = localStorage.getItem('theme') //Para cambiar el color del calendario y del toast en input type="date"

  const navigate = useNavigate()

  useEffect(() => {
    getRegistros()
    window.addEventListener('visualizarEvent', getVisualizar) 
    window.addEventListener('modalEvent', getIsModalActive)
    return () =>{
      window.removeEventListener('visualizarEvent', getVisualizar)
      window.removeEventListener('modalEvent', getIsModalActive)
    }
  }, [])

  async function getRegistros(){
    const registrosVal = await axios.get("https://integradora.fly.dev/registros");
    setRegistros(registrosVal.data);
  }

  async function handleEliminar(id){
    try {
      const eliminarRegistro = await axios.delete(`https://integradora.fly.dev/registros/eliminar/${id}`)
      notify(eliminarRegistro.status)
      getRegistros()
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

  function handleChange(e){
    const {value} = e.target
    setBuscar({...buscar, buscarValor: value.toLowerCase()})
  }
  function handleBuscarToggle(){
    buscarTipo === 'nombre' ? setBuscar({...buscar, buscarTipo: 'apellido'}) : setBuscar({...buscar, buscarTipo: 'nombre'})
  }
  function getVisualizar(){
    setVisualizarRegistros(localStorage.getItem('visualizarRegistros'))
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

  const {buscarTipo, buscarValor} = buscar

  const registrosCards = registros //Si se pueden obtener los registros, se muestran, si no, se muestra la animación de carga
  ?  
    buscarTipo === 'nombre'
    ? registros.filter(reg => reg.nombre.toLowerCase().includes(buscarValor)).reverse().map(r => <RegistroCard key={r._id} nombre={r.nombre} apellido={r.apellido} oximetria={r.oximetria} frecuencia={r.frecuencia} temperatura={r.temperatura} fecha={r.fecha} id={r._id} handleModal={handleModal} handleEliminar={handleEliminar} isModalActive={isModalActive}/>  //El reverse se agrega para que se muestren los registros en orden del más actual al más viejo
    )
    : registros.filter(reg => reg.apellido.toLowerCase().includes(buscarValor)).reverse().map(r => <RegistroCard key={r._id} nombre={r.nombre} apellido={r.apellido} oximetria={r.oximetria} frecuencia={r.frecuencia} temperatura={r.temperatura} fecha={r.fecha} id={r._id} handleModal={handleModal} handleEliminar={handleEliminar} isModalActive={isModalActive}/>
    )

  : <div className='h-full w-full grid justify-center items-center'>
      <AiOutlineLoading className=" text-center text-7xl animate-spin inline-block -mt-20" />
    </div> 

  const registrosRows = registros
  ?
    buscarTipo === 'nombre'
    ? registros.filter(reg => reg.nombre.toLowerCase().includes(buscarValor)).reverse().map(r => 
        <tr className="hover:bg-green-50 dark:hover:bg-zinc-700 transition text-sm sm:text-base" key={r._id}>
          <td className='py-2'>{r.nombre ? r.nombre : '. . .'}</td>
          <td className='py-2'>{r.apellido ? r.apellido : '. . .'}</td>
          <td className='py-2'>{r.oximetria ? r.oximetria : '. . .'}</td>
          <td className='py-2'>{r.frecuencia ? r.frecuencia : '. . .'}</td>
          <td className='py-2'>{r.temperatura ? r.temperatura : '. . .'}</td>
          <td className='py-2'>{r.fecha ? r.fecha : '. . .'}</td>
          <td className='py-2'>
            {isModalActive === 'true'
            ? <button className='btn btn-red m-2' onClick={() => handleModal('registro', `${r.nombre} ${r.apellido}`, r.fecha, r._id)}><BsTrash /></button>
            : <button className='btn btn-red m-2' onClick={() => handleEliminar(r._id)}><BsTrash /></button>
            }
            <button className='btn btn-teal m-2' onClick={() => navigate(`/ver/registro/${r._id}`)}><BsEye /></button>
          </td>

        </tr>
      )

    : registros.filter(reg => reg.apellido.toLowerCase().includes(buscarValor)).reverse().map(r => 
        <tr className="hover:bg-green-50 dark:hover:bg-zinc-700 transition text-sm sm:text-base" key={r._id}>
          <td className='py-2'>{r.nombre ? r.nombre : '. . .'}</td>
          <td className='py-2'>{r.apellido ? r.apellido : '. . .'}</td>
          <td className='py-2'>{r.oximetria ? r.oximetria : '. . .'}</td>
          <td className='py-2'>{r.frecuencia ? r.frecuencia : '. . .'}</td>
          <td className='py-2'>{r.temperatura ? r.temperatura : '. . .'}</td>
          <td className='py-2'>{r.fecha ? r.fecha : '. . .'}</td>
          <td className='py-2'>
          {isModalActive === 'true'
          ? <button className='btn btn-red m-2' onClick={() => handleModal('registro', `${r.nombre} ${r.apellido}`, r.fecha, r._id)}><BsTrash /></button>
          : <button className='btn btn-red m-2' onClick={() => handleEliminar(r._id)}><BsTrash /></button>
          }
            <button className='btn btn-teal m-2' onClick={() => navigate(`/ver/registro/${r._id}`)}><BsEye /></button>
          </td>
        </tr>
      )
  :  <tr>
      <td className="py-14 text-center" colSpan="100%">
        <AiOutlineLoading className=" text-center text-6xl animate-spin inline-block" />
      </td>
    </tr>

  return (
    <>
      {visualizarRegistros === 'tabla' 
      ? //Contenido que se renderizará si el tipo de visualización es tabla
        <div className="container !py-10 ">
          <h1 className="container-title mb-5">Historial de registros</h1>
          <div className="w-11/12 mx-auto flex justify-between mt-8">

            <div className='w-3/4 md:w-1/2 justify-self-start'>
              <input className='form-input !border-none !rounded-b !pl-10 !bg-green-200 dark:!bg-zinc-700 placeholder:!text-green-700 dark:placeholder:!text-zinc-200 !mt-0 opacity-50 hover:opacity-100 focus:opacity-100 !duration-200 !w-full' 
              placeholder={buscarTipo === 'nombre' ? 'Buscar por nombre' : 'Buscar por apellido'} 
              value={buscarValor}
              onChange={handleChange}
              />
              <button className='absolute ml-3 z-10 opacity-50 -translate-y-[1.625rem] peer-focus:opacity-100 transition !duration-200 flex' onClick={handleBuscarToggle}>
                <BsSearch/>
                <p className='ml-1.5 -mt-[0.285rem]'>{buscarTipo === 'nombre' ? 'N' : 'A'}</p>
              </button>
            </div>

            <button className=" btn btn-green text-lg sm:text-xl md:text-2xl" onClick={()=> navigate('/registrar/manual')}><AiOutlinePlus /></button>
          </div>
          <div className=" overflow-x-auto w-11/12 mx-auto mt-4 styled-scrollbar">

            <table className="table-auto rounded w-full min-w-max text-center">
              <thead className="border-b border-green-300 dark:border-zinc-400">
                <tr className="hover:bg-green-50 dark:hover:bg-zinc-700 transition text-xs sm:text-base">
                  <th className="p-2">Nombre</th>
                  <th className="p-2">Apellido</th>
                  <th className="p-2">Oximetría</th>
                  <th className="p-2">Frecuencia</th>
                  <th className="p-2">Temperatura</th>
                  <th className="p-2">Fecha</th>
                  <th className="p-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {registrosRows}
              </tbody>
            </table>
          </div>
        </div>
      : //Contenido que se renderizará si el tipo de visualización es tarjetas
        <div className='container h-5/6'> 
          <h1 className='container-title'>Historial de registros</h1>
          <div className='w-full sm:w-3/4 overflow-y-auto snap-y h-4/5 sm:h-3/4 mx-auto mt-8 rounded bg-green-100 dark:bg-zinc-900 scrollbar-thin scrollbar-thumb-green-400 dark:scrollbar-thumb-zinc-700 relative'>
            
            <div className='top-0 left-0 sticky group w-full sm:w-1/2 h-14'>
              <input className='form-input !border-none !pl-10 !bg-green-300 dark:!bg-zinc-700 placeholder:!text-green-700 dark:placeholder:!text-zinc-200 !mt-0 !rounded-r-none !rounded-br opacity-50 hover:opacity-100 focus:opacity-100 -translate-y-7 group-hover:translate-y-0 group-active:translate-y-0 focus:translate-y-0 peer !duration-200 !w-full' 
              placeholder={buscarTipo === 'nombre' ? 'Buscar por nombre' : 'Buscar por apellido'} 
              value={buscarValor}
              onChange={handleChange}/>
              <button className='absolute ml-3 -mt-[1.625rem] z-10 opacity-50 -translate-y-8 group-hover:translate-y-0 peer-focus:translate-y-0 peer-focus:opacity-100 group-hover:opacity-100 transition !duration-200 flex'
              onClick={handleBuscarToggle}>
                <BsSearch/>
                <p className='ml-1.5 -mt-[0.285rem]'>{buscarTipo === 'nombre' ? 'N' : 'A'}</p>
              </button>
            </div>
            <button className='btn btn-green absolute right-0 mr-4 -mt-4 text-lg sm:text-xl md:text-2xl' onClick={()=> navigate('/registrar/manual')}><AiOutlinePlus /></button>
              {registrosCards}
          </div>
        </div>
      }
      <ToastContainer theme={colorScheme} position="top-center"/>
      <ModalEliminar isActive={modal.isActive} handleEliminar={handleEliminar} setModal={setModal} tipo={modal.tipo} nombre={modal.nombre} fecha={modal.fecha} id={modal.id} />
    </>
  )
}

export default VisualizarRegistros
