function saveProduct() {
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

  fetch('http://localhost:3000/products/prosend', {
    method: 'POST', // Puedes usar 'GET', 'POST', 'PUT', 'DELETE', etc.
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
