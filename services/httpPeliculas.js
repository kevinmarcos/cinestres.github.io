
const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch("https://cinestres-api-nodejs-production.up.railway.app/api/peliculas");

        if (respuesta.status === 200) {

            let peliculas = "";
            const datos = await respuesta.json();
            datos.forEach(pelicula => {
                const date = new Date(pelicula.diaEstreno)
                const dateContent = [
                    date.getDay() + "/" +
                    date.getMonth() + "/" +
                    date.getFullYear()
                ]

                peliculas += modeloPelicula(pelicula , dateContent)
            });

            //document.getElementById('container_movies').innerHTML = peliculas;
            document.querySelector('.container_moviesCartelera').innerHTML = peliculas;
            document.querySelector('.container_moviesProxEstrenos').innerHTML = peliculas;
        } else if (respuesta.status === 404) {
            console.log("Algo ocurrio mal");
        } else {
            console.log("Algo ocurrio mal");
        }

    } catch (error) {
        console.log(error);
    }
}

cargarPeliculas();

const modeloPelicula = (pelicula, diaEstreno) => {
    return `
    <div class="pelicula" >
        <img class="image" src="${pelicula.img}">
        <div class="container_title">
            <h4 class="tituloPeli">${pelicula.nombre}</h4>
            <span class="diaEstreno">Dia Estreno : ${diaEstreno}</span>
            <img src="view/images/boton-de-play.png" alt="iconPlay" class="imgIconPlay">
        </div>
    </div>`
}

