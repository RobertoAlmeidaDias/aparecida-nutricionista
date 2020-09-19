var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener
(
	"click", 
	function(event) {
		event.preventDefault(); // evita o comportamento padrão que é recarregar a página

		// Pegando os valores dos inputs do formulário através dos seus respectivos 'names'
		var form = document.querySelector("#form-adiciona");
		
		var paciente = obtemPacienteDoFormulario(form);
		
		var erros = validaPaciente(paciente);		
		
		if(erros.length > 0){
			exibeMensagensDeErro(erros);
			return;
		}

		addPacienteNaTabela(paciente);

		form.reset();

		limpaMensagens(document.querySelector("#mensagens-erro"));
	}
);

function addPacienteNaTabela(paciente) {
	var pacienteTr = montaTr(paciente);


	// adicionando a nova linha (tr) dentro do tbody na tabela 
	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
	var ul = document.querySelector("#mensagens-erro");

	limpaMensagens(ul);

	// foreach 
	erros.forEach(
		function(erro) { // para cada indice do meu array execute essa função passando o valor do indice (erro)
			var li = document.createElement("li");
			li.textContent = erro;
			ul.appendChild(li); 
			ul.classList.add("paciente-invalido");
		}
	)	
}

function limpaMensagens(elemento) {
	//innerHTML pega o html interno de um elemento
	elemento.innerHTML = "";
}

function obtemPacienteDoFormulario(form) {
	// criando um objeto 
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTr(paciente) {
	// criando nova linha da tabela (tr)
		var pacienteTr = document.createElement("tr");
		pacienteTr.classList.add("paciente");

		// adicionando as novas colunas (campos) td's dentro da nova tr
		pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
		pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
		pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
		pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
		pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

		return pacienteTr;
}

function montaTd(dado, classe) {
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente) {

	//declarando um array
	var erros = [];

	if(!validaNome(paciente.nome)) {
		document.querySelector("#nome").classList.add("paciente-invalido");
		erros.push("Necessário inserir um nome para o paciente");
	}

	if(!validaPeso(paciente.peso)) {
		document.querySelector("#peso").classList.add("paciente-invalido");
		erros.push("O Peso inserido para o paciente é inválido!"); // push add um elementon o array
	}

	if(!validaAltura(paciente.altura)) {
		document.querySelector("#altura").classList.add("paciente-invalido");
		erros.push("A Altura inserida para o paciente é inválida!");		
	}	

	return erros;
}