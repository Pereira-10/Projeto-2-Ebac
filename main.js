const form= document.getElementById('form-agenda');
let linhas='';
const numeros = [];
form.addEventListener('submit',function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    numeros.push(parseInt(inputNumero.value));
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela () {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}