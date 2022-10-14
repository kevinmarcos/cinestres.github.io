const api = 'https://cinestres-api-nodejs-production.up.railway.app/api/cines';

const cargarCines = async () => {
    try {
        const respuesta = await fetch(api)
        if (respuesta.status === 200) {
            let cines = ''
            let opcionesDistritos = `<option value="Seleccionar">Seleccionar</option>`
            const datos = await respuesta.json();
            datos.forEach(cine => {
                opcionesDistritos += `
                <option value="${cine.distrito}">${cine.distrito}</option>`
                cines += getCines(cine)
            });
            document.querySelector('#distrito').innerHTML = opcionesDistritos;
            document.querySelector('.cine').innerHTML = cines;
        }
    } catch (error) {
        console.log(error);
    }
}


cargarCines()

const getCines = (cine) => {
    return `
    <div class="containerCine">
        <img src="https://imgmedia.elpopular.pe/640x345/elpopular/original/2022/09/02/63126e7a2e92a020e031c669.webp" alt="cineDistrito" class="imgCine">
        <h4>Ubicación: ${cine.ubicacion}</h4>
        <h4>Distrito: ${cine.distrito}</h4>
    </div>`
}

const getCineBySelection = () => {
    const select = document.getElementById('distrito')
    const valor = select.value

    const cine = document.getElementsByClassName('containerCine')
    const img = ''
    console.log(cine);
    console.log(valor);
    if (valor !== 'Seleccionar') {
        
    }
    console.log(cine);
}
