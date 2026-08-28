const diferenciais = document.querySelectorAll(".item-diferencial");
let diferencialAtual = 0;

function mostrarDiferencial() {
    diferenciais.forEach(function(diferencial) {
        diferencial.classList.remove("ativo");
    });

    diferenciais[diferencialAtual].classList.add("ativo");
}

function avancarDiferencial() {
    diferencialAtual++;

    if (diferencialAtual >= diferenciais.length) {
        diferencialAtual = 0;
    }

    mostrarDiferencial();
}

function voltarDiferencial() {
    diferencialAtual--;

    if (diferencialAtual < 0) {
        diferencialAtual = diferenciais.length - 1;
    }

    mostrarDiferencial();
}