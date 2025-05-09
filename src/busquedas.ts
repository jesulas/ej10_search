import axios, { AxiosResponse } from "axios";

export const todosPersonajes = () => 
    axios
    .get("http://localhost:3000/personajes")
    .then((response) => {
    console.log(response.data)
    return response.data
    })
    .catch((error) => {
    console.log(error);
    })

export const buscarPersonaje = (nombre: string) =>
    axios
    .get("http://localhost:3000/personajes?nombre_like=" + nombre)
    .then((response) => {
    console.log(response.data)
    return response.data;
    })
    .catch((error) => {
    console.log(error);
    })