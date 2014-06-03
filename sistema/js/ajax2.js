window.onload = function(){
   ajaxFunction();
   ajaxFunction2();
}

var ajaxRequest2;

function ajaxFunction2(){
	
   try{
      // Opera 8.0+, Firefox, Safari
      ajaxRequest2 = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         ajaxRequest2 = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e){
         try{
            ajaxRequest2 = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            alert("Ajax não suportado pelo seu navegador, algumas funções não funcionarao corretamente!");
            return false;
         }
      }
   }

   // Recebe dados
   ajaxRequest2.onreadystatechange = function(){
      if(ajaxRequest2.readyState == 4){
         var lista = [];
         lista = ajaxRequest2.responseText;
         
         if(lista.length < 25){
            lista = JSON.parse(lista);
            document.getElementById('nome').value = lista[0];     
            var select = document.getElementById('selectAtualizar');                   
            document.getElementById('usuario').value = select.options[select.selectedIndex].text;
         }if(lista.length > 25){
            lista = JSON.parse(lista);
            var select = document.getElementById('selectAtualizar');
            select.length = 1;
            var count = 0;
            while(count < lista.length){
               var option = document.createElement('option');
               option.id = "option"+count+1;
               option.innerHTML = lista[count];
               select.appendChild(option);
               count++;
            }
            var optionPadrao = document.getElementById('optionPadrao');
            optionPadrao.innerHTML = "";
         }
      }
   }

   if(document.getElementById('botao').value == "Atualizar"){
      preencheSelect(ajaxRequest2);
   }

}

function preencheSelect(ajaxRequest2){
   var queryString = "?info=" + "funcionario";
   ajaxRequest2.open("GET", "php/listaFuncionarios.php" + queryString, true);
   ajaxRequest2.send(null);
}

function preencheCampos(ajaxRequest2){
   var select = document.getElementById('selectAtualizar');
   var login = select.options[select.selectedIndex].text;
   if(login.trim() != "" && login != null){
      var queryString = "?info=" + login;
      ajaxRequest2.open("GET", "php/listaFuncionarios.php" + queryString, true);
      ajaxRequest2.send(null);
   }
}