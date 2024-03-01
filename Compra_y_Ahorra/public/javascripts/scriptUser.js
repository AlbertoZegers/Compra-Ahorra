function saveUser(){
    var productName = document.getElementById("productName").value;
    var stock = document.getElementById("stock").value;
    var arrivalDate = document.getElementById("arrivalDate").value;
    var rol = document.getElementById("rol").value;
    
    if (productName === "" || stock === "" || arrivalDate === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }
    let data = {
        usuario: productName,
        contraseña: stock ,
        email: arrivalDate,
        rol: rol,
    };
    fetch('http://localhost:3000/users/usersend', {
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