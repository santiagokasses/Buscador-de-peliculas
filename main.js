const input = document.getElementById("input")


var idBuscar

const buscar = id =>{ 
    idBuscar = id
    input.setAttribute('id',`${idBuscar}`)
    document.getElementById("dropdown").innerHTML = `${idBuscar}`
}

const verInformacion = (titulo, imagen, descripcion, precio) =>{
    console.log(imagen)
    document.getElementById("titulo").innerHTML = `${titulo}`
    document.getElementById("imagen").src = `${imagen}`
    document.getElementById("descripcion").innerHTML = `${descripcion}`
    document.getElementById("precio").innerHTML= `$${precio}`
}

const LimparLista = () =>{
    document.getElementById("productosencontrados").innerHTML = ``
}

const buscarProducto = () => {
    let link = ""
    if(idBuscar == undefined)
    {
        alert("Seleccione una categoria de busqueda")
    }
    else if(idBuscar == "Producto" && document.getElementById("Producto").value != "")
    {
        var productoAbuscarpornombre = document.getElementById("Producto").value
        link = "https://dummyjson.com/products/search?q=" + productoAbuscarpornombre
    }
    else if(idBuscar == "ID" && document.getElementById("ID").value != ""){
        var productoAbuscarporID = document.getElementById("ID").value
        link = "https://dummyjson.com/products/" + productoAbuscarporID
    }
    else if(idBuscar == "Categoria" && document.getElementById("Categoria").value != ""){
        var productoAbuscarporcategoria = document.getElementById("Categoria").value
        link = "https://dummyjson.com/products/category/" + productoAbuscarporcategoria
    }
    else
    {
        alert("error de ingreso")
    }
    fetch(link)
    .then(res => res.json())
    .then(res =>  { 
        if(res.products) {
            res.products.forEach(i => {
                valores = document.getElementById("productosencontrados").innerHTML += `
                <div class="card diseñocards" style="width: 18rem;">
                    <img class="card-img-top " src="${i.thumbnail}" alt="Card image cap">
                    <div class="card-body contenido">
                        <h5 class="card-title">${i.title}</h5>
                        <p class="card-text"> ${i.description}</p>
                        <h6 class="card-title">$${i.price}</h6>
                        <button type="button" class="btn colorbotton text" data-bs-toggle="modal" data-bs-target="#ModalInfo" onclick="verInformacion('${i.title}','${i.thumbnail}','${i.description}','${i.price}')">ver producto</button>
                    </div>
                </div>`
            })
        }
        else if(res.length = 1){
            valores = document.getElementById("productosencontrados").innerHTML += `
            <div class="card diseñocards" style="width: 18rem;">
                <img class="card-img-top" src="${res.thumbnail}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${res.title}</h5>
                    <p class="card-text"> ${res.description}</p>
                    <h6 class="card-title">$${res.price}</h6>
                    <button type="button" class="btn colorbotton text" data-bs-toggle="modal" data-bs-target="#ModalInfo" onclick="verInformacion('${res.title}','${res.thumbnail}','${res.description}','${res.price}')">ver producto</button>
                </div>
            </div>`
        }
        })
        
    .catch(err => console.error(err))
}