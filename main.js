const botones = document.querySelectorAll('.key');
const pantalla_entrada = document.querySelector('.pantalla .entrada');
const pantalla_salida = document.querySelector('.pantalla .salida');

let entrada = "";

for (let key of botones) {
    const value = key.dataset.key;

    key.addEventListener('click', () => {
        if (value == "borrar") {
            entrada = "";
            pantalla_entrada.innerHTML = "";
            pantalla_salida.innerHTML = "";
        } else if (value == "backspace") {
            entrada = entrada.slice(0, -1);
            pantalla_entrada.innerHTML = entrada;
        } else if (value == "=") {
            let resultado = eval(entrada);

            pantalla_salida.innerHTML = resultado;
        } else if (value == "parentesis") {
            if (entrada.indexOf("(") == -1 || entrada.indexOf("(") != -1 && entrada.indexOf(")") != -1 && entrada.lastIndexOf("(") < entrada.lastIndexOf(")")) {
                entrada += "(";
            } else if (
                entrada.indexOf("(") != -1 &&
                entrada.indexOf(")") == -1 ||
                entrada.indexOf("(") != -1 &&
                entrada.indexOf(")") != -1 &&
                entrada.lastIndexOf("(") > entrada.lastIndexOf(")")) {
                entrada += ")";
            }

            pantalla_entrada.innerHTML = entrada;

        } else {
            entrada += value;
            pantalla_entrada.innerHTML = entrada;
        }

    })
}

function LimpiarEntrada(entrada) {

    let entrada_array = entrada.split("");
}