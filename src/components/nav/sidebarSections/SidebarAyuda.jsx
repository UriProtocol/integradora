import React, { forwardRef } from "react";
import { BsSearch } from "react-icons/bs";

const SidebarAyuda = forwardRef((props, ref) => {
  return (
    <div className="sidebar-section !-translate-x-full" ref={ref}>
      <h2 className="px-5 text-lg font-medium">Ayuda</h2>
      <hr className="my-4 border-green-500 dark:border-green-100"></hr>
      <BsSearch className=" absolute mt-[1.4rem] ml-5" /><input className="sidebar-input" placeholder="Buscar en ayuda"/>
    </div>
  );
});

export default SidebarAyuda;
