import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/nav/Sidebar'
import Home from './pages/Home'
import RegistroManual from './pages/registrar/RegistroManual'
import RegistroAutomatico from './pages/registrar/RegistroAutomatico'
import RegistroPaciente from './pages/registrar/RegistroPaciente'
import VisualizarRegistros from './pages/visualizar/VisualizarRegistros'
import VisualizarPacientes from './pages/visualizar/VisualizarPacientes'

function App() {

  return (
  <div className='app'>
    <Sidebar />
    <div className='flex justify-center items-center ml-auto flex-1 lg:flex-none lg:w-[calc(100%-20rem)] p-8'>
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
      </Routes>
    </div>
  </div>
  )
}

export default App
