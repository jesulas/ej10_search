import axios from "axios";
/*
const nuevaPelicula = {
    title: "Spider-Man",
    year: 2002,
    director: "Sam Raimi",
    description:
    "Shy student Peter Parker acquires special abilities after being bitten by a genetically modified spider. Under the identity of Spider-Man, he fights crime in New York while dealing with his personal problems.",
    actors: ["Tobey Maguire", "Willem Dafoe", "Kirsten Dunst"],
    coverUrl: "https://example.com/spiderman.jpg",
    };
*/
/*

    const agregaPelicula = (nuevaPelicula) =>
        axios
        .post("http://localhost:3000/movies", nuevaPelicula)
        .then((response) => {
        console.log(response.data);
        })
        .catch((error) => {
        console.log(error);
        });

        agregaPelicula(nuevaPelicula);
        
*/
    /*
const agregaPelicula = (nuevaPelicula) => {
    fetch("http://localhost:3000/movies", {
    method: "POST",
    body: JSON.stringify(nuevaPelicula),
    headers: {
    "Content-Type": "application/json",
    },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
    };

    agregaPelicula(nuevaPelicula);
    */
/*
    const nuevoActor = {
        name: "Tom Holland",
        movies: [
        "Captain America: Civil War",
        "Spider-Man: Homecoming",
        "Avengers: Infinity War",
        "Spider-Man: Far From Home",
        "Spider-Man: No Way Home",
        ],
        bio: "Thomas Stanley Holland is an English actor. A graduate of the BRIT School in London, he began his acting career on stage in the title role of Billy Elliot the Musical in London s West End from 2008 to 2010.",
        image: "https://example.com/tom-holland.jpg",
        };

            /*

        const agregaActor = (nuevoActor) =>
            axios
            .post("http://localhost:3000/actors", nuevoActor)
            .then((response) => {
            console.log(response.data);
            })
            .catch((error) => {
            console.log(error);
            });

            agregaActor(nuevoActor);

            */
/*
            const agregaActor = (nuevoActor) =>{
                fetch("http://localhost:3000/actors", {
                    method: "POST",
                    body: JSON.stringify(nuevoActor),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((data) => console.log(data))
                    .then((error) => console.log(error));
                };
            
            agregaActor(nuevoActor);*/

/*

            const peliculaActualizada = {
                id: "28",
                title: "Spider-Man",
                year: 2002,
                director: "Sam Raimi",
            actors: ["Jesusito","Tobey Maguire", "Willem Dafoe", "Kirsten Dunst"],
            description: "Peter Parker, a shy high school student, is often bullied by people. His life changes when he is bitten by a genetically altered spider and gains superpowers. He uses his powers to save the city from evil forces.",
            coverUrl: "https://example.com/spiderman2.jpg",
};

        /*

        const actualizaPelicula = (pelicula, id) => {
            axios
                .put(`http://localhost:3000/movies/${id}`, pelicula)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        */
/*
        const actualizaPelicula = async (pelicula, id) => {
            try {
            const response = await axios.put(
            `http://localhost:3000/movies/${id}`,
            pelicula
            );
            console.log(response.data);
            } catch (error) {
            console.log(error);
            }
           };

        actualizaPelicula(actualizaPelicula(), "28");
*/

        const actualizarCampos = {
            actors: [
            "Robert Downey Jr.",
            "Gwyneth Paltrow",
            "Jeff Bridges",
            "Leslie Bibb",
            ],
           };
           /*
           const actualizarCamposPelicula = (actualizarCampos, id) => {
            axios
            .patch(`http://localhost:3000/movies/` + id, actualizarCampos)
            .then((response) => {
            console.log(response.data);
            })
            .catch((error) => {
            console.log(error);
            });
           };*/

           const actualizarCamposPelicula = (actualizarCampos, id) => {
            fetch(`http://localhost:3000/movies/` + id, {
            method: "PATCH",
            body: JSON.stringify(actualizarCampos),
            headers: {
            "Content-Type": "application/json",
            },
            })
            .then((respuesta) => {
            return respuesta.json();
            })
            .then((data) => {
            console.log(data);
            })
            .catch((error) => {
            console.log(error);
            });
           };
           

           actualizarCamposPelicula(actualizarCampos, "*2");
