import React from 'react'
import ReactDom from 'react-dom'

export default function ModalModificar({ handleSubmit, nombre, isActive, setModal}) {

    if(!isActive) return null

    const theme = localStorage.getItem('theme')
    const isDark = theme === 'dark'

    function handleClose(){
       setModal({
        nombre: '',
        isActive: false
       })
    }
   
    return (
    ReactDom.createPortal(
    <>
        <div className={`bg-black bg-opacity-50 backdrop-blur-sm inset-0 z-[90] fixed grid place-content-center ${isDark ? 'dark' : ''}`} onClick={handleClose}>
            <div className='bg-white dark:bg-zinc-800 p-8 rounded shadow-lg text-center text-green-900 dark:text-green-50 z-20'>
                <h2 className='text-xl font-semibold pb-2 border-b border-green-700 dark:border-zinc-500'>{nombre}</h2>
                <p className='mt-4 text-lg'>¿Estás seguro de que deseas realizar estos cambios al paciente?</p>
                <p className='mt-2 opacity-80'>Los cambios son irreversibles</p>
                <div className='flex justify-center gap-6 mt-5'>
                    <button className='btn btn-slate' onClick={handleClose}>Volver</button>
                    <button className='btn btn-blue' onClick={handleSubmit}>Aceptar</button>
                </div>
            </div>
            <div className='inset-0 fixed z-10' onClick={handleClose}/>
        </div>
    </>,
    document.querySelector('#portal')
    )
    )
}
