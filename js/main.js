let form = document.querySelector('form');
let container = document.getElementById('container-pendientes');
let containerC = document.getElementById('container-completas');
let valor1 = 0;
let valor2 = 0;

let btn = form.querySelector('button');

btn.onclick = function() {
        form.onsubmit = function(event) {
            event.preventDefault();
            let tarea = this.querySelector('.tarea').value;
            console.log(tarea);
            let article = document.createElement('article');
            console.log(article);
            article.classList.add('list');
            article.innerHTML = `
                <ul>
                    <li>${tarea}</li>
                    <li><button id="btn-borrar">Eliminar</button></li>
                    <li><button id="btn-check">Completar</button></li>
                </ul>
        `;
            container.appendChild(article);
            let ul = article.querySelector('li');


            btnA = article.querySelectorAll('button');

            btnA.forEach(btn => {
                btn.addEventListener('click', EventButton);
            });

            function EventButton(event) {
                if (event.target.id == 'btn-borrar') {
                    this.closest('.list').remove();
                } else if (event.target.id == 'btn-check') {
                    ul.classList.add('rayar');
                    event.target.classList.add('completar');
                    event.target.innerText = 'Completado'
                    containerC.appendChild(article);
                }
                console.log(event.target);
            }

        }
    }
    /*-----------------------Fin----------------------------------------------------*/

/*------------------------Calculadora------------------------------------------- */

let input = document.getElementById('input');
input.value = 0;
let conNum = document.getElementById('js_c-numeros')
let consim = document.getElementById('js_c-simbolo')
let btnNum = conNum.querySelectorAll('button')
let btnSim = consim.querySelectorAll('button');

btnNum.forEach(btnN => {
    btnN.addEventListener('click', EventoBoton);
})
btnSim.forEach(btnS => {
    btnS.addEventListener('click', EventoBoton);
})





function EventoBoton(event) {
    if (event.target.id == 'btn-9') {
        if (input.value == 0) {
            input.value = 9;
        } else {
            input.value += 9;
        }
    }
    if (event.target.id == 'btn-8') {
        if (input.value == 0) {
            input.value = 8;
        } else {
            input.value += 8;
        }
    }
    if (event.target.id == 'btn-7') {
        if (input.value == 0) {
            input.value = 7;
        } else {
            input.value += 7;
        }
    }
    if (event.target.id == 'btn-6') {
        if (input.value == 0) {
            input.value = 6;
        } else {
            input.value += 6;
        }
    }
    if (event.target.id == 'btn-5') {
        if (input.value == 0) {
            input.value = 5;
        } else {
            input.value += 5;
        }
    }
    if (event.target.id == 'btn-4') {
        if (input.value == 0) {
            input.value = 4;
        } else {
            input.value += 4;
        }
    }
    if (event.target.id == 'btn-3') {
        if (input.value == 0) {
            input.value = 3;
        } else {
            input.value += 3;
        }
    }
    if (event.target.id == 'btn-2') {
        if (input.value == 0) {
            input.value = 2;
        } else {
            input.value += 2;
        }
    }
    if (event.target.id == 'btn-1') {
        if (input.value == 0) {
            input.value = 1;
        } else {
            input.value += 1;
        }
    }
    if (event.target.id == 'btn-0') {
        if (input.value == 0) {
            input.value = 0;
        } else {
            input.value += 0;
        }
    }
    if (event.target.id == 'btn-/') {
        valor1 = input.value;
        let valortext = valor1.toString();
        let acc = 0;
        if (input.value == 0) {
            input.value = 0;
        } else if (valortext.charAt(valortext.length - 1) !== '/' && valortext.charAt(valortext.length - 1) !== '*' && valortext.charAt(valortext.length - 1) !== '+' && valortext.charAt(valortext.length - 1) !== '-') {
            for (let index = 0; index < valortext.length; index++) {
                const element = valortext[index];
                if (element === '/' || element === '*' || element === '-' || element === '+') {
                    acc++;
                    console.log(acc);
                }
            }
            if (acc > 0) {
                input.value = valor1;
            } else {
                input.value += "/";
            }
        }
    }
    if (event.target.id == 'btn-*') {
        valor1 = input.value;
        let acc = 0;
        let valortext = valor1.toString();
        if (input.value == 0) {
            input.value = 0;
        } else if (valortext.charAt(valortext.length - 1) !== '/' && valortext.charAt(valortext.length - 1) !== '*' && valortext.charAt(valortext.length - 1) !== '+' && valortext.charAt(valortext.length - 1) !== '-') {
            for (let index = 0; index < valortext.length; index++) {
                const element = valortext[index];
                if (element === '/' || element === '*' || element === '-' || element === '+') {
                    acc++;
                    console.log(acc);
                }
            }
            if (acc > 0) {
                input.value = valor1;
            } else {
                input.value += "*";
            }
        }
    }
    if (event.target.id == 'btn--') {
        valor1 = input.value;
        let acc = 0;
        let valortext = valor1.toString();
        if (input.value == 0) {
            input.value = 0;
        } else if (valortext.charAt(valortext.length - 1) !== '/' && valortext.charAt(valortext.length - 1) !== '*' && valortext.charAt(valortext.length - 1) !== '+' && valortext.charAt(valortext.length - 1) !== '-') {
            for (let index = 0; index < valortext.length; index++) {
                const element = valortext[index];
                if (element === '/' || element === '*' || element === '-' || element === '+') {
                    acc++;
                    console.log(acc);
                }
            }
            if (acc > 0) {
                input.value = valor1;
            } else {
                input.value += "-";
            }
        }
    }
    if (event.target.id == 'btn-+') {
        valor1 = input.value;
        let acc = 0;
        let valortext = valor1.toString();
        if (input.value == 0) {
            input.value = 0;
        } else if (valortext.charAt(valortext.length - 1) !== '/' && valortext.charAt(valortext.length - 1) !== '*' && valortext.charAt(valortext.length - 1) !== '+' && valortext.charAt(valortext.length - 1) !== '-') {
            for (let index = 0; index < valortext.length; index++) {
                const element = valortext[index];
                if (element === '/' || element === '*' || element === '-' || element === '+') {
                    acc++;
                    console.log(acc);
                }
            }
            if (acc > 0) {
                input.value = valor1;
            } else {
                input.value += "+";
            }
        }
    }
    if (event.target.id == 'btn-=') {
        valor1 = input.value
        input.value = resultado(valor1);


    }
    if (event.target.id == 'btn-ac') {
        input.value = 0;
    }

    function resultado(valor1) {
        return eval(valor1);
    }



}