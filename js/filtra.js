var campoFiltro = document.querySelector("#filtrar-tabela");

// evento de input é acionado cada vez que o usuário digitar um caracter dentro do campo
campoFiltro.addEventListener("input",
	function() {
		var pacientes = document.querySelectorAll(".paciente");

		if(this.value.length > 0) {
			pacientes.forEach(
				function(paciente) {
					var tdNome = paciente.querySelector(".info-nome");
					var nome = tdNome.textContent;

					// Usando expressão regular para filtrar os pacientes
					// o parâmetro "i" é para dizer que a busca é case-insensitive
					// ou seja, não liga se é maiuscula ou minuscula
					var expressaoRegular = new RegExp(campoFiltro.value, "i");

					// pede para expressão regular testar se existe o conteúdo que estou passando
					if(!expressaoRegular.test(nome)){
						paciente.classList.add("invisivel");
					}else{
						paciente.classList.remove("invisivel");
					}
				}
			)
		} else {
			pacientes.forEach(
				function(paciente) {
					paciente.classList.remove("invisivel");
				}
			)
		}		
	}
);