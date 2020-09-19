// Treinando requisição com javascript de modo assincrono (AJAX)
// Assíncrono porque ele não está parando o fluxo do nosso javascript, ou seja,
// durante o tempo que ele está indo em outra aplicação fazer uma busca ele não está
// parando o fluxo do javascript
// se tivesse outra funcionalidade do javascript sendo executada no mesmo instante,
// iria funcionar normalmente, não iria parar durante a requisição

var btnBuscar = document.querySelector("#buscar-paciente");

btnBuscar.addEventListener("click", 
	function() {
		// fazer uma requisição para uma api através do objeto javascript XMLHttpRequest
		var xhr = new XMLHttpRequest();

		//configurando previamente o objeto
		xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

		// load é um evento que ocorre quando receber a resposta da requisição
		// ou seja, quando a resposta estiver carregada (load) a gente faz alguma coisa na function
		xhr.addEventListener("load",
			function() {
				var erroAjax = document.querySelector("#erro-ajax");
				// validando sucesso na requisição
				if(xhr.status == 200) {
					erroAjax.classList.add("invisivel");
					// responseText é o texto da resposta
					var resposta = xhr.responseText;

					// como o retorno é um JSON, precisamos fazer o parse para adicionar em um array
					// vai ler o texto em JSON e devolver objetos javascript
					var pacientes = JSON.parse(resposta);

					// iterando o array de pacientes para adicionar cada um deles na tabela
					pacientes.forEach(
						function(paciente) {
							addPacienteNaTabela(paciente);
						}
					);
				}else {
					
					erroAjax.classList.remove("invisivel");
					console.log(xhr.status);
					console.log(xhr.responseText);					

				}
				
				

			}
		);

		// enviando a requisição
		xhr.send();
	}
);