document.addEventListener("DOMContentLoaded", function () {
    const catalogo = document.querySelector(".catalogo");

    fetch('http://localhost:3000/products/progets')
    .then(productos => productos.json()).then(productos => {
        var lista = [];
        console.log(productos);
        lista = productos;
        lista.forEach(producto => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
    
            const nombre = document.createElement("h3");
            nombre.textContent = producto.nombre;
    
            const stock = document.createElement("p")
            stock.textContent = `Disponibles: ${producto.stock}`;
    
            const precio = document.createElement("p");
            precio.textContent = `$${producto.precio}`;

            const editar = document.createElement("button");
            editar.textContent = "Editar";
            editar.addEventListener('click', function(){
                editProducto(producto.id);
            });

            const borrar = document.createElement("button");
            borrar.textContent = "Borrar";
            borrar.addEventListener('click', function(){
                delProducto(producto.id);
                // location.reload();
            });
    
            productDiv.appendChild(nombre);
            productDiv.appendChild(stock);
            productDiv.appendChild(precio);
            productDiv.appendChild(editar);
            productDiv.appendChild(borrar);
            
            catalogo.appendChild(productDiv);
        });
    })
});

function editProducto(id){
    window.location.href = '/products/proedit/'+ encodeURIComponent(id);
}
function delProducto(id){
    fetch(`http://localhost:3000/products/prodel/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
      .then(response => response.json())
      .then(data => {alert(data.response);})
      .catch(error => console.error('Error en la solicitud:', error));
}