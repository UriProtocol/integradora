import React, {forwardRef, useRef} from "react";
import { Link } from "react-router-dom";

const SidebarHome = forwardRef((props, ref) =>{

    return (
        <div className="sidebar-section sm:!translate-x-16" ref={ref}>
          <h2 className="px-5 text-lg font-medium">Home</h2>
          <hr className="my-4 border-green-500 dark:border-green-100"></hr>
          <p className="mb-8">
            Hola, esta es la sección de Home
          </p>
          <Link to={'/'} className="btn btn-green">Volver al inicio</Link>
        </div>
      )
})

export default SidebarHome;
