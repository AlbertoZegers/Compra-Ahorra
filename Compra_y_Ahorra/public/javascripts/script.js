document.addEventListener("DOMContentLoaded", function () {
    const catalogo = document.querySelector(".catalogo");

    // Supongamos que se tiene un array de productos desde el servidor
    // const productos = [
    //     { nombre: "Producto 1", stock: "3", precio: 19.99 },
    //     { nombre: "Producto 2", stock: "5", precio: 29.99 },
    //     // Agrega más productos según sea necesario
    // ];
    fetch('http://localhost:3000/products/proget')
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
    
            // Agrega más detalles del producto según sea necesario
    
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
