function inserir(num) {
    let resultado = document.getElementById('resultado').innerHTML;

    if (num === ',') {
        if (resultado.includes(',')) {
            return;
        }
    }

    document.getElementById('resultado').innerHTML = resultado + num;
}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

function limparCaracter() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

let valoresAnteriores = "";
let operacao = "";

function operacoes(op) {
    let armazenar = document.getElementById('resultado').innerHTML;

    if (armazenar === "") {
        return;
    }

    valoresAnteriores = armazenar;
    operacao = op;

    document.getElementById('resultado').innerHTML = "";
}

function raizQuadrada() {
    let valor = document.getElementById('resultado').innerHTML;

    if (valor === "") {
        return;
    }

    let numero = parseFloat(valor.replace(',', '.'));

    if (numero < 0) {
        document.getElementById('resultado').innerHTML = "Erro";
        return;
    }

    let resultado = Math.sqrt(numero);

    let texto = String(resultado).replace('.', ',');

    document.getElementById('resultado').innerHTML = texto;
}

function aoQuadrado() {
    let valor = document.getElementById('resultado').innerHTML;

    if (valor === "") {
        return;
    }

    let numero = parseFloat(valor.replace(',', '.'));

    let resultado = numero * numero;

    document.getElementById('resultado').innerHTML =
        String(resultado).replace('.', ',');
}

function umSob() {
    let valor = document.getElementById('resultado').innerHTML;

    if (valor === "") {
        return;
    }

    let numero = parseFloat(valor.replace(',', '.'));

    let resultado = 1 / numero;

    document.getElementById('resultado').innerHTML =
        String(resultado).replace('.', ',');
}

function calcular() {
    let valorAtual = document.getElementById('resultado').innerHTML;

    if (valoresAnteriores === "" || operacao === "" || valorAtual === "") {
        return;
    }

    let resultado = eval(valoresAnteriores + operacao + valorAtual);

    document.getElementById("resultado").innerHTML = resultado;

    valoresAnteriores = "";
    operacao = "";

}