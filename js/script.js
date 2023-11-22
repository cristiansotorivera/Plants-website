//alerta de cart empty
function alerta (){
    alert("Your cart is empty");
    console.log("Your cart is empty");
}


//cambiamos la ruta/fuente de la foto
function cambia_imagen(elemento_img) {
    elemento_img.src ="./images/assets/succulents-2.jpg";
}

function regresa_imagen(elemento_img) {
    elemento_img.src = "./images/assets/succulents-1.jpg";
}

// Eliminar cookie alert
function eliminar_cookies() {
    var cookie = document.querySelector (".cookie");
    cookie.remove();

}