import React, { useEffect, useState } from "react";
import { BsEye, BsPen, BsTrash, BsSearch} from "react-icons/bs";
import { AiOutlineLoading, AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ModalEliminar from "../../components/modals/ModalEliminar";

function PacienteCard({nombre, apellido, edad, carrera, cuatrimestre, grupo, id, handleModal, handleEliminar, isModalActive}){

  const navigate = useNavigate()

  return (
    <div className='p-4 rounded shadow w-3/4 mx-auto my-10 bg-white dark:bg-zinc-800 snap-center'>
      <h1 className='text-xl font-semibold text-center'>{nombre ? nombre: '. . . '} {apellido ? apellido : '. . .'}</h1>
      <div className='grid sm:grid-cols-2 gap-4 mt-6 text-center'>
        <p className='col-span-2 sm:col-span-1'><b>Edad</b><br />
          {edad ? edad : '. . .'}
        </p>
        <p className='col-span-2 sm:col-span-1'><b>Grado y grupo</b><br />
          {cuatrimestre ? cuatrimestre + ' °' : '. . .'} {grupo}
        </p>
        <p className="col-span-2"><b>Carrera</b><br />
          {carrera ? carrera : '. . .'}
        </p>

      </div>
      <div className='text-center mt-6 flex justify-center gap-6'>
        {isModalActive === 'true' 
        ? <button className='btn btn-red' onClick={() => handleModal('paciente', `${nombre} ${apellido}`, '', id)}>Eliminar</button>
        : <button className='btn btn-red' onClick={() => handleEliminar(id)}>Eliminar</button>
        }
        <button className='btn btn-teal !px-5' onClick={() => navigate(`/ver/paciente/${id}`)}>Ver</button>
        <button className='btn btn-blue !px-5' onClick={() => navigate(`/modificar/paciente/${id}`)}>Modificar</button>
      </div>
    </div>
  )
}


const VisualizarPacientes = () => {

  const colorScheme = localStorage.getItem('theme') //Para cambiar el color del calendario y del toast en input type="date"

  const [pacientes, setPacientes] = useState()
  const [buscar, setBuscar] = useState({
    buscarTipo: 'nombre',
    buscarValor: ''
  })

  const [visualizarPacientes, setVisualizarPacientes] = useState(localStorage.getItem('visualizarPacientes'))
  const [modal, setModal] = useState({
    tipo: '',
    isActive: false,
    id: '',
    nombre: '',
    fecha: ''
  })
  const [isModalActive, setIsModalActive] = useState(localStorage.getItem('isModalActive') || 'true') //Variable de estado para revisar si las ventanas modales están activadas o desactivadas en la configuración

  const navigate = useNavigate()

  useEffect(() => {
    getPacientes()
    setVisualizar()
    window.addEventListener('visualizarEvent', setVisualizar)
    window.addEventListener('modalEvent', getIsModalActive)
    return () =>{
      window.removeEventListener('visualizarEvent', setVisualizar)
      window.removeEventListener('modalEvent', getIsModalActive)
    }
  }, []);

  async function getPacientes() {
    try {
      const pacientesVal = await axios.get("http://127.0.0.1:5000/pacientes");
      setPacientes(pacientesVal.data);
    } catch (error) {
      console.error(error)
    }
  }

  async function handleEliminar(id){
    try {
      const eliminarPaciente = await axios.delete(`http://127.0.0.1:5000/pacientes/eliminar/${id}`)
      notify(eliminarPaciente.status)
      getPacientes()
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
  function handleChange(e){
    const {value} = e.target
    setBuscar({...buscar, buscarValor: value.toLowerCase()})
  }
  function handleBuscarToggle(){
    buscarTipo === 'nombre' ? setBuscar({...buscar, buscarTipo: 'apellido'}) : setBuscar({...buscar, buscarTipo: 'nombre'})
  }

  function setVisualizar(){
    setVisualizarPacientes(localStorage.getItem('visualizarPacientes'))
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

  
  const pacientesCards = pacientes //Si se pueden obtener los registros, se muestran, si no, se muestra la animación de carga
  ?  
    buscarTipo === 'nombre'
    ? pacientes.filter(pac => pac.nombre.toLowerCase().includes(buscarValor)).reverse().map(p => <PacienteCard key={p._id} nombre={p.nombre} apellido={p.apellido} edad={p.edad} carrera={p.carrera} cuatrimestre={p.cuatrimestre} grupo={p.grupo} id={p._id} handleModal={handleModal} handleEliminar={handleEliminar} isModalActive={isModalActive}/>  //El reverse se agrega para que se muestren los registros en orden del más actual al más viejo
    )
    : pacientes.filter(pac => pac.apellido.toLowerCase().includes(buscarValor)).reverse().map(p => <PacienteCard key={p._id} nombre={p.nombre} apellido={p.apellido} edad={p.edad} carrera={p.carrera} cuatrimestre={p.cuatrimestre} grupo={p.grupo} id={p._id} handleModal={handleModal} handleEliminar={handleEliminar} isModalActive={isModalActive}/>
    )

  : <div className='h-full w-full grid justify-center items-center'>
      <AiOutlineLoading className=" text-center text-7xl animate-spin inline-block -mt-20" />
    </div> 

  const pacientesRows = pacientes 
  ? 
    buscarTipo === 'nombre' 
    ? pacientes.filter(pac => pac.nombre.toLowerCase().includes(buscarValor)).reverse().map(p => (
        <tr className="hover:bg-green-50 dark:hover:bg-zinc-700 transition text-sm sm:text-base" key={p._id}>
          <td className="py-2">{p.nombre ? p.nombre : '. . .'}</td> 
          <td className="py-2">{p.apellido ? p.apellido : '. . .'}</td> 
          <td className="py-2">{p.edad ? p.edad : '. . .'}</td> 
          <td className="py-2">{p.carrera ? p.carrera : '. . .'}</td> 
          <td className="py-2">{p.cuatrimestre ? p.cuatrimestre + ' °' : '. . .'} {p.grupo}</td> 
          <td className="py-2">
            {isModalActive === 'true'
            ? <button className='btn btn-red m-2' onClick={() => handleModal('paciente', `${p.nombre} ${p.apellido}`, p.fecha, p._id)}><BsTrash /></button>
            : <button className='btn btn-red m-2' onClick={() => handleEliminar(p._id)}><BsTrash /></button>
            }
            <button className='btn btn-teal m-2' onClick={() => navigate(`/ver/paciente/${p._id}`)}><BsEye /></button>
            <button className='btn btn-blue m-2' onClick={()=> navigate(`/modificar/paciente/${p._id}`)}><BsPen /></button>
          </td>
        </tr>
      )) 
    : pacientes.filter(pac => pac.apellido.toLowerCase().includes(buscarValor)).reverse().map(p => (
      <tr className="hover:bg-green-50 dark:hover:bg-zinc-700 transition text-sm sm:text-base" key={p._id}>
        <td className="py-2">{p.nombre ? p.nombre : '. . .'}</td> 
        <td className="py-2">{p.apellido ? p.apellido : '. . .'}</td> 
        <td className="py-2">{p.edad ? p.edad : '. . .'}</td> 
        <td className="py-2">{p.carrera ? p.carrera : '. . .'}</td> 
        <td className="py-2">{p.cuatrimestre ? p.cuatrimestre + ' °' : '. . .'} {p.grupo}</td> 
        <td className="py-2">
          {isModalActive === 'true'
          ? <button className='btn btn-red m-2' onClick={() => handleModal('paciente', `${p.nombre} ${p.apellido}`, p.fecha, p._id)}><BsTrash /></button>
          : <button className='btn btn-red m-2' onClick={() => handleEliminar(p._id)}><BsTrash /></button>
          }
          <button className='btn btn-teal m-2' onClick={() => navigate(`/ver/paciente/${p._id}`)}><BsEye /></button>
          <button className='btn btn-blue m-2' onClick={()=> navigate(`/modificar/paciente/${p._id}`)}><BsPen /></button>
        </td>
      </tr>
    ))

  : (
    <tr>
      <td className="py-14 text-center" colSpan="100%">
        <AiOutlineLoading className=" text-center text-6xl animate-spin inline-block" />
      </td>
    </tr>
  );

  return (
    <>
      {
        visualizarPacientes === 'tabla' 
        ?
          <div className="container !py-10 ">
            <h1 className="container-title mb-5">Lista de pacientes</h1>
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

              <button className=" btn btn-green text-lg sm:text-xl md:text-2xl" onClick={()=> navigate('/registrar/paciente')}><AiOutlinePlus /></button>
            </div>
            <div className=" overflow-x-auto w-11/12 mx-auto mt-4 styled-scrollbar">

              <table className="table-auto rounded w-full min-w-max text-center">
                <thead className="border-b border-green-300 dark:border-zinc-400">
                  <tr className="hover:bg-green-50 dark:hover:bg-zinc-700 transition text-xs sm:text-base">
                    <th className="p-2">Nombre</th>
                    <th className="p-2">Apellido</th>
                    <th className="p-2">Edad</th>
                    <th className="p-2">Carrera</th>
                    <th className="p-2">Grado y grupo</th>
                    <th className="p-2">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {pacientesRows}
                </tbody>
              </table>
            </div>
          </div>
        :
          <div className='container h-5/6'> 
            <h1 className='container-title'>Lista de pacientes</h1>
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
              <button className='btn btn-green absolute right-0 mr-4 -mt-4 text-lg sm:text-xl md:text-2xl' onClick={()=> navigate('/registrar/paciente')}><AiOutlinePlus /></button>
                {pacientesCards} 
            </div>
          </div>
      }

      <ToastContainer theme={colorScheme} position="top-center" />
      <ModalEliminar isActive={modal.isActive} handleEliminar={handleEliminar} setModal={setModal} tipo={modal.tipo} nombre={modal.nombre} fecha={modal.fecha} id={modal.id} />

    </>
  );
};

export default VisualizarPacientes;
