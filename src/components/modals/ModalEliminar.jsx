import React from 'react'
import ReactDom from 'react-dom'

export default function ModalEliminar({tipo, handleEliminar, id, nombre, fecha, isActive, setModal}) {

    if(!isActive) return null

    const theme = localStorage.getItem('theme')
    const isDark = theme === 'dark'

    function handleClose(){
        setModal({
            isActive: false,
            tipo: '',
            id: '',
            nombre: '',
            fecha: ''
        })
    }
    function handleBorrar(id){
        handleEliminar(id)
        handleClose()
    }
    

    return (
    ReactDom.createPortal(
    <>
        <div className={` pl-8 lg:pl-80 bg-black bg-opacity-50 backdrop-blur-sm inset-0 z-[90] fixed grid place-content-center ${isDark ? 'dark' : ''} animate-fade-in`}>
            <div className='bg-white dark:bg-zinc-800 p-8 rounded shadow-lg text-center text-green-900 dark:text-green-50 z-20 animate-popup-appear'>
                <h2 className='text-xl font-semibold pb-2 border-b border-green-700 dark:border-zinc-500'>{nombre} <span className='ml-4'>{tipo === "registro" ? fecha : ''}</span></h2>
                <p className='mt-4 text-lg'>¿Estás seguro de que deseas eliminar este {tipo}?</p>
                <div className='flex justify-center gap-6 mt-4'>
                    <button className='btn btn-slate' onClick={handleClose}>Volver</button>
                    <button className='btn btn-red' onClick={() => handleBorrar(id)}>Aceptar</button>
                </div>
            </div>
            <div className='inset-0 fixed z-10' onClick={handleClose}/> {/*Al hacer click en el fondo ta,bién se cerrará el popup*/}
        </div>

    </>,
    document.querySelector('#portal')
    )
    )
}
