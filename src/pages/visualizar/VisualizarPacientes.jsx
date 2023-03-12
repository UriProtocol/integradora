import React from 'react'
import {BsEye, BsPen, BsTrash} from 'react-icons/bs'

const VisualizarPacientes = () => {
  return (
    <>
        <div className='rounded shadow-md bg-white dark:bg-zinc-800 w-11/12 sm:10/12 py-6 px-8'>
            <h1 className='text-xl sm:text-2xl md:text-3xl border-b border-green-300 dark:border-zinc-300 w-fit mx-auto pb-3'>Lista de pacientes</h1>
            {/* <hr className='my-2 w-1/2  mx-auto'/> */}
            <div className=' overflow-x-auto w-full'>
                <table className=' table-auto w-full min-w-max mt-6 text-center'>
                    <thead className='border-b border-green-300 dark:border-zinc-400'>
                        <tr className='hover:bg-green-50 dark:hover:bg-zinc-700 transition text-xs sm:text-base'>
                            <th className='p-2'>Id</th>
                            <th className='p-2'>Nombre</th>
                            <th className='p-2'>Apellido</th>
                            <th className='p-2'>Edad</th>
                            <th className='p-2'>Carrera</th>
                            <th className='p-2'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='hover:bg-green-50 dark:hover:bg-zinc-700 transition text-xs sm:text-base'>
                            <td className='p-2'>1</td>
                            <td className='p-2'>Eduardo</td>
                            <td className='p-2'>Garcia</td>
                            <td className='p-2'>19</td>
                            <td className='p-2'>TI</td>
                            <td className='p-2'>
                                <button className='btn btn-red m-2'><BsTrash /></button>
                                <button className='btn btn-teal m-2'><BsEye /></button>
                                <button className='btn btn-blue m-2'><BsPen /></button>
                            </td>
                        </tr>
                        <tr className='border-t border-green-200 dark:border-zinc-500 hover:bg-green-50 dark:hover:bg-zinc-700 transition text-xs sm:text-base'>
                            <td className='p-2'>2</td>
                            <td className='p-2'>Daniel</td>
                            <td className='p-2'>Compean</td>
                            <td className='p-2'>19</td>
                            <td className='p-2'>TI</td>
                            <td className='p-2'>
                                <button className='btn btn-red m-2'><BsTrash /></button>
                                <button className='btn btn-teal m-2'><BsEye /></button>
                                <button className='btn btn-blue m-2'><BsPen /></button>
                            </td>
                        </tr>
                        <tr className='border-t border-green-200 dark:border-zinc-500 hover:bg-green-50 dark:hover:bg-zinc-700 transition text-xs sm:text-base'>
                            <td className='p-2'>3</td>
                            <td className='p-2'>Juan</td>
                            <td className='p-2'>Contreras</td>
                            <td className='p-2'>19</td>
                            <td className='p-2'>TI</td>
                            <td className='p-2'>
                                <button className='btn btn-red m-2'><BsTrash /></button>
                                <button className='btn btn-teal m-2'><BsEye /></button>
                                <button className='btn btn-blue m-2'><BsPen /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </>
  )
}

export default VisualizarPacientes
