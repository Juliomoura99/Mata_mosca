var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 50;

var criaMoscaTempo = 1500;

var nivel = window.location.search;	//procura parametro para setar nivel
nivel = nivel.replace('?','');		//parametro retorna sem o '?'

if(nivel === 'facil'){	//condição para definir nivel
	criaMoscaTempo = 2500;
}else if(nivel === 'medio'){
	criaMoscaTempo = 1500;
}else if(nivel === 'dificil'){
	criaMoscaTempo = 1000;
}


function ajustaTamanhoTela(){	//define o tamanho da tela 

	altura = window.innerHeight;
	largura = window.innerWidth;
}

ajustaTamanhoTela();

var cronometro = setInterval( function(){

	tempo -= 1;

	if(tempo < 0){

		clearInterval(cronometro);	//limpa da memoria
		clearInterval(criaMosca);

		window.location.href = 'vitoria.html';

	}
	else{
		document.getElementById('cronometro').innerHTML = tempo;
	}
},1000)


function posicaoRandomica(){

	
	if(document.getElementById('mosca')){ //remover mosca - para ter apenas um na tela

		document.getElementById('mosca').remove();

		if(vidas > 2){	//Game Over

			 window.location.href = 'fim_de_jogo.html';
		}
		else{	//Perde uma vida

			document.getElementById('vida' + vidas).src = "imagens/coracao_vazio.png";
			vidas++;
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90;	//definindo posicoes aleatorias do sem casa decimal
	var posicaoY = Math.floor(Math.random() * altura) - 90;

	posicaoX = posicaoX < 0 ? 0 : posicaoX;		//condicao de ultrapassar limites da tela
	posicaoY = posicaoY < 0 ? 0 : posicaoY;


	//criando a mosca
	var mosca = document.createElement('img');

	mosca.src = 'imagens/mosca.png';

	mosca.className = tamanhoMosca() + ' ' + ladoMosca();

	mosca.style.left = posicaoX + 'px';	//posição da mosca
	mosca.style.top = posicaoY + 'px';

	mosca.style.position = 'absolute';
	mosca.id = 'mosca';

	mosca.onclick = function(){	//click que mata a mosca
		this.remove();
	}

	document.body.appendChild(mosca);	//mostra imagem da mosca na tela


}

function tamanhoMosca(){	//define tamanhos da mosca

	var classe = Math.floor(Math.random() * 3);

	console.log(classe);

	switch(classe){

		case 0:
		return 'mosca1';

		case 1:
		return 'mosca2';

		case 2:
		return 'mosca3';

	}
}

function ladoMosca(){	//define qual lado a mosca estará olhando

	var classe = Math.floor(Math.random() * 2);

	console.log(classe);

	switch(classe){

		case 0:
		return 'ladoA';

		case 1:
		return 'ladoB';


	}
}

