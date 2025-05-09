
import { todosPersonajes, buscarPersonaje } from "./busquedas";
import { crearPersonajes } from "./creacionPersonajes";
export interface Personaje{
    id: string,
      nombre: string,
      apodo: string,
      especialidad: string,
      habilidades: string[],
      amigo: string,
      imagen: string
}

export const listado = document.getElementById("listadoPersonajes")

const obtenerValorCampo = (nombre: string): string => {
const elementoCampo = document.getElementById(nombre);
if (
(elementoCampo && elementoCampo instanceof HTMLInputElement) ||
elementoCampo instanceof HTMLTextAreaElement
) {
return elementoCampo.value;
} else {
throw new Error("No se ha encontrado el campo");
}
};

document.addEventListener("DOMContentLoaded", ( )=> {
todosPersonajes().then((data)=>{
    data.forEach(element => {
       crearPersonajes(element) 
    });
    
})
})

let barra = document.getElementById("barraBusqueda")
let boton = document.getElementById("botonBusqueda")

const actualizaPersonajes = async(evento: Event): Promise<void> => {
evento.preventDefault();
let barra = obtenerValorCampo("barraBusqueda");
if (listado != null){
listado.innerHTML = " "
    buscarPersonaje(barra).then((data)=>{    
        data.forEach(element => {
           crearPersonajes(element) 
        });
})
}}

const formulario = document.getElementById("busqueda")

if (formulario && formulario instanceof HTMLFormElement) {
formulario.addEventListener("submit", actualizaPersonajes);
} else {
throw new Error("No se ha encontrado el formulario");
}



