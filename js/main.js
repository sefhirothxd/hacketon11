let form = document.querySelector('form');
let container = document.getElementById('container');

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
                <li><button>X</button></li>
            </ul>
    `;

    article.querySelector('button').onclick = function() {
        this.closest('.list').remove();
    }

    container.appendChild(article);
}