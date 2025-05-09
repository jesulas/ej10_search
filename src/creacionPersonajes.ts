import { Personaje, listado } from "./mainEjercicio";

export const crearPersonajes = (datos: Personaje) =>{
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