const cuadrados = document.querySelectorAll('.cuadrado');
let cuadradoRojoIndex = Math.floor(Math.random() * cuadrados.length);
// ... (código anterior)

let contadorCorrectos = 0;
let score = 0;

cuadrados.forEach((cuadrado, index) => {
    cuadrado.addEventListener('click', () => {
        if (index === cuadradoRojoIndex) {
            cuadrados[cuadradoRojoIndex].classList.remove('rojo');
            let nuevoIndex;
            do {
                nuevoIndex = Math.floor(Math.random() * cuadrados.length);
            } while (nuevoIndex === cuadradoRojoIndex);
            cuadrados[nuevoIndex].classList.add('rojo');
            cuadradoRojoIndex = nuevoIndex;

            contadorCorrectos++;
            score += 10;
            actualizarContadorYScore();
        }
    });
});

const contadorElement = document.getElementById('contador');
const scoreElement = document.getElementById('score');
const reiniciarBtn = document.getElementById('reiniciarBtn');

function actualizarContadorYScore() {
    contadorElement.textContent = contadorCorrectos;
    scoreElement.textContent = score;
}

reiniciarBtn.addEventListener('click', () => {
    contadorCorrectos = 0;
    score = 0;
    actualizarContadorYScore();
});

// ...

cuadrados.forEach((cuadrado, index) => {
    cuadrado.addEventListener('click', () => {
        if (index === cuadradoRojoIndex) {
            cuadrados[cuadradoRojoIndex].classList.remove('rojo');
            let nuevoIndex;
            do {
                nuevoIndex = Math.floor(Math.random() * cuadrados.length);
            } while (nuevoIndex === cuadradoRojoIndex);
            cuadrados[nuevoIndex].classList.add('rojo');
            cuadradoRojoIndex = nuevoIndex;
        }
    });
});

document.addEventListener('keydown', event => {
    const numero = parseInt(event.key);
    if (!isNaN(numero) && numero >= 1 && numero <= 9) {
        if (numero - 1 === cuadradoRojoIndex) {
            cuadrados[cuadradoRojoIndex].classList.remove('rojo');
            let nuevoIndex;
            do {
                nuevoIndex = Math.floor(Math.random() * cuadrados.length);
            } while (nuevoIndex === cuadradoRojoIndex);
            cuadrados[nuevoIndex].classList.add('rojo');
            cuadradoRojoIndex = nuevoIndex;
        }
    }

    
});

