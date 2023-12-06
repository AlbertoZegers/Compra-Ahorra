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
            precio.textContent = `$${producto.precio.toFixed(2)}`;
    
            const ver = document.createElement("button");
            ver.textContent = "Ver detalle";
    
            // Agrega elementos al contenedor del producto
            productDiv.appendChild(nombre);
            productDiv.appendChild(stock);
            productDiv.appendChild(precio);
            productDiv.appendChild(ver);
    
            // Agrega el producto al contenedor principal
            catalogo.appendChild(productDiv);
        });
    })   
});
