import axios from "axios";

interface personaje {
"id": "1",
      "nombre": "Mortadelo",
      "apodo": "Mortadelo",
      "especialidad": "Disfraces",
      "habilidades": ["Camuflaje", "Imitaciones", "Huida rápida"],
      "amigo": "Filemón",
      "imagen": "mortadelo.webp"
}

const buscarPersonaje = (nombre) =>
    axios
    .get("http://localhost:3000/personajes?nombre_like=" + nombre)
    .then((response) => {
    console.log(response.data);
    })
    .catch((error) => {
    console.log(error);
    })
    ;

let barra = document.getElementById("busqueda")

if (barra != null  && barra instanceof HTMLInputElement ){
    barra.onchange = buscarPersonaje(barra.value)
}
    