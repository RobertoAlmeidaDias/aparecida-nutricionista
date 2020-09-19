// Os eventos no javascript tem um comportamento de encadeamento, semelhante a uma bolha subindo
// conhecido como eventbubble,
// o evento começa no elemento filho e vai subindo, passando por todos os elementos pais
// até estourar no último elemento que é o body, ou seja, um evento é executado em todos os elementos
// da sua origem até seu último elemento pai que no caso é o body

//no exemplo abaixo, colocamos um listener na tabela, pois queremos remover uma linha de sua tabela
// que receber duplo click, assim, quando um duplo clique acontecer na tabela, ela vai procurar saber
// qual foi o elemento alvo (event.target) que sofreu o duplo clique, para poder removê-lo;
// Perceba que o listener está acontecendo na tabela como um todo e vai fazer com que a tabela 
// procure o local exato onde aconteceu o clique

// capturar a tabela através do DOM 
var tabela = document.querySelector("table");

// adicionar um listener (ouvinte) nessa tabela para um evento de duplo click (dblclik)
tabela.addEventListener("dblclick",
	function(event) {
		// alvo imediato que foi clicado, que no caso é uma célula da linha e não a linha inteira
		var alvoImediato = event.target;

		// primeiro nó pai (primeiro elemento pai do elemento alvo imediato), ou seja, subiu um nível
		// que no caso é o (tr) referente a linha que foi clicada
		var elementoPaiDoAlvo = alvoImediato.parentNode;

		// Criando uma animação de esmaecimento da linha antes de removê-la de vez,
		// criei uma código no css que faz o esmaecimento em uma transição de 1 segundo
		// vou adicionar essa classe no meu elemento que quero deletar para que ele
		// exiba esse comportamento na tela		
		elementoPaiDoAlvo.classList.add("fadeOut");

		//precis fazer um timeout de 1 segundo para o usuário poder ver o efeito do css
		// antes de chamar a função para remover a linha (elemento tr)
		setTimeout(
			function() {
				// agora que tenho o elemento pai que é a linha (tr), posso removê-la 
				elementoPaiDoAlvo.remove();
			},
			600 // tempo de espero em milisegundos, no casso 1000 milisegundos = 1 segundo
		);

		
	}
)




