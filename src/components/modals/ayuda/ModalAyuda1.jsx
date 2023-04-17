import React from 'react'
import ReactDom from 'react-dom'

export default function ModalAyuda1({isActive, setModal}) {
    if(!isActive) return null

    const theme = localStorage.getItem('theme')
    const isDark = theme === 'dark'

    function handleClose() {
        setModal(false)
    }

  return (
    ReactDom.createPortal(
        <>
            <div className={` pl-8 lg:pl-80 bg-black bg-opacity-50 backdrop-blur-sm inset-0 z-[90] fixed grid place-content-center ${isDark ? 'dark' : ''} animate-fade-in`}>
                <div className='bg-white dark:bg-zinc-800 p-8 rounded shadow-lg text-center text-green-900 dark:text-green-50 z-20 animate-popup-appear'>
                    <h2 className='text-xl font-semibold pb-2 border-b border-green-700 dark:border-zinc-500'>Ayuda 1</h2>
                    <p className='mt-4 text-lg'>Hola, este es el mensaje de ayuda 1</p>
                    <button className='btn btn-blue !px-3 mt-4' onClick={handleClose}>OK</button>
                </div>
                <div className='inset-0 fixed z-10' onClick={handleClose}/> {/*Al hacer click en el fondo también se cerrará el popup*/}
            </div>
        </>
    ,document.querySelector('#portal'))
  )
}
