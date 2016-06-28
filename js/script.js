$(document).ready(function(){
      
	  $('.slidemarca').slick({
		
		slidesToShow: 10,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		});




}, false);

$("#Referencia").hover(function () {  

  var imgId = $("#fundoref").hover(function(e){
      
      var imgId = $(this).closest('map').attr('name');
      var imgPos = $('#' + imgId).offset();
      var coords = $(this).attr('coords').split(',');
      var box = { 
                      left: parseInt(coords[0],10),
                      top: parseInt(coords[1],10),
                      width: parseInt(coords[2],10)-parseInt(coords[0],10),
                      height: parseInt(coords[3],10)-parseInt(coords[1],10)
                };


                

    var destino = querySelector("#fundoref");  //document.getElementById("#fundoref");
    // Objeto de origem
    // Objeto de destino
    // Espessura da linha
    // Cor da linha

console.log(destino);
    

linhaAnimada(this,destino,0.5,"#0000FF");

});


},false);

function linhaAnimada(objOrigem,objDestino,espessura,cor)
{
  // Cria a linha e posiciona no objeto ORIGEM
  var linha = document.createElement("div");
  linha.id = "linha";
  linha.style.width = "1px";
  linha.style.height = espessura+"px";
  linha.style.backgroundColor = cor;
  linha.style.position = "absolute";
  linha.style.top = meioObj(objOrigem)[0]+"px";
  linha.style.left = meioObj(objOrigem)[1]+"px";
  linha.style.transformOrigin = "0 0";
  document.body.appendChild(linha);
  var reta = segmentoDeReta(meioObj(objOrigem)[0],meioObj(objOrigem)[1],meioObj(objDestino)[0],meioObj(objDestino)[1]);
  linha.style.transform = 'rotate('+(-Number(reta[1]) - 90)+'deg)';
  linha.style.transition = "height 0s, width 0.4s, ease-in-out";
  
  // dispara animacao de entrada da linha
  linha.style.width = reta[0]+"px";
  
  // Funcao que encontra a coordenada do meio dos objetos
  function meioObj(objeto)
  {
    var obj = objeto.getBoundingClientRect();
    var meioObj = [((obj.bottom - obj.top)/2)+obj.top,((obj.right - obj.left)/2)+obj.left];
    return meioObj
  }
  
  // Funcao que determina angulo e comprimento da linha - Teorema de pitágoras
  function segmentoDeReta(ax,ay,bx,by)
  {
    var catetoOposto = by-ay;
    var catetoAdjacente = bx-ax;
    var hipotenusa = Math.sqrt(Math.pow(catetoAdjacente,2) + Math.pow(catetoOposto,2));
    var tangente = catetoOposto / catetoAdjacente;
    var angulo = Math.atan(tangente)*(180/Math.PI);
    if(catetoAdjacente>=0){ angulo = angulo-180;}
    var segmento = [hipotenusa,angulo];
    return segmento;
  }
  
  // Dispara animacao de saida depois de 4 segundos
  setTimeout(function(){ fadeOut(); }, 4000);
  
  // Dispara saida da linha quando tirar o mouse de cima
  this.addEventListener("mouseout",function(){ fadeOut(); }, false);
  
  // Animacao de SAIDA da linha
  function fadeOut()
  {
    linha.style.transition = "opacity 0.0s";
    linha.style.opacity = 0;
    setTimeout(function(){ linha.outerHTML=""; }, 500);
  }
  
}

});//fim do jquery


