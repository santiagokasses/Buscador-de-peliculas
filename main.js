

const buscarProducto = () => {
    const productoAbuscarpornombre = document.getElementById("porproducto").value;
    const productoAbuscarporprecio = document.getElementById("porprecio").value;
    const productoAbuscarporcategoria = document.getElementById("porcategoria").value;
    let link = ""
    if(!productoAbuscarporprecio && !productoAbuscarporcategoria)
    {
        link = "https://dummyjson.com/products/search?q=" + productoAbuscarpornombre
    }
    else if(!productoAbuscarporprecio && productoAbuscarporcategoria && !productoAbuscarpornombre){
        link = "https://dummyjson.com/products/categories/" + productoAbuscarporcategoria
    }
    else if(productoAbuscarporprecio && !productoAbuscarporcategoria){
        link = "https://dummyjson.com/products/price/" + productoAbuscarporprecio
    }
    fetch(link)
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