import React, { useRef, useState, useEffect } from "react";
import Submenu from "./Submenu";
import SidebarHome from "./sidebarSections/SidebarHome";
import SidebarRegistrar from "./sidebarSections/SidebarRegistrar";
import SidebarVisualizar from "./sidebarSections/SidebarVisualizar";
import SidebarConfig from "./sidebarSections/SidebarConfig";
import SidebarAyuda from "./sidebarSections/SidebarAyuda";

const Sidebar = ({setTheme}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); //Obteniendo la anchura del dispositivo

  //Actualizando la anchura si el dispositivo cambia de tamaño
  useEffect(() => {

    if (windowWidth < 640) {
      home.current.classList.add("invisible");
      home.current.classList.add("!-translate-x-full"); //Haciendo desaparecer la sección del sidebar si el dispositivo es pequeño al renderizar el componente
      setTimeout(() => {
        home.current.classList.remove("invisible")
      }, 150);
    }

    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);

      if (windowWidth < 640) home.current.classList.add("!-translate-x-full"); //Haciendo desaparecer la sección del sidebar si el dispositivo es pequeño al cambiar el tamaño de la ventana
      
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  //Creando refs para cada una de las secciones de la sidebar
  const home = useRef();
  const registrar = useRef();
  const visualizar = useRef();
  const config = useRef();
  const ayuda = useRef();

  const secciones = [home, registrar, visualizar, config, ayuda]; //Creando un arreglo con todas las refs


  //Función para cambiar de sección al hacer click en el ícono
  function handleSection(section, icon, iconList) {
    if (windowWidth < 1024) {
      switch (section) {
        case "home":
          secciones.forEach((sec) => {
            if (sec !== home) sec.current.classList.add("!-translate-x-full"); //Desactivar las demás secciones
          });
          home.current.classList.toggle("!-translate-x-full"); //Activar y desactivar la sección
          home.current.classList.remove("sm:!translate-x-16");
          break;
        case "registrar":
          secciones.forEach((sec) => {
            if (sec !== registrar)
              sec.current.classList.add("!-translate-x-full");
            if (sec.current.classList.contains("sm:!translate-x-16"))
              sec.current.classList.remove("sm:!translate-x-16"); //Desactivar la sección home que es la que está abierta por defecto
          });
          registrar.current.classList.toggle("!-translate-x-full");

          break;
        case "visualizar":
          secciones.forEach((sec) => {
            if (sec !== visualizar)
              sec.current.classList.add("!-translate-x-full");
            if (sec.current.classList.contains("sm:!translate-x-16"))
              sec.current.classList.remove("sm:!translate-x-16");
          });
          visualizar.current.classList.toggle("!-translate-x-full");

          break;
        case "config":
          secciones.forEach((sec) => {
            if (sec !== config) sec.current.classList.add("!-translate-x-full");
            if (sec.current.classList.contains("sm:!translate-x-16"))
              sec.current.classList.remove("sm:!translate-x-16");
          });
          config.current.classList.toggle("!-translate-x-full");

          break;
        case "ayuda":
          secciones.forEach((sec) => {
            if (sec !== ayuda) sec.current.classList.add("!-translate-x-full");
            if (sec.current.classList.contains("sm:!translate-x-16"))
              sec.current.classList.remove("sm:!translate-x-16");
          });
          ayuda.current.classList.toggle("!-translate-x-full");
          break;
        default:
          break;
      }
    }else{ //En dispositivos grandes, el sidebar siempre estará abierto, por lo cual utilizamos remove en vez de toggle
      switch (section) {
        case 'home':
            secciones.forEach((sec) => {
              if (sec !== home) sec.current.classList.add("!-translate-x-full"); //Desactivar las demás secciones
            });
            home.current.classList.remove("!-translate-x-full"); //Activar la sección
          break;
        case 'registrar':
            secciones.forEach((sec) => {
              if (sec !== registrar)
                sec.current.classList.add("!-translate-x-full");
              if (sec.current.classList.contains("sm:!translate-x-16"))
                sec.current.classList.remove("sm:!translate-x-16"); //Desactivar la sección home que es la que está abierta por defecto
            });
            registrar.current.classList.remove("!-translate-x-full");
          break;
        case 'visualizar':
            secciones.forEach((sec) => {
              if (sec !== visualizar)
                sec.current.classList.add("!-translate-x-full");
              if (sec.current.classList.contains("sm:!translate-x-16"))
                sec.current.classList.remove("sm:!translate-x-16"); //Desactivar la sección home que es la que está abierta por defecto
            });
            visualizar.current.classList.remove("!-translate-x-full");
          break;
        case 'config':
            secciones.forEach((sec) => {
              if (sec !== config)
                sec.current.classList.add("!-translate-x-full");
              if (sec.current.classList.contains("sm:!translate-x-16"))
                sec.current.classList.remove("sm:!translate-x-16"); //Desactivar la sección home que es la que está abierta por defecto
            });
            config.current.classList.remove("!-translate-x-full");
          break;
        case 'ayuda':
            secciones.forEach((sec) => {
              if (sec !== ayuda)
                sec.current.classList.add("!-translate-x-full");
              if (sec.current.classList.contains("sm:!translate-x-16"))
                sec.current.classList.remove("sm:!translate-x-16"); //Desactivar la sección home que es la que está abierta por defecto
            });
            ayuda.current.classList.remove("!-translate-x-full");
          break;
          
        default:
          break;
      }
    }

    if(windowWidth < 1024){
      iconList.forEach((i) => {
        if (i !== icon) { //Quitar el highlight del ícono si no es el ícono de la sección que se encuentra activa
          i.current.classList.remove("bg-green-300");
          i.current.classList.remove("dark:bg-zinc-700");
        }
        if(i.current.classList.contains("sm:bg-green-300") && i.current.classList.contains("sm:dark:bg-zinc-700")){ //Quitar el highlight que tiene el ícono home por defecto si es que aún lo tiene
          i.current.classList.remove("sm:bg-green-300")
          i.current.classList.remove("sm:dark:bg-zinc-700")
        }
      });
      icon.current.classList.toggle("bg-green-300"); //Hacer toggle al highlight del ícono de la sección que se encuentra activa
      icon.current.classList.toggle("dark:bg-zinc-700");

    }else{
      iconList.forEach((i) => {
        if (i !== icon) { //Quitar el highlight del ícono si no es el ícono de la sección que se encuentra activa
          i.current.classList.remove("bg-green-300");
          i.current.classList.remove("dark:bg-zinc-700");
        }
        if(i.current.classList.contains("sm:bg-green-300") && i.current.classList.contains("sm:dark:bg-zinc-700")){ //Quitar el highligh que tiene el ícono home por defecto si es que aún lo tiene
          i.current.classList.remove("sm:bg-green-300")
          i.current.classList.remove("sm:dark:bg-zinc-700")
        }
      });
      icon.current.classList.add("bg-green-300"); //Como no se puede quitar el sidebar en dispositivos grandes, en vez de hacer toggle solo agregamos el highlight al ícono
      icon.current.classList.add("dark:bg-zinc-700");
    }
  }

  //Función para hacer aparecer el submenu al hacer click en el toggle
  function handleSubMenu(subMenu, subMenuToggle) {
    subMenu.current.classList.toggle("-translate-x-full");
    subMenuToggle.current.classList.toggle("border-none");
    secciones.forEach((sec) => {
      sec.current.classList.add("!-translate-x-full");
    });
  }

  return (
    <aside className="flex">
      <Submenu handleSection={handleSection} handleSubMenu={handleSubMenu} />
      <SidebarHome ref={home} /> {/* Sección de home */}
      <SidebarRegistrar ref={registrar} /> {/* Sección de registrar */}
      <SidebarVisualizar ref={visualizar} /> {/* Sección de visualizar */}
      <SidebarConfig ref={config} setTheme={setTheme}/> {/* Sección de config */}
      <SidebarAyuda ref={ayuda} /> {/* Sección de ayuda */}
    </aside>
  );
};

export default Sidebar;
