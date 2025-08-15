<<<<<<< HEAD
let amigos = [];
let numeroMaximo = 10;

function agregarAmigo() {
    let nombreDeUsuario = document.getElementById('amigo').value.trim();

    if (nombreDeUsuario === '') {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.length >= numeroMaximo) {
        alert("Has alcanzado el número máximo de amigos.");
        return;
    }

    amigos.push(nombreDeUsuario);
    document.getElementById('amigo').value = '';

    mostrarAmigos(amigos);
}

function mostrarAmigos(lista) {
    let ul = document.getElementById('listaAmigos'); // corregido id
    ul.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        ul.innerHTML += `<li>${lista[i]}</li>`;
    }
}

function sortearAmigo() { // corregido nombre
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = 
        `<li>🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}
=======
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


>>>>>>> c9944c976f7530e493209c619b95e3077604c650
