const fotosGaleria = $(".foto")
let atual = 0
let altura = $(document).height();
let largura = $(document).width();
$(".fechar").click(function(){fechar()})
const fechar = function(){
  $("#moldura").fadeOut('slow')
  atual = 0
}

console.log (fotosGaleria);

mostrar(atual)

function pegarNumero(n){
  atual = 0
  mostrar(n)

  if (largura<=794){
    atual=0;
    mostrarMobile(n);
  }
}

function mostrarMobile(n){
  atual+=n
  if (atual<0){
    atual = fotosGaleria.length - 1
  }
  else if (atual>=fotosGaleria.length){
    atual = 0
  }
  $("#moldura").css({"width":largura,"height":altura})
  $("#moldura").fadeIn('slow').css({"display":"flex"})
  $(".fotoPrincipal").html(fotosGaleria[atual].outerHTML)
}

function mostrar(n){
    atual+=n
    $(".fotoPrincipal").html(fotosGaleria[atual].outerHTML)
  }


function botaoMobile(n){
  mostrarMobile (n)
}