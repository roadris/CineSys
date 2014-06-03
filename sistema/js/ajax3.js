window.onload = function(){
   ajaxFunction();
   ajaxFunction3();
}

var ajaxRequest3;

function ajaxFunction3(){
   
   try{
      // Opera 8.0+, Firefox, Safari
      ajaxRequest3 = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         ajaxRequest3 = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e){
         try{
            ajaxRequest3 = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            alert("Ajax não suportado pelo seu navegador, algumas funções não funcionarao corretamente!");
            return false;
         }
      }
   }

   // Recebe dados
   ajaxRequest3.onreadystatechange = function(){
      if(ajaxRequest3.readyState == 4){
         if(ajaxRequest3.responseText == "Estoque esgotado!"){
            alert("Estoque esgotado!");
         }else{
            if(ajaxRequest3.responseText.length > 5){
               var lista = [];
               lista = JSON.parse(ajaxRequest3.responseText);
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
               document.getElementById('preco').value = ajaxRequest3.responseText;
            }
         }
      }
   }

   if(document.getElementById('botao').value == "Finalizar"){
      preencheSelect(ajaxRequest3, "");
   }else{
      if(document.getElementById('botao').value == "Concluir"){
         preencheSelect(ajaxRequest3, "sala");
      }
   }
}

function preencheSelect(ajaxRequest3, info2){
   var queryString = "?info=" + "produto" + "&info2=" + info2;
   ajaxRequest3.open("GET", "php/listaProdutos.php" + queryString, true);
   ajaxRequest3.send(null);
}

function retornaPreco(ajaxRequest3){
   var select = document.getElementById('selectAtualizar');
   var info = select.options[select.selectedIndex].text;
   if(info.trim() != "" && info != null){
      var queryString = "?info=" + info + "&info2=" + "";
      ajaxRequest3.open("GET", "php/listaProdutos.php" + queryString, true);
      ajaxRequest3.send(null);  
   }
}