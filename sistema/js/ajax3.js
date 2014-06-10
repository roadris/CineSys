var ajax3 = {
   ajaxRequest: null,

   init: function(){
      ajax3.getAjaxRequest();
      ajax3.preenchePagina();
   },

   getAjaxRequest: function(){
      try{
         // Opera 8.0+, Firefox, Safari
         ajax3.ajaxRequest = new XMLHttpRequest();
      }catch (e){
         // Internet Explorer Browsers
         try{
            ajax3.ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
         }catch (e){
            try{
               ajax3.ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e){
               alert("Ajax não suportado pelo seu navegador, algumas funções não funcionarao corretamente!");
               return false;
            }
         }
      }

      ajax3.ajaxRequest.onreadystatechange = function(){
         if(ajax3.ajaxRequest.readyState == 4){
            if(ajax3.ajaxRequest.responseText == "Estoque esgotado!"){
               alert("Estoque esgotado!");
            }else{
               if(ajax3.ajaxRequest.responseText.length > 5){
                  var lista = [];
                  lista = JSON.parse(ajax3.ajaxRequest.responseText);
                  var select = document.getElementById('selectAtualizar');
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
               }else{
                  document.getElementById('preco').value = ajax3.ajaxRequest.responseText;
               }
            }
         }
      }
   },

   preenchePagina: function(){
      if(document.getElementById('botao').value == "Finalizar"){
         ajax3.preencheSelect("");
      }else{
         if(document.getElementById('botao').value == "Concluir"){
            ajax3.preencheSelect("sala");
         }
      }
   },

   preencheSelect: function(info2){
      var queryString = "?info=" + "produto" + "&info2=" + info2;
      ajax3.ajaxRequest.open("GET", "php/listaProdutos.php" + queryString, true);
      ajax3.ajaxRequest.send(null);
   },

   retornaPreco: function(){
      var select = document.getElementById('selectAtualizar');
      var info = select.options[select.selectedIndex].text;
      if(info.trim() != "" && info != null){
         var queryString = "?info=" + info + "&info2=" + "";
         ajax3.ajaxRequest.open("GET", "php/listaProdutos.php" + queryString, true);
         ajax3.ajaxRequest.send(null);
      }
   },

}

ajax3.init();