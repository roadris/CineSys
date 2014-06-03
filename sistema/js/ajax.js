window.onload = function(){
   ajaxFunction();
}

var ajaxRequest;

function ajaxFunction(){
	
   try{
      // Opera 8.0+, Firefox, Safari
      ajaxRequest = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e){
         try{
            ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            alert("Ajax não suportado pelo seu navegador, algumas funções não funcionarao corretamente!");
            return false;
         }
      }
   }

   // Recebe dados
   ajaxRequest.onreadystatechange = function(){
      if(ajaxRequest.readyState == 4){
         if(document.getElementById('conteudo') != null){
            if(ajaxRequest.responseText == "erro"){
               var div = document.getElementById('resposta');
               div.innerHTML = "Usuario ou senha incorretos";
            }else{
               var div = document.getElementById('conteudo');
               document.location = JSON.parse(ajaxRequest.responseText);
               //div.innerHTML = ajaxRequest.responseText;
               //div = document.getElementById('resposta');
               //div.innerHTML = "";
            }
         }else{
            if(ajaxRequest.responseText == "Usuário já existente ou indisponivel!"){
               var span = document.getElementById('span_usuario');
               span.style.color = "red";
               span.innerHTML = ajaxRequest.responseText;
            }else{
               if(ajaxRequest.responseText == 1 || ajaxRequest.responseText == 2){
                  document.getElementById('resposta').innerHTML = "Sucesso!";
                  ajaxFunction2();
               }else{
                  if(ajaxRequest.responseText == "Estoque esgotado!"){
                     document.getElementById('resposta').innerHTML = "Estoque esgotado!";
                  }else{
                     document.getElementById('resposta').innerHTML = "Houve uma falha, favor verificar os dados inseridos";
                  }
               }
            }
         }
      }
   }

   /* Envia Dados
   switch (document.getElementById('botao').value){
      case "Salvar":
         insereDados(ajaxRequest);
         break;
      case "Atualizar":
         atualizaDados(ajaxRequest);
         break;
      case "Acessar":
         acessarSistema(ajaxRequest);
         break;
      case "Finalizar":
         novaCompra(ajaxRequest);
         break;
      case "Concluir":
         novaVenda(ajaxRequest);
         break;
      default:
         deletaDados(ajaxRequest);
         break;
   }*/
}

function novaVenda(ajaxRequest){
   var select = document.getElementById('selectAtualizar');
   var nome = select.options[select.selectedIndex].text;
   var quantidade = document.getElementById('quantidade').value;
   var preco = document.getElementById('preco').value;
   var dados = "?nome=" + nome + "&quantidade=" + quantidade + "&preco=" + preco;

   if(quantidade > 0 && preco > 0){
      ajaxRequest.open("GET", "php/insereVendas.php" + dados, true);
      ajaxRequest.send(null);
   }else{
      document.getElementById('resposta').innerHTML = "Favor inserir valor acima de 0";
   }
}

function novaCompra(ajaxRequest){
   var select = document.getElementById('selectAtualizar');
   var nome = select.options[select.selectedIndex].text;
   var quantidade = document.getElementById('quantidade').value;
   var preco = document.getElementById('preco').value;
   var data = document.getElementById('data').value;
   var dados = "?nome=" + nome + "&quantidade=" + quantidade + "&preco=" + preco + "&data=" + data;

   if(quantidade > 0){
      ajaxRequest.open("GET", "php/insereCompras.php" + dados, true);
      ajaxRequest.send(null);
   }else{
      document.getElementById('resposta').innerHTML = "Favor inserir valor acima de 0";
   }
   
}

function insereDados(ajaxRequest){
   var nome = document.getElementById('nome').value;
   var user = document.getElementById('usuario').value;
   var senha = document.getElementById('senha').value;
   
   if(nome.trim() != "" && nome != null && user.trim() != "" && user != null && senha.trim() != "" && senha != null){
      var dados = "nome=" + nome + "&user=" + user + "&pswd=" + senha;

      ajaxRequest.open("POST", "php/InsereDados.php", true);
      ajaxRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      ajaxRequest.send(dados);
   }else{
      document.getElementById('resposta').innerHTML = "Houve uma falha, favor verificar os dados inseridos";
   }
}

function verificaUsuario(ajaxRequest){   
   var user = document.getElementById('usuario').value;
   var queryString = "?user=" + user;
   ajaxRequest.open("GET", "php/verificaUsuario.php" + queryString, true);
   ajaxRequest.send(null);
}


function atualizaDados(ajaxRequest){
   var nome = document.getElementById('nome').value;
   var user = document.getElementById('usuario').value;
   var senha = document.getElementById('senha').value;
   var select = document.getElementById('selectAtualizar');
   var nome2 = select.options[select.selectedIndex].text;

   if(nome.trim() != "" && nome != null && nome2.trim() != "" && nome2 != null && senha.trim() != "" && senha != null){
      var dados = "nome=" + nome + "&user=" + user + "&pswd=" + senha;

      ajaxRequest.open("POST", "php/atualizaDados.php", true);
      ajaxRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
      ajaxRequest.send(dados);
   }else{
      document.getElementById('resposta').innerHTML = "Houve uma falha, favor verificar os dados inseridos";
   }   
}

function deletaDados(ajaxRequest){
   var login = document.getElementById('usuario').value;
   if(confirm("Você tem certeza que deseja excluir o usuário " + login + "?")){
      var queryString = "?login=" + login;
      ajaxRequest.open("GET", "php/deletaDados.php" + queryString, true);
      ajaxRequest.send(null);
   }
}

function acessarSistema(ajaxRequest){
   var user = document.getElementById('usuario').value;
   var senha = document.getElementById('senha').value;
   var dados = "usuario=" + user + "&senha=" + senha;
   ajaxRequest.open("POST", "php/acessarSistema.php", true);
   ajaxRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
   ajaxRequest.send(dados);
}

function stringPHP(){
   var nome = document.getElementById('nome').value;
   var user = document.getElementById('usuario').value;
   var senha = document.getElementById('senha').value;
   return "?nome=" + nome +  "&usuario=" + user + "&senha=" + senha;
}