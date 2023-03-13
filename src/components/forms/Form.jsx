import React from "react"



function Form() {

  return (
    <div className="container">
        <form class="w-full max-w-lg">
          <div class="tracking-wide text-3xl font-bold mb-6 text-center">Información Personal del Paciente</div>
          <div class="flex flex-wrap -mx-3 mb-2 ">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nombres">
                Nombre(s)
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Maria" required />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-apellidos">
                Apellido(s)
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Perez" required />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-7">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-genero">
                Genero
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
                  <option>--</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Edad
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="ej:22" required />
            </div>
          </div>
          <div class="tracking-wide text-3xl font-bold mb-6 text-center">Información Curricular del Paciente</div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-carrera">
                Carrera
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-carrera" required>
                  <option>-----</option>
                  <option>TSU en Desarrollo de Negocios Área Mercadotecnia</option>
                  <option>TSU en Diseño Digital Área Animación</option>
                  <option>TSU en Energías Renovables Área Calidad y Ahorro De Energía</option>
                  <option>TSU en Lengua Inglesa</option>
                  <option>TSU en Mantenimiento Área Industrial</option>
                  <option>TSU en Mecatrónica Área Sistemas de Manufactura Flexible</option>
                  <option>TSU en Operaciones Comerciales Internacionales Área Clasificación Arancelaria y Despacho Aduanero</option>
                  <option>TSU en Procesos Industriales Área Manufactura</option>
                  <option>TSU en Tecnologias de la Información</option>
                  <option>Ingeniería en desarrollo y gestión de software</option>
                  <option>Ingeniería en energías renovables</option>
                  <option>Ingeniería en logística internacional</option>
                  <option>Ingeniería en mantenimiento industrial</option>
                  <option>Ingeniería en mecatrónica</option>
                  <option>Licenciatura en gestión institucional, educativa y curricular</option>
                  <option>Licenciatura en innovación de negocios y mercadotecnia</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-7">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-cuatri">
                cuatrimestre
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-cuatri" type="text" placeholder="ej:5to" required />
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                ¿Requiere ayuda?
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
                  <option>--</option>
                  <option>Si</option>
                  <option>No</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
              <p class="text-gray-600 text-xs italic">¿Requiere ayuda médica?</p>
            </div>
            {/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Edad
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="ej:22" required />
            </div> */}
          </div>
          <div class="tracking-wide text-3xl font-bold mb-6 text-center">Historia Médica</div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
              Padecimiento
            </label>
            <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Escribe el padecimiento del paciente" required></textarea>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
              Medicamento
            </label>
            <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Escribe el medicamento del paciente" required></textarea>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
              Observaciones
            </label>
            <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Escribe alguna observación" required>No hay Observación</textarea>
          </div>
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Subir Info
          </button>
        </form>
    </div>
  )
}
export default Form