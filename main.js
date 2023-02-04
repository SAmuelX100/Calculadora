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

        }

    })
}