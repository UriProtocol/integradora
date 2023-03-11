import React, { forwardRef } from "react";
import {AiOutlineSearch} from 'react-icons/ai'


const SidebarAyuda = forwardRef((props, ref) => {
  return (
    <div className="sidebar-section !-translate-x-full" ref={ref}>
      <h2 className="px-5 text-lg font-medium">Ayuda</h2>
      <hr className="my-4 border-green-500 dark:border-green-100"></hr>
      <AiOutlineSearch className=" absolute mt-[1.3rem] ml-4 text-xl" /><input className="sidebar-input" placeholder="Buscar en ayuda"/>
    </div>
  );
});

export default SidebarAyuda;
