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
            pantalla_entrada.innerHTML = LimpiarEntrada(entrada);
        } else if (value == "=") {
            let resultado = eval(PrepararEntrada(entrada));

            pantalla_salida.innerHTML = LimpiarSalida(resultado);
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

            pantalla_entrada.innerHTML = LimpiarEntrada(entrada);

        } else {
            if (ValidarEntrada(value)) {
                entrada += value;
                pantalla_entrada.innerHTML = LimpiarEntrada(entrada);
            }
        }

    })
}


// Declaracion de funciones

function LimpiarEntrada(entrada) {

    let entrada_array = entrada.split("");
    let entrada_array_lenght = entrada_array.length;

    for (let i = 0; i < entrada_array_lenght; i++) {
        if (entrada_array[i] == "*") {
            entrada_array[i] = '<span class= "operador"> x </span>';
        } else if (entrada_array[i] == "/") {
            entrada_array[i] = '<span class= "operador"> ÷ </span>';
        } else if (entrada_array[i] == "+") {
            entrada_array[i] = '<span class= "operador"> + </span>';
        } else if (entrada_array[i] == "-") {
            entrada_array[i] = '<span class= "operador"> - </span>';
        } else if (entrada_array[i] == "+") {
            entrada_array[i] = '<span class= "operator"> + </span>';
        } else if (entrada_array[i] == "(") {
            entrada_array[i] = ' <span class= "parentesis">(</span>';
        } else if (entrada_array[i] == ")") {
            entrada_array[i] = ' <span class= "parentesis">)</span>';
        } else if (entrada_array[i] == "%") {
            entrada_array[i] = ' <span class= "percent"> % </span>';
        }
    }

    return entrada_array.join("");
}

function LimpiarSalida(salida) {
    let salida_string = salida.toString();
    let decimal = salida_string.split(".")[1];
    salida_string = salida_string.split(".")[0];

    let salida_array = salida_string.split("");

    if (salida_array.length > 3) {
        for (let i = salida_array.length - 3; i > 0; i -= 3) {
            salida_array.splice(i, 0, ",");
        }
    }

    if (decimal) {
        salida_array.push(".");
        salida_array.push(decimal);
    }

    return salida_array.join("");
}

function ValidarEntrada(value) {

    let ultima_entrada = entrada.slice(-1);
    let operadores = ["+", "-", "*", "/"];

    if (value == "." && ultima_entrada == ".") {
        return false;
    }

    if (operadores.includes(value)) {
        if (operadores.includes(ultima_entrada)) {
            return false;
        } else {
            return true;
        }
    }

    return true;
}

function PrepararEntrada(entrada) {
    let entrada_array = entrada.split("");

    for (let i = 0; i < entrada_array.length; i++) {
        if (entrada_array[i] == "%") {
            entrada_array[i] = "/100";
        }
    }

    return entrada_array.join("");
}

