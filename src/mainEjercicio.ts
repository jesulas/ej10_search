import axios, { AxiosResponse } from "axios";

interface Personaje{
    id: string,
      nombre: string,
      apodo: string,
      especialidad: string,
      habilidades: string[],
      amigo: string,
      imagen: string
}

const listado = document.getElementById("listadoPersonajes")

const crearPersonajes = (datos: Personaje) =>{
    console.log(datos)
    let contenedor = document.createElement("div");
    contenedor.classList.add("contenedor");
    listado?.appendChild(contenedor)
    let imagen = crearImagen(datos.imagen)
    contenedor.appendChild(imagen)
    let nombre = crearNombre(datos.nombre)
    contenedor.appendChild(nombre)
    let apodo = crearApodo(datos.apodo)
    contenedor.appendChild(apodo)
    let especialidad = crearEspecialidad(datos.especialidad)
    contenedor.appendChild(especialidad)
    let habilidad = crearHabilidades(datos.habilidades)
    contenedor.appendChild(habilidad)
}

const crearImagen = (foto: string) =>{
    const imagen = document.createElement("img");
    imagen.src= `http://localhost:3000/` + foto ;
    return imagen
}

const crearNombre = (nombre: string) =>{
    const nombr = document.createElement("h4");
    nombr.innerHTML = nombre;
    return nombr
}

const crearApodo = (apodo: string) =>{
    const apod = document.createElement("p");
    apod.innerHTML = apodo;
    return apod
}
const crearEspecialidad = (especialidad: string) =>{
    const spec = document.createElement("p");
    spec.innerHTML = especialidad;
    return spec
}

const crearHabilidades = (habilidades:string[]) =>{
    const lista = document.createElement("ul");
    let habil = habilidades.forEach(item =>{
        let li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li)
    })
    return lista
}

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

const todosPersonajes = () => 
    axios
    .get("http://localhost:3000/personajes")
    .then((response) => {
    console.log(response.data)
    return response.data
    })
    .catch((error) => {
    console.log(error);
    })


document.addEventListener("DOMContentLoaded", ( )=> {
todosPersonajes().then((data)=>{
    data.forEach(element => {
       crearPersonajes(element) 
    });
    
})
})


const buscarPersonaje = (nombre: string) =>
    axios
    .get("http://localhost:3000/personajes?nombre_like=" + nombre)
    .then((response) => {
    console.log(response.data)
    return response.data;
    })
    .catch((error) => {
    console.log(error);
    })

let barra = document.getElementById("barraBusqueda")
let boton = document.getElementById("botonBusqueda")

/*
 if (boton != null){
boton.addEventListener("click", () => {
    if (listado != null){
        if (barra != null && barra instanceof HTMLInputElement){
    listado.innerHTML = " "
    buscarPersonaje(obtenerValorCampo).then((data)=>{    
        data.forEach(element => {
           crearPersonajes(element) 
        });
})
}
}
 })}
*/

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



