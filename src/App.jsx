import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/nav/Sidebar'
import Home from './pages/Home'
import RegistroManual from './pages/registrar/RegistroManual'
import RegistroAutomatico from './pages/registrar/RegistroAutomatico'
import RegistroPaciente from './pages/registrar/RegistroPaciente'
import VisualizarRegistros from './pages/visualizar/VisualizarRegistros'
import VisualizarPacientes from './pages/visualizar/VisualizarPacientes'
import Form from './components/forms/Form'

import usePrefersColorScheme from 'use-prefers-color-scheme' //Hook para obtener el tema preferido del usuario (claro / oscuro)
import { useEffect, useState } from 'react'

function App() {

  const [theme, setTheme] = useState()

  const defaultColor = usePrefersColorScheme()

  useEffect(() =>{
    handleTheme()
  }, [theme])


  function handleTheme() {
    if(localStorage.getItem("theme")){
      setTheme(localStorage.getItem("theme"))
    }else{
      setTheme(defaultColor)
      localStorage.setItem('theme', theme)
    }
  }

  return (
  <div className={`app ${theme}`}>
    {/* El siguiente div hace que el fondo fuera del div app se mantenga del color del fondo */}
    <div className=' -z-50 fixed bg-green-50 dark:bg-zinc-700 h-[200vh] w-[200vw]'></div> 
    <Sidebar setTheme={setTheme} />
    <div className='flex justify-center items-center ml-auto flex-1 lg:flex-none w-screen lg:w-[calc(100%-20rem)] p-8 bg-green-50 dark:bg-zinc-700 text-green-900 dark:text-green-50'>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='registrar'>
          <Route path='manual' element={<RegistroManual />}/>
          <Route path='automatico' element={<RegistroAutomatico />}/>
          <Route path='paciente' element={<RegistroPaciente />}/>
        </Route>
        <Route path='visualizar'>
          <Route path='registros' element={<VisualizarRegistros />}></Route>
          <Route path='pacientes' element={<VisualizarPacientes />}></Route>
        </Route>
        <Route path='form' element={<Form />} />
      </Routes>
    </div>
  </div>
  )
}

export default App
