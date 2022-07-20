// ------------------------------------------------------------
// Primeiro contador: 
// ------------------------------------------------------------

// pega elemento com id #currentNumber e atribui a variável currentNumberWrapper
var currentNumberWrapper = document.getElementById('currentNumber');
// Cria a variavel do contador e inicia em 0
var currentNumber = 0;

// Função para incrementar o número do contador (+)
function increment() {
    currentNumber = currentNumber + 1; // atualiza o número do contador com o número atual + 1
    currentNumberWrapper.innerHTML = currentNumber; // Atualiza na tela com o número atual do contador
}

// Função para decrementar o número do contador (-)
function decrement() {
    currentNumber = currentNumber - 1; // atualiza o número do contador com o número atual - 1
    currentNumberWrapper.innerHTML = currentNumber; // Atualiza na tela com o número atual do contador
}


// ------------------------------------------------------------
// Segundo contador: 
// ------------------------------------------------------------

// utilizando o addEventListener  

// pega elemento com id #currentNumber2 e atribui a variável currentNumberWrapper2
var currentNumberWrapper2 = document.getElementById("currentNumber2")

// const para criar uma constante do contador, permitindo alterar o valor do contador, pegando o elemento com id #adicionar 
const INCREMENT = document.getElementById("adicionar")
// const para criar uma constante do contador, permitindo alterar o valor do contador, pegando o elemento com id #subtrair
const DECREMENT = document.getElementById("subtrair")

// Cria a variavel do contador e inicia em 0
var count = 0

// Função para incrementar o número do contador (+)
INCREMENT.addEventListener("click", function increment() { // utiliza o addEventListener para adicionar o evento de click ao elemento com id #adicionar
    count++; // atualiza o número do contador com o número atual + 1
    if (count <= 10) { // se o número do contador for menor ou igual a 10, atualiza na tela com o número atual do contador
        currentNumberWrapper2.innerHTML = count;
    }

    if (count >= 0) { // se o número do contador for maior ou igual a 0, atualiza na tela com o número atual do contador
        currentNumberWrapper2.classList.remove("negative") // remove a classe negative no span com id #currentNumber2
    }
}
)

// Função para decrementar o número do contador (-)
DECREMENT.addEventListener("click", function decrement() { // utiliza o addEventListener para adicionar o evento de click ao elemento com id #subtrair
    count--; // atualiza o número do contador com o número atual - 1
    if (count >= -10) { // se o número do contador for maior ou igual a -10, atualiza na tela com o número atual do contador
        currentNumberWrapper2.innerHTML = count; // atualiza na tela com o número atual do contador
    }

    if (count < 0) { // se o número do contador for menor que 0
        currentNumberWrapper2.classList.add("negative") // adiciona a classe negative no span com id #currentNumber2
    }
}
) 

