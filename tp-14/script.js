let puntosLocal = 0;
let puntosVisitante = 0;
let partidoFinalizado = false;

function actualizarPuntos() {
    document.getElementById('puntos-local').textContent = puntosLocal;
    document.getElementById('puntos-visitante').textContent = puntosVisitante;
}

function incrementarPuntosLocal() {
    if (!partidoFinalizado) {
        puntosLocal++;
        actualizarPuntos();
    }
}

function decrementarPuntosLocal() {
    if (!partidoFinalizado && puntosLocal > 0) {
        puntosLocal--;
        actualizarPuntos();
    }
}

function incrementarPuntosVisitante() {
    if (!partidoFinalizado) {
        puntosVisitante++;
        actualizarPuntos();
    }
}

function decrementarPuntosVisitante() {
    if (!partidoFinalizado && puntosVisitante > 0) {
        puntosVisitante--;
        actualizarPuntos();
    }
}

function invertirPuntos() {
    if (!partidoFinalizado) {
        const temp = puntosLocal;
        puntosLocal = puntosVisitante;
        puntosVisitante = temp;
        actualizarPuntos();
    }
}

function finalizarPartido() {
    partidoFinalizado = true;
    deshabilitarBotones(true);
}

function reiniciarTablero() {
    puntosLocal = 0;
    puntosVisitante = 0;
    partidoFinalizado = false;
    actualizarPuntos();
    deshabilitarBotones(false);
}

function deshabilitarBotones(deshabilitar) {
    document.getElementById('local-sumar').disabled = deshabilitar;
    document.getElementById('local-restar').disabled = deshabilitar;
    document.getElementById('visitante-sumar').disabled = deshabilitar;
    document.getElementById('visitante-restar').disabled = deshabilitar;
}

document.getElementById('local-sumar').addEventListener('click', incrementarPuntosLocal);
document.getElementById('local-restar').addEventListener('click', decrementarPuntosLocal);
document.getElementById('visitante-sumar').addEventListener('click', incrementarPuntosVisitante);
document.getElementById('visitante-restar').addEventListener('click', decrementarPuntosVisitante);
document.getElementById('invertir').addEventListener('click', invertirPuntos);
document.getElementById('finalizar').addEventListener('click', finalizarPartido);
document.getElementById('reiniciar').addEventListener('click', reiniciarTablero);

actualizarPuntos();
