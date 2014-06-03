function validacao(campo){
	var campo = document.getElementById(campo);

	var resposta;
	switch (campo.id){
		case "nome":
			campo.value.length > 3 && campo.value.length <= 20 ? resposta = true : resposta = false;
			break;
		case "usuario":
			campo.value.length > 1 && campo.value.length <= 12 ? resposta = true : resposta = false;
			break;
		default:
			campo.value.length > 5 && campo.value.length <= 12 ? resposta = true : resposta = false;
			break;
	}

	campo = document.getElementById('resposta');
	resposta ? campo.innerHTML = "Nome Valido" : campo.innerHTML = "Nome Invalido";
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