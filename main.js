const input = document.getElementById("input")

var idBuscar

const buscar = id =>{ 
    idBuscar = id
    input.setAttribute('id',`${idBuscar}`)
    document.getElementById("dropdown").innerHTML = `${idBuscar}`
}

const buscarProducto = () => {
    let link = ""
    if(idBuscar == "Producto")
    {
        var productoAbuscarpornombre = document.getElementById("Producto").value
        link = "https://dummyjson.com/products/search?q=" + productoAbuscarpornombre
        console.log(link)
    }
    else if(idBuscar == "ID"){
        var productoAbuscarporID = document.getElementById("ID").value
        link = "https://dummyjson.com/products/" + productoAbuscarporID
        console.log(link)
    }
    else if(idBuscar == "Categoria"){
        var productoAbuscarporcategoria = document.getElementById("Categoria").value
        link = "https://dummyjson.com/products/category/" + productoAbuscarporcategoria
        console.log(link)
    }
    fetch(link)
    .then(res => res.json())
    .then(res =>  { 
        if(res.products) {
            res.products.forEach(i => {
                valores = document.getElementById("productosencontrados").innerHTML += `
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${i.thumbnail}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${i.title}</h5>
                <p class="card-text"> ${i.description}</p>
                <h6 class="card-title">$${i.price}</h6>
                </div>
                </div>`
            })
        }
        else if(res.length = 1){
            valores = document.getElementById("productosencontrados").innerHTML += `
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${res.thumbnail}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${res.title}</h5>
            <p class="card-text"> ${res.description}</p>
            <h6 class="card-title">$${res.price}</h6>
            </div>
            </div>`
        }
        console.log(res)
        })
        
    .catch(err => console.error(err))
}