var ajax = {
   ajaxRequest: null,

   init: function(){
      ajax.getAjaxRequest();
   },

   getAjaxRequest: function(){
      try{
         // Opera 8.0+, Firefox, Safari
         ajax.ajaxRequest = new XMLHttpRequest();
      }catch (e){
         // Internet Explorer Browsers
         try{
            ajax.ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
         }catch (e){
            try{
               ajax.ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e){
               alert("Ajax não suportado pelo seu navegador, algumas funções não funcionarao corretamente!");
               return false;
            }
         }
      }

      ajax.ajaxRequest.onreadystatechange = function(){
         if(ajax.ajaxRequest.readyState == 4){
            if(document.getElementById('conteudo') != null){
               if(ajax.ajaxRequest.responseText == "erro"){
                  var div = document.getElementById('resposta');
                  div.innerHTML = "Usuario ou senha incorretos";
               }else{
                  var div = document.getElementById('conteudo');
                  document.location = JSON.parse(ajax.ajaxRequest.responseText);
                  //div.innerHTML = ajax.ajaxRequest.responseText;
                  //div = document.getElementById('resposta');
                  //div.innerHTML = "";
               }
            }else{
               if(ajax.ajaxRequest.responseText == "Usuário já existente ou indisponivel"){
                  document.getElementById('resposta').innerHTML = ajax.ajaxRequest.responseText;
               }else{
                  if(ajax.ajaxRequest.responseText == "Usuário disponivel"){
                     document.getElementById('resposta').innerHTML = ajax.ajaxRequest.responseText;
                  }else{
                     if(ajax.ajaxRequest.responseText == 1 || ajax.ajaxRequest.responseText == 2){
                        document.getElementById('resposta').innerHTML = "Sucesso!";
                     }else{
                        if(ajax.ajaxRequest.responseText == "Estoque esgotado!"){
                           document.getElementById('resposta').innerHTML = ajax.ajaxRequest.responseText;
                        }else{
                           document.getElementById('resposta').innerHTML = "Houve uma falha, favor verificar os dados inseridos";
                        }
                     }
                  }
               }
            }
         }
      }
   },

   novaVenda: function(){
      var select = document.getElementById('selectAtualizar');
      var nome = select.options[select.selectedIndex].text;
      var quantidade = document.getElementById('quantidade').value;
      var preco = document.getElementById('preco').value;
      var dados = "?nome=" + nome + "&quantidade=" + quantidade + "&preco=" + preco;

      if(quantidade > 0 && preco > 0){
         ajax.ajaxRequest.open("GET", "php/insereVendas.php" + dados, true);
         ajax.ajaxRequest.send(null);
      }else{
         document.getElementById('resposta').innerHTML = "Favor inserir valor acima de 0";
      }
   },

   novaCompra: function(){
      var select = document.getElementById('selectAtualizar');
      var nome = select.options[select.selectedIndex].text;
      var quantidade = document.getElementById('quantidade').value;
      var preco = document.getElementById('preco').value;
      var data = document.getElementById('data').value;
      var dados = "?nome=" + nome + "&quantidade=" + quantidade + "&preco=" + preco + "&data=" + data;

      var date = new Date();
      var month = date.getUTCMonth()+1;
      month < 10 ? month = "0" + month : month = month;
      var day = date.getUTCDate();
      var year = date.getUTCFullYear();
      var hoje = year + "-" + month + "-" + day;

      if(data <= hoje && data.trim() != ""){
         if(quantidade > 0 && preco > 0){
            if(data )
            ajax.ajaxRequest.open("GET", "php/insereCompras.php" + dados, true);
            ajax.ajaxRequest.send(null);
         }else{
            document.getElementById('resposta').innerHTML = "Favor inserir quantidade e/ou preço acima de 0";
         }
      }else{
         document.getElementById('resposta').innerHTML = "Não é possível inserir uma compra com data em branco ou para um dia após o dia atual";
      }
   },

   insereDados: function(){
      var nome = document.getElementById('nome').value;
      var user = document.getElementById('usuario').value;
      var senha = document.getElementById('senha').value;
      
      if(nome.trim() != "" && nome != null && user.trim() != "" && user != null && senha.trim() != "" && senha != null){
         if(nome.length > 3 && nome.length <= 20){
            if(senha.length > 5 && senha.length <= 12){
               limparcampo2('respostanome');
               limparcampo2('respostasenha');
               
               var dados = "nome=" + nome + "&user=" + user + "&pswd=" + senha;

               ajax.ajaxRequest.open("POST", "php/InsereDados.php", true);
               ajax.ajaxRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
               ajax.ajaxRequest.send(dados);
            }else{
               document.getElementById('respostasenha').innerHTML = "Favor inserir uma senha com mais de 5 caracteres e menos que 12 caracteres";
            }
         }else{
            document.getElementById('respostanome').innerHTML = "Favor inserir um nome com mais de 3 caracteres e menos que 20 caracteres";
         }
      }else{
         document.getElementById('resposta').innerHTML = "Houve uma falha, favor verificar os dados inseridos";
      }
   },

   verificaUsuario: function(){   
      var user = document.getElementById('usuario').value;
      var queryString = "?user=" + user;

      if(user.length <= 12){
         if(user.trim() != ""){
            ajax.ajaxRequest.open("GET", "php/verificaUsuario.php" + queryString, true);
            ajax.ajaxRequest.send(null);
         }else{
            document.getElementById('resposta').innerHTML = "Favor inserir um usuário"
         }
      }else{
         document.getElementById('resposta').innerHTML = "Nome de usuário muito longo"
      }
   },


   atualizaDados: function(){
      var nome = document.getElementById('nome').value;
      var user = document.getElementById('usuario').value;
      var senha = document.getElementById('senha').value;
      var select = document.getElementById('selectAtualizar');
      var nome2 = select.options[select.selectedIndex].text;

      if(nome.trim() != "" && nome != null && user.trim() != "" && user != null && senha.trim() != "" && senha != null){
         if(nome.length > 3 && nome.length <= 20){
            if(senha.length > 5 && senha.length <= 12){
               limparcampo2('respostanome');
               limparcampo2('respostasenha');

               var dados = "nome=" + nome + "&user=" + user + "&pswd=" + senha;

               ajax.ajaxRequest.open("POST", "php/atualizaDados.php", true);
               ajax.ajaxRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
               ajax.ajaxRequest.send(dados);
            }else{
               document.getElementById('respostasenha').innerHTML = "Favor inserir uma senha com mais de 5 caracteres e menos que 12 caracteres";
            }
         }else{
            document.getElementById('respostanome').innerHTML = "Favor inserir um nome com mais de 3 caracteres e menos que 20 caracteres";
         }
      }else{
         document.getElementById('resposta').innerHTML = "Houve uma falha, favor verificar os dados inseridos";
      }   
   },

   deletaDados: function(){
      var login = document.getElementById('usuario').value;
      if(confirm("Você tem certeza que deseja excluir o usuário " + login + "?")){
         var queryString = "?login=" + login;
         ajax.ajaxRequest.open("GET", "php/deletaDados.php" + queryString, true);
         ajax.ajaxRequest.send(null);
      }
   },

   acessarSistema: function(){
      var user = document.getElementById('usuario').value;
      var senha = document.getElementById('senha').value;
      var dados = "usuario=" + user + "&senha=" + senha;
      ajax.ajaxRequest.open("POST", "php/acessarSistema.php", true);
      ajax.ajaxRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
      ajax.ajaxRequest.send(dados);
   },

   stringPHP: function(){
      var nome = document.getElementById('nome').value;
      var user = document.getElementById('usuario').value;
      var senha = document.getElementById('senha').value;
      return "?nome=" + nome +  "&usuario=" + user + "&senha=" + senha;
   },

}

ajax.init();