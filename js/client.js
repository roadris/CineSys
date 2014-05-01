var img = document.getElementById('foto');

img.height = window.innerHeight;
img.width = window.innerWidth;

function changeImage()
{
    var img = document.getElementById('foto');
    img.src = images+x+'.jpg';
    x++;

    if(x >= images.length){
        x = 0;
    } 

    setTimeout("changeImage()", 5000);
}

var images = "imagens/img",
x = 1;

setTimeout("changeImage()", 5000);
