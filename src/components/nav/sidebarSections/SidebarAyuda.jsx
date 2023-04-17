import React, { forwardRef, useState } from "react";
import ModalAyuda1 from "../../modals/ayuda/ModalAyuda1";
import ModalAyuda2 from "../../modals/ayuda/ModalAyuda2";
import ModalAyuda3 from "../../modals/ayuda/ModalAyuda3";
// import { BsSearch } from "react-icons/bs";

const SidebarAyuda = forwardRef((props, ref) => {

  const [modalAyuda, setModalAyuda] = useState({
    1: false,
    2: false,
    3: false,
  })

  function handleModalAyuda(num){
    switch (num) {
      case 1:
        setModalAyuda({...modalAyuda, 1: true})
        break;
      case 2:
        setModalAyuda({...modalAyuda, 2: true})
        break;
      case 3:
        setModalAyuda({...modalAyuda, 3: true})
        break;  
      default:
        break;
    }

  }

  return (
    <div className="sidebar-section !-translate-x-full" ref={ref}>
      <h2 className="px-5 text-lg font-medium">Ayuda</h2>
      <hr className="my-4 border-green-500 dark:border-green-100"></hr>
      {/* <BsSearch className=" absolute mt-[1.4rem] ml-5" /><input className="sidebar-input" placeholder="Buscar en ayuda"/> */}
      <button className='py-2 px-4 ml-4 bg-green-200 dark:bg-zinc-700 rounded mt-2 mb-3' onClick={()=> handleModalAyuda(1)}>Botón de ayuda 1</button>
      <button className='py-2 px-4 ml-4 bg-green-200 dark:bg-zinc-700 rounded my-3' onClick={()=> handleModalAyuda(2)}>Botón de ayuda 2</button>
      <button className='py-2 px-4 ml-4 bg-green-200 dark:bg-zinc-700 rounded my-3' onClick={()=> handleModalAyuda(3)}>Botón de ayuda 3</button>

      <ModalAyuda1 isActive={modalAyuda[1]} setModal={setModalAyuda}/>
      <ModalAyuda2 isActive={modalAyuda[2]} setModal={setModalAyuda}/>
      <ModalAyuda3 isActive={modalAyuda[3]} setModal={setModalAyuda}/>
    </div>
  );
});

export default SidebarAyuda;
