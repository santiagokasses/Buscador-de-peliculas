var link = "https://www.omdbapi.com/?apikey=8f8de035&";

var buscarporesto;

function buscarpor (){
    var nombrePelicula = document.getElementById("porTitulo")
    var añoPelicula = document.getElementById("porAño")
    var directorPelicula = document.getElementById("porDirector")
    buscarporesto = "s=" + nombrePelicula
}

link += buscarporesto;

console.log("Hago consulta - fetch")
fetch(link)
    .then(res => res.json())
    .then(res => {
        console.log("obtuve respuesta")
        valores = document.getElementById("peliculasEncontradas");
        array.forEach(actual => {
            pelicula = document.createElement("li")
            pelicula.innerHTML = `Titulo: ${actual.Title} - fecha: ${actual.Released} - director: ${actual.Director}`
            valores.appendChild(pelicula) 
        });
    })
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