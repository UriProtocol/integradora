import React, { forwardRef } from "react";
import {BsFastForward, BsPencil, BsPersonPlus} from 'react-icons/bs'
import { Link } from "react-router-dom";

const SidebarRegistrar = forwardRef((props, ref) => {
  return (
    <div className="sidebar-section !-translate-x-full" ref={ref}>
      <h2 className="px-5 text-lg font-medium ">Registrar</h2>
      <hr className="my-4 border-green-500 dark:border-green-100"></hr>
      <p>
        ¿Qué información deseas registrar?
      </p>
      <div className="my-8 grid gap-6 px-4">
        <Link to={'registrar/manual'} className="btn btn-blue"><BsPencil className=" inline-block -translate-x-2 mb-1"/> Registro manual</Link>
        <Link to={'registrar/automatico'} className="btn btn-yellow"><BsFastForward className=" inline-block -translate-x-0.5 mb-1" /> Registro automático</Link>
        <Link to={'registrar/paciente'} className="btn btn-green"><BsPersonPlus className=" inline-block -translate-x-1 mb-1"/> Agregar paciente</Link>
      </div>
    </div>
  );
});

export default SidebarRegistrar;
