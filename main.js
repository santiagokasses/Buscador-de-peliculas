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
        res.products.forEach(i => {
            valores = document.getElementById("productosencontrados").innerHTML += `
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${i.images[0]}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${i.title}</h5>
            <p class="card-text"${i.description}</p>
            <h6 class="card-title">${i.price}</h6>
            </div>
            </div>`
        })
        
      console.log(res)
        })
        
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