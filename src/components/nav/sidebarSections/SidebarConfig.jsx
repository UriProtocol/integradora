import React, { forwardRef } from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import {BsMoon, BsSun} from 'react-icons/bs'


const SidebarConfig = forwardRef((props, ref) => {

  const isDarkMode = localStorage.getItem('theme') === 'dark'

  function handleThemeToggle(theme){
    props.setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  return (
    <div className="sidebar-section !-translate-x-full" ref={ref}>
      <h2 className="px-5 text-lg font-medium ">Configuración</h2>
      <hr className="my-4 border-green-500 dark:border-green-100"></hr>
      <AiOutlineSearch className=" absolute mt-[1.3rem] ml-4 text-xl" /><input placeholder="Buscar en configuración" className="sidebar-input"/>
      {isDarkMode ? <button onClick={() => handleThemeToggle('light')} className='py-2 px-4 ml-4 bg-zinc-700 rounded mt-8'>Cambiar tema <BsMoon className="inline-block ml-2 mb-1.5 text-sm"/></button> : <button onClick={() => handleThemeToggle('dark')} className='py-2 px-4 ml-4 bg-green-200 rounded mt-8'>Cambiar tema <BsSun className="inline-block mb-1 ml-2"/></button>}

    </div>
  );
});

export default SidebarConfig;
