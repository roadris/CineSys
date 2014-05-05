function ajaxFunction(){
 var ajaxRequest;
	
 try{
   // Opera 8.0+, Firefox, Safari
   ajaxRequest = new XMLHttpRequest();
 }catch (e){
   // Internet Explorer
   try{
      ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
   }catch (e) {
      try{
         ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
      }catch (e){
         alert("Falha no navegador");
         return false;
      }
   }
 }
 /* Recebe dados
 ajaxRequest.onreadystatechange = function(){
   if(ajaxRequest.readyState == 4){
      var ajaxDisplay = document.getElementById('ajaxDiv');
      ajaxDisplay.innerHTML = ajaxRequest.responseText;
   }
 }*/
 // Envia dados
 var nome = document.getElementById('nome').value;
 var pswd = document.getElementById('pswd').value;
 var queryString = "?nome=" + nome +  "&pswd=" + pswd;
 ajaxRequest.open("GET", "buscaDados.php" + queryString, true);
 ajaxRequest.send(null);
}
