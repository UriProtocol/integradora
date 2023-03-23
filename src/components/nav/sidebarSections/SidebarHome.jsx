import React, {forwardRef, useRef} from "react";
import { Link } from "react-router-dom";

const SidebarHome = forwardRef((props, ref) =>{

    return (
        <div className="sidebar-section sm:!translate-x-16" ref={ref}>
          <h2 className="px-5 text-lg font-medium">Home</h2>
          <hr className="mt-4 mb-8 border-green-500 dark:border-green-100"></hr>
          <Link to={'/'} className="btn btn-green">Volver al inicio</Link>
        </div>
      )
})

export default SidebarHome;
