// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Permitir que se agregen varios usuarios ingresar nombres de amigos en una lista 
let amigos = [];
let numeroMaximo = 10;

function agregarAmigo() {
    let nombreDeUsuario = document.getElementById('amigo').value.trim();

    // Validar si está vacío
    if (nombreDeUsuario === '') {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar límite máximo
    if (amigos.length >= numeroMaximo) {
        alert("Has alcanzado el número máximo de amigos.");
        return;
    }

    // Agregar al array
    amigos.push(nombreDeUsuario);

    // Limpiar el campo
    document.getElementById('amigo').value = '';

    console.log("Lista de amigos:", amigos);
}


