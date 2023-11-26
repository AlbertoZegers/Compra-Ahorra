document.addEventListener("DOMContentLoaded", function () {
    const catalogo = document.querySelector(".catalogo");

    // Supongamos que se tiene un array de productos desde el servidor
    const productos = [
        { nombre: "Producto 1", stock: "3", precio: 19.99 },
        { nombre: "Producto 2", stock: "5", precio: 29.99 },
        // Agrega más productos según sea necesario
    ];

    // Itera sobre los productos y crea un div para cada uno
    productos.forEach(producto => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const nombre = document.createElement("h3");
        nombre.textContent = producto.nombre;

        const stock = document.createElement("p")
        stock.textContent = `Disponibles: ${producto.stock}`;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio.toFixed(2)}`;

        const editar = document.createElement("button");
        ver.textContent = "Editar";

        const borrar = document.createElement("button");
        ver.textContent = "Borrar";

        // Agrega más detalles del producto según sea necesario

        // Agrega elementos al contenedor del producto
        productDiv.appendChild(nombre);
        productDiv.appendChild(stock);
        productDiv.appendChild(precio);
        productDiv.appendChild(editar);
        productDiv.appendChild(borrar);

        // Agrega el producto al contenedor principal
        catalogo.appendChild(productDiv);
    });
});