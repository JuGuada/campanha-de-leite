const slides = [
    "./img/amarelo.png",
    "./img/rosa.png",
    "./img/azul2.png",
   
];
var indiceAtual = 0;

function mostrarSlide() {
    var slide = document.getElementById("carrossel-slide");
    slide.style.backgroundImage = `url(${slides[indiceAtual]})`
}
function proximoSlide(){
    if(indiceAtual === slides.length -1){
        indiceAtual=0
    }else{
        indiceAtual++
    }
    mostrarSlide()
}
mostrarSlide()

setInterval(proximoSlide, 3000)