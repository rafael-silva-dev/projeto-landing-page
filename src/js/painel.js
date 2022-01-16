const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

/*
    quando clicar na seta para avançar temos que
    esconder as imagens e mostrar a próxima imagem
*/
setaAvancar.addEventListener('click', function () {

    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === totalDeImagens) {
        return;
    }

    imagemAtual++;

    esconderImagens();
    mostrarImagem();
});

/*
    quando clicar na seta para voltar temos que
    esconder as imagens e mostrar a imagem anterior
*/

setaVoltar.addEventListener('click', function () {

    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagem();
});