var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg",function(img){
        playerObject=img;
        playerObject.scaleToWidth(700);
        playerObject.scaleToHeight(510);
        playerObject.set({
        top:0,
        left:0
        });
        canvas.add(playerObject);	
    });
}

function playSound(){
x.play();	
}
