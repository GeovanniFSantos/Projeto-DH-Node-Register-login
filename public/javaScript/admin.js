let btnAtualizar = document.querySelector('#atualizar');
let btnCriar = document.querySelector('#criar');
let btnDeletar = document.querySelector('#deleta');
let btnList = document.querySelector('#list');

const divCreate = document.querySelector('.create');
const divUpdate = document.querySelector('.update');
const divdelet = document.querySelector('.delet');
const divList = document.querySelector('.list');

function removerVisivel() {
    divCreate.classList.remove('visivel');
    divUpdate.classList.remove('visivel');
    divdelet.classList.remove('visivel');
    divOutros.classList.remove('visivel');
};

btnAtualizar.addEventListener('click', () => {
    removerVisivel();
    divUpdate.classList.add('visivel');
})

btnCriar.addEventListener('click', () => {
    removerVisivel();
    divCreate.classList.add('visivel');
})

btnDeletar.addEventListener('click', () => {
    removerVisivel();
    divdelet.classList.add('visivel');
})

btnList.addEventListener('click', () => {
    removerVisivel();
    divList.classList.add('visivel');
})