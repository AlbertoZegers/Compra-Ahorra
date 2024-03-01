document.addEventListener("DOMContentLoaded", function(){
    var url = window.location.href;
    var indiceProedit = url.indexOf('proedit');
    var valor = url.substring(indiceProedit + 'proedit/'.length);
    valor = decodeURIComponent(valor);
    id = parseInt(valor, 10);
    fetch(`http://localhost:3000/products/proget/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(producto => producto.json()).then(producto => {
        console.log(producto);
        document.getElementById("productName").value = producto.nombre;
        document.getElementById("stock").value = producto.stock;
        document.getElementById("price").value = producto.precio;
        console.log(producto.fechaLlegada);
        let fecha = producto.fechaLlegada.substring(0, 10);
        document.getElementById("arrivalDate").value = fecha; 
        document.getElementById("description").value = producto.descripcion;
    })
});
function editProduct() {
    // Obtener los valores del formulario
    var productName = document.getElementById("productName").value;
    var stock = document.getElementById("stock").value;
    var price = document.getElementById("price").value;
    var arrivalDate = document.getElementById("arrivalDate").value;
    var description = document.getElementById("description").value;
  
    // Validar los campos (puedes agregar más validaciones según tus necesidades)
    if (productName === "" || stock === "" || price === "" || arrivalDate === "" || description === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }
  
    let data = {
      nombre: productName,
      stock: stock ,
      precio: price,
      fechaLlegada: arrivalDate,
      descripcion: description
    };
  
    fetch(`http://localhost:3000/products/proupd/${id}`, {
      method: 'PUT', // Puedes usar 'GET', 'POST', 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json', // Tipo de contenido de la solicitud
        // Otros encabezados según sea necesario
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        alert(data.response);
      })
      .catch(error => console.error('Error en la solicitud:', error));
  }