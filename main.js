/*const productoAbuscarpornombre = document.getElementById(porproducto);
const productoAbuscarporprecio = document.getElementById(porprecio);
const productoAbuscarporcategoria = document.getElementById(porcategoria);

console.log("Hago consulta - fetch")
fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(res => {
        console.log("obtuve respuesta")
        valores = document.getElementById("productosencontrados");
        res.data.forEach(actual => {
            if (actual.title == productoAbuscarpornombre) {
                if (productoAbuscarporprecio || productoAbuscarporcategoria) {
                    if (actual.price == productoAbuscarporprecio) {
                        producto = document.createElement("li")
                        producto.innerHTML = `Producto: ${actual.title} - Descripción: ${actual.description} - Precio: ${actual.price}`
                        valores.appendChild(producto)
                    }

                }
                else {
                    producto = document.createElement("li")
                    producto.innerHTML = `Producto: ${actual.title} - Descripción: ${actual.description} - Precio: ${actual.price}`
                    valores.appendChild(producto)
                }
            }
        });
    })
console.log("Fin consulta - fetch")*/

const buscarProducto = () => {
    const productoAbuscarpornombre = document.getElementById("porproducto").value;
    fetch(`https://dummyjson.com/products/search?q=${productoAbuscarpornombre}`)
    .then(res => res.json())
    .then(res =>  {
        valores = document.getElementById("productosencontrados");
        producto = document.createElement("li")
        producto.innerHTML = `Producto: ${res.title} - Descripción: ${res.description} - Precio: ${res.price}`
        valores.appendChild(producto)}
        )
    .catch(err => console.error(err))
}
/*const buscarProducto = () => {
    const productoAbuscarpornombre = document.getElementById("porproducto").value;
    fetch(`https://dummyjson.com/products/search?q=${productoAbuscarpornombre}`)
    .then(res => res.json())
    .then(res =>  {
        res.data.forEach(actual => {producto = document.createElement("li")
        producto.innerHTML = `Producto: ${actual.title} - Descripción: ${actual.description} - Precio: ${actual.price}`
        valores.appendChild(producto)})}
        )
    .catch(err => console.error(err))
}*/