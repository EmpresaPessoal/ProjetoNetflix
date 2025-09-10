//array de objetos com as imagens e informações do banner
const bannerItems = [
    {
        imagem:"../assets/Game1.jpg",
        titulo:"Titulo do filme 1",
        descricao: "Filme 1"
    },
    {
        imagem:"../assets/Game2.jpg",
        titulo: "Titulo do filme 2",
        descricao: "Filme 2"
    },
    {
        imagem:"../assets/Game3.jpg",
        titulo:"Titulo do filme 3",
        descricao: "Filme 3"
    }
];
// Declarando as variaveis e elementos com DOM
const tempo = 5000; //tempo em milissegundos
const elementoBanner = document.querySelector(".banner");
const elementoTitulo = document.querySelector(".banner-titulo");
const elementoDescricao = document.querySelector(".banner-descricao");
let i = 0; //inicio da contagem das imagens

//função para o slideshow
function slideshow(){
    //altera a img de fundo do banner
    //`` - template strings ou strings literais (forma de concateinar)
    elementoBanner.style.backgroundImage = `url(${bannerItems[i].imagem}/)`;
    //altera o titulo do banner
    elementoTitulo.textContent = bannerItems[i].titulo;
    // altera a descricao do banner 
    elementoDescricao.textContent = bannerItems[i].descricao;

    //incrementa o indice (i) e reinicia quando chegar no final do array
    //se o i for maior que a quantidade de imagens volta a 0
    i++;
    if (i > bannerItems.length){
        i = 0;
    }
    //chama a função novamente após o tempo definido
    setTimeout(slideShow,tempo);
}
//inicia o slideshow
slideShow()