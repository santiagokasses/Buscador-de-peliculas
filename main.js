console.log("Hago consulta - fetch")
fetch("https://www.omdbapi.com/?i=tt3896198&apikey=8f8de035")
    .then(res => res.json())
    .then(res => {
        console.log("obtuve respuesta")
        valores = document.getElementById("peliculasEncontradas");
        res.forEach(actual => {
            if (actual.Title && actual.Released) {
            pelicula = document.createElement("li")
            pelicula.innerHTML = `Titulo: ${actual.Title} - fecha: ${actual.Released} - firector: ${actual.Director}`
            valores.appendChild(pelicula)
            }
        })

    })
    .catch(err => console.error("error", err))
console.log("Fin consulta - fetch")

/*console.log("Hago consulta - axios");
(async () => {
    console.log("Hago async consulta - axios")
    await axios({
        method: 'get',
        url: 'https://www.omdbapi.com/?i=tt3896198&apikey=8f8de035',
    })
        .then(res => {
            console.log("res", res)
            valores = document.getElementById("peliculasEncontradas");
            res.data.forEach(actual => {

                pelicula = document.createElement("li")
                pelicula.innerHTML = `Nombre: ${actual.nombre} - compra: ${actual.compra} - venta: ${actual.venta}`
                valores.appendChild(pelicula)

                console.log(res)
            })
        })
        .catch(err => console.error("error", err))
    console.log("Fin async consulta - axios")
})();
console.log("Fin consulta - axios")*/