let guardar = [];
let tamanoArray = 0
let suma = 0
// Se selecciona al amigo secreto
// Se guarda al amigo secreto
function agregarAmigo() {
    let amigoSecreto = document.getElementById("amigo").value;
    if (amigoSecreto.trim() !== ""){
    guardar.push(amigoSecreto);
    tamanoArray = guardar.length;
    // Lo veo en la pantalla.
    agregarPantalla("listaAmigos","li", guardar, "");
    limpiarCaja();
    return guardar;
    } else {
        alert("Ingrese un nombre")
    }
}
// Calculo el tamaño del array
function tamañoArray() {
    tamanoArray = guardar.length;
    return tamanoArray;
}
// Se sortea el amigo secreto
function sortearAmigo() {
    if (tamanoArray > 0) {
    let numeroAleatorio = Math.floor(Math.random()*tamanoArray);
    let amigoSorteado = guardar[numeroAleatorio];
    // Actualizo lista de amigos.
    let actualizarAmigos = guardar.splice(numeroAleatorio, 1);
    // Actualizo tamaño del array.
    tamanoArray = guardar.length
    // Lo veo en la pantalla.
    agregarPantalla("resultado","li",amigoSorteado, `El amigo secreto sorteado es: ${amigoSorteado}.`);
    // Lo veo en la consola.
    } else {
        alert("No hay amigos para sortear.")
    }
    return;
}

// Automatizo las páginas que voy a agregar en la pantalla.
function agregarPantalla(id, elemento, array, mensaje) {
    let listaAmigos = document.getElementById(id)
    let crearLi = document.createElement(elemento)
    crearLi.textContent = array[suma++]
    listaAmigos.appendChild(crearLi);
    if (mensaje.trim() !== "") {
    document.getElementById(id).textContent = mensaje;
    return;
    } else {
        return;
    }
}

// Limpio la caja de entrada de usuario.
function limpiarCaja() {
    document.getElementById("amigo").value = ''
    return;
}
