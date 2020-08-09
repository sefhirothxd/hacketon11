let form = document.querySelector('form');
let container = document.getElementById('container-pendientes');
let containerC = document.getElementById('container-completas');


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





// // btnT.onclick = function() {
// //     btnT.classList.toggle('btn-t');
// // }

// article.querySelector('button').onclick = function() {
//         this.closest('.list').remove();
//     }
//     // article.querySelector('button').onclick = function() {
//     //     this.classList.toggle('is-active');
//     // }