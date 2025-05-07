import axios, { AxiosResponse } from "axios";

interface personaje {
"id": "1",
      "nombre": "Mortadelo",
      "apodo": "Mortadelo",
      "especialidad": "Disfraces",
      "habilidades": ["Camuflaje", "Imitaciones", "Huida rápida"],
      "amigo": "Filemón",
      "imagen": "mortadelo.webp"
}

const listado = document.getElementById("listadoPersonajes")

const crearPersonajes = (datos: AxiosResponse) =>{
    let imagen = crearImagen(datos.data.imagen)
    listado?.appendChild(imagen)
    let nombre = crearNombre(datos.data.nombre)
    listado?.appendChild(nombre)
    let apodo = crearApodo(datos.data.apodo)
    listado?.appendChild(apodo)
    let especialidad = crearEspecialidad(datos.data.especialidad)
    listado?.appendChild(especialidad)
    let habilidad = crearHabilidades(datos.data.habilidades)
    listado?.appendChild(habilidad)
}

const crearImagen = (foto: string) =>{
    const imagen = document.createElement("img");
    imagen.src=foto;
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


const todosPersonajes = () => 
    axios
    .get("http://localhost:3000/personajes")
    .then((response) => {
    console.log(response.data)
    return response;
    })
    .catch((error) => {
    console.log(error);
    })


todosPersonajes();
/*
const buscarPersonaje = (nombre: string) =>
    axios
    .get("http://localhost:3000/personajes?nombre_like=" + nombre)
    .then((response) => {
    console.log(response.data);
    })
    .catch((error) => {
    console.log(error);
    })
*/

crearPersonajes(todosPersonajes())

/*
let barra = document.getElementById("busqueda")
if (barra !== null && barra instanceof HTMLInputElement ){
   barra.addEventListener("keydown", buscarPersonaje(barra.value))
   //barra.onchange = buscarPersonaje(barra.value)
}*/


