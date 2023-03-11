import React, { forwardRef } from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import {BsMoon, BsSun} from 'react-icons/bs'


const SidebarConfig = forwardRef((props, ref) => {
  return (
    <div className="sidebar-section !-translate-x-full" ref={ref}>
      <h2 className="px-5 text-lg font-medium ">Configuración</h2>
      <hr className="my-4 border-green-500 dark:border-green-100"></hr>
      <AiOutlineSearch className=" absolute mt-[1.3rem] ml-4 text-xl" /><input placeholder="Buscar en configuración" className="sidebar-input"/>
      <p className="mt-8">Tema <BsMoon className="inline-block mb-1.5 ml-4 text-sm"/> <BsSun className="inline-block mb-1.5 ml-4"/></p>

    </div>
  );
});

export default SidebarConfig;
