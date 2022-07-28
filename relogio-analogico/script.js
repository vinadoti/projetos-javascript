const PONTEIROHORA = document.querySelector("#hour"); // Ponteiro da hora
const PONTEIROMINUTO = document.querySelector("#minute"); // Ponteiro do minuto
const PONTEIROSEGUNDO = document.querySelector("#second"); // Ponteiro do relógio referente aos segundos


// Função que atualiza o relógio
function atualizaRelogio() {

    var data = new Date(); // Data atual
    let hora = data.getHours(); // Hora atual
    let minuto = data.getMinutes(); // Minuto atual
    let segundo = data.getSeconds(); // Segundo atual

    console.log("hora: " + hora + " minuto: " + minuto + " segundos: " + segundo); // Imprime a hora, minuto e segundo atual

    // Posição do ponteiro da hora
    let posicaoHora = (hora * 360 / 12) + (minuto * (360 / 60) / 12);

    // Posição do ponteiro do minuto
    let posicaoMinuto = (minuto * 360 / 60) + (segundo * (360 / 60) / 60);

    // Posição do ponteiro do segundo
    let posicaoSegundo = segundo * 360 / 60; // 60 passos para completar um circulo (360º do circulo dividido por 60)

    PONTEIROHORA.style.transform = "rotate(" + posicaoHora + "deg)"; // Rotaciona o ponteiro da hora
    PONTEIROMINUTO.style.transform = "rotate(" + posicaoMinuto + "deg)"; // Rotaciona o ponteiro do minuto
    PONTEIROSEGUNDO.style.transform = "rotate(" + posicaoSegundo + "deg)"; // Rotaciona o ponteiro do segundo

    setTimeout(atualizaRelogio, 1000); // Chama a função novamente em 1 segundo
}

// Chama a função
atualizaRelogio();