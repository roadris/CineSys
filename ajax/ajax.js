function ajaxFunction(){
   var ajaxRequest;
	
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
         var ajaxDisplay = document.getElementById('ajaxDiv');
         if(ajaxRequest.responseText == 1){
            ajaxDisplay.innerHTML = "Concluido!";
         }else{
            ajaxDisplay.innerHTML = "Houve um erro.";
         }
      }
   }

   // Envia Dados
   switch (document.getElementById('botao').value){
      case "Enviar":
         insereDados(ajaxRequest);
         break;
      case "Atualizar":
         atualizaDados(ajaxRequest);
         break;
      default:
         deletaDados(ajaxRequest);
         break;
   }
}

function insereDados(ajaxRequest){   
   ajaxRequest.open("GET", "php/insereDados.php" + stringPHP(), true);
   ajaxRequest.send(null);
}

function atualizaDados(ajaxRequest){
   var id = document.getElementById('id').value;
   var queryString = stringPHP() + "&id=" + id;
   ajaxRequest.open("GET", "php/atualizaDados.php" + queryString, true);
   ajaxRequest.send(null);
}

function deletaDados(ajaxRequest){
   var id = document.getElementById('id').value;
   var queryString = "?id=" + id;
   ajaxRequest.open("GET", "php/deletaDados.php" + queryString, true);
   ajaxRequest.send(null);
}

function stringPHP(){
   var nome = document.getElementById('nome').value;
   var user = document.getElementById('user').value;
   var pswd = document.getElementById('pswd').value;
   return "?nome=" + nome +  "&user=" + user + "&pswd=" + pswd;
}