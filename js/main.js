// Declaracion de variables

const n_0 = 0,n_1 = 1,n_2 = 2,n_3 = 3,n_4 = 4,n_5 = 5,n_6 = 6 ,n_7 = 7,n_8 = 8,n_9 = 9;

const n_0_2 = "s", n_1_2 = "d", n_2_2 = "y", n_3_2 = "t", n_4_2 = "n", n_5_2 = "b", n_6_2 = "v", n_7_2 = "l", n_8_2 = "i", n_9_2 = "o";

let entrada = []
let salida = []

const colorSwitch = document.querySelector('#switch input[type="checkbox"]');

// Funciones 


function cambiaTema(ev) {
    if (ev.target.checked) {
        document.documentElement.setAttribute('tema', 'oscuro');
    } else {
        document.documentElement.setAttribute('tema', 'claro');
    }
}

colorSwitch.addEventListener('change', cambiaTema);