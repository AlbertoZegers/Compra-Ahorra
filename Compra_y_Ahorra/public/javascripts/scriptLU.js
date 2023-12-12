function loginUser(){
    var productName = document.getElementById("productName").value;
    var stock = document.getElementById("stock").value;
    if (productName === "" || stock === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }
    let data = {
        usuario: productName,
        contraseña: stock ,
    };
    fetch('http://localhost:3000/users/userget', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(user => user.json()).then(user => {
        console.log();
        window.location.href = '/';
    }).catch(error => console.error('Error en la solicitud:', error));
}