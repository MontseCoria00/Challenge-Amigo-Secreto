
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
