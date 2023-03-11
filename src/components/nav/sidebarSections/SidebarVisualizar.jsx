import React, { forwardRef } from "react";
import {BsClockHistory, BsPerson} from 'react-icons/bs'
import { Link } from "react-router-dom";

const SidebarVisualizar = forwardRef((props, ref) => {
  return (
    <div className="sidebar-section !-translate-x-full" ref={ref}>
      <h2 className="px-5 text-lg font-medium ">Visualizar</h2>
      <hr className="my-4 border-green-500 dark:border-green-100"></hr>
      <p>
        ¿Qué información deseas consultar?
      </p>
      <div className="my-8 grid gap-6 px-4">
        <Link to={'visualizar/registros'} className="btn btn-green"><BsClockHistory className=" inline-block -translate-x-1 mb-1"/> Historial de registros</Link>
        <Link to={'visualizar/pacientes'} className="btn btn-yellow"><BsPerson className=" inline-block -translate-x-0.5 mb-1" /> Lista de pacientes</Link>
      </div>
    </div>
  );
});

export default SidebarVisualizar;
