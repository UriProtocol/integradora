import React, { createRef } from "react";
import {AiOutlineHome, AiOutlineForm, AiOutlineEye, AiOutlineSetting, AiOutlineQuestionCircle, AiOutlinePlusCircle} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

const Submenu = ({handleSection, handleSubMenu}) => {

    const navigate = useNavigate()

    const subMenu = createRef()
    const subMenuToggle = createRef()

    const homeIcon = createRef()
    const registrarIcon = createRef()
    const visualizarIcon = createRef()
    const configIcon = createRef()
    const ayudaIcon = createRef()

    const iconList = [ registrarIcon, visualizarIcon, configIcon, ayudaIcon]


  return (
    <>
      <div className="submenu -translate-x-full sm:translate-x-0" ref={subMenu}>
       
        <AiOutlinePlusCircle className=" text-3xl text-green-600 dark:text-green-200 cursor-pointer" onClick={()=> navigate('/')}/>
        <small className=" text-xs !mt-2 text-green-600 dark:text-green-200 font-semibold cursor-pointer" onClick={()=> navigate('/')}>Medifiles</small>


        {/* <button
          className="submenu-icon sm:bg-green-300 sm:dark:bg-zinc-700"
          // onClick={() => handleSection('home', homeIcon, iconList)}
          onClick={()=> navigate('/')}
          ref={homeIcon}
        >
          <AiOutlineHome className="text-2xl"/>

        </button> */}

        <button
          className="submenu-icon"
          onClick={() => handleSection('registrar', registrarIcon, iconList)}
          ref={registrarIcon}

        >
          
          <AiOutlineForm className="text-2xl"/>

        </button>

        <button
          className="submenu-icon"
          onClick={() => handleSection('visualizar', visualizarIcon, iconList)}
          ref={visualizarIcon}


        >
          <AiOutlineEye className="text-2xl"/>
        </button>

        <button
          className="submenu-icon"
          onClick={() => handleSection('config', configIcon, iconList)}
          ref={configIcon}

        >
          <AiOutlineSetting className="text-2xl"/>
        </button>

        <button
          className="submenu-icon"
          onClick={() => handleSection('ayuda', ayudaIcon, iconList)}
          ref={ayudaIcon}

        >
            <AiOutlineQuestionCircle className="text-2xl" />
        </button>
      </div>

      {/* Toggle del sidebar para dispositivos pequeños */}
      <div className="submenu-toggle border border-l-0 border-green-100 cursor-pointer" onClick={() => handleSubMenu(subMenu, subMenuToggle)} ref={subMenuToggle}>
        <AiOutlinePlusCircle className=" text-3xl text-green-600 dark:text-green-200"/>
        <small className=" text-xs text-green-600 dark:text-green-200 font-semibold -ml-2.5">Medifiles</small>
      </div>
    </>
  );
};

export default Submenu;
