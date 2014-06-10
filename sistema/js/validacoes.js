function validacao(campo){
	var nome = campo;
	var campo = document.getElementById(campo);

	var resposta;
	switch (campo.id){
		case "nome":
			campo.value.length > 3 && campo.value.length <= 20 ? resposta = true : resposta = false;
			break;
		case "usuario":
			campo.value.length > 1 && campo.value.length <= 12 ? resposta = true : resposta = false;
			break;
		case "senha":
			campo.value.length > 5 && campo.value.length <= 12 ? resposta = true : resposta = false;
			break;
	}

	campo = document.getElementById('resposta'+nome);
	resposta ? campo.innerHTML = "Tamanho do campo " +nome+ " valido": campo.innerHTML = "Tamanho do campo " +nome+ " inválido";
}

function validar(campo){
	var campo = document.getElementById(campo);

	if(campo.trim() != "" && campo != null){
		return true;
	}
	return false;
}

function calculoPreco(){
	var quantidade = document.getElementById('quantidade').value;
	var preco = document.getElementById('preco').value;

	document.getElementById('total').value = quantidade*preco;
}

function limparcampo(campo){
	document.getElementById(campo).value = "";
}

function limparcampo2(campo){
	document.getElementById(campo).innerHTML = "";
}

function limpaAll(campo){
	var campos = document.getElementsByTagName(campo);

	for (var i = campos.length - 1; i >= 0; i--) {
		if(campos[i].type != "button" && campos[i].type != "submit" && campos[i].type != "reset"){
			campos[i].value = "";
		}
	}
}