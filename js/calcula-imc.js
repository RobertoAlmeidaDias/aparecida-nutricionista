// Alterando o título principal através do seletor css de classe
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// Capturando valores específicos da tabela


var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
	var paciente = pacientes[i];
	var peso = paciente.querySelector(".info-peso").textContent;
	var altura = paciente.querySelector(".info-altura").textContent;

	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);
	
	if(!pesoValido){
		pesoValido = false;
		paciente.querySelector(".info-imc").classList.add("paciente-invalido");
		paciente.querySelector(".info-peso").classList.add("paciente-invalido");
		paciente.querySelector(".info-imc").textContent = "Peso Inválido";	
	}

	if(!alturaValida) {
		alturaValida = false;		
		paciente.querySelector(".info-altura").classList.add("paciente-invalido");
		paciente.querySelector(".info-imc").classList.add("paciente-invalido");	
		paciente.querySelector(".info-imc").textContent = "Altura inválida";
	}

	if(pesoValido && alturaValida){
		var imc = calculaImc(peso, altura);
		paciente.querySelector(".info-imc").textContent = imc;
	}
}

function validaPeso(peso) {
	if(peso >= 0 && peso <= 650 && peso.length > 0) {
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura) {
	if(altura > 0 && altura <= 3 && altura.length > 0) {
		return true;
	} else {
		return false;
	}
}
 
function validaNome(nome) {
	if(nome.length > 0) {
		return true;
	} else {
		return false;
	}
}

function calculaImc(peso, altura) {
	var imc = peso / (altura * altura);
	return imc.toFixed(2); //duas casas decimais
}