const productoAbuscar = document.getElementById(nombredelproducto);

console.log("Hago consulta - fetch")
fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(res => {
        console.log("obtuve respuesta")
        valores = document.getElementById("peliculasEncontradas");
        res.data.forEach(actual => {
            if (actual.title == productoAbuscar) {
                pelicula = document.createElement("li")
                pelicula.innerHTML = `Producto: ${actual.title} - Descripción: ${actual.description} - Precio: ${actual.price}`
                valores.appendChild(pelicula)
            }
        });
    })
console.log("Fin consulta - fetch")