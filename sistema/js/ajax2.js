var ajax2 = {
   ajaxRequest: null,

   init: function(){
      ajax2.getAjaxRequest();
      ajax2.preencheSelect();
   },

   getAjaxRequest: function(){
      try{
         // Opera 8.0+, Firefox, Safari
         ajax2.ajaxRequest = new XMLHttpRequest();
      }catch (e){
         // Internet Explorer Browsers
         try{
            ajax2.ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
         }catch (e){
            try{
               ajax2.ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e){
               alert("Ajax não suportado pelo seu navegador, algumas funções não funcionarao corretamente!");
               return false;
            }
         }
      }

      ajax2.ajaxRequest.onreadystatechange = function(){
         if(ajax2.ajaxRequest.readyState == 4){
            var lista = [];
            lista = ajax2.ajaxRequest.responseText;
            
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
   },

   preencheSelect: function(){
      var queryString = "?info=" + "funcionario";
      ajax2.ajaxRequest.open("GET", "php/listaFuncionarios.php" + queryString, true);
      ajax2.ajaxRequest.send(null);
   },

   preencheCampos: function(){
      var select = document.getElementById('selectAtualizar');
      var login = select.options[select.selectedIndex].text;
      
      if(login.trim() != "" && login != null){
         var queryString = "?info=" + login;
         ajax2.ajaxRequest.open("GET", "php/listaFuncionarios.php" + queryString, true);
         ajax2.ajaxRequest.send(null);
      }
   },
}

ajax2.init();

