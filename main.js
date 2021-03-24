const { fabric } = require("./fabric");

canvas = new fabric.Canvas("myCanvas"); 
ctx = canvas.getContext("2d");

player_img_height = 30; 
player_img_width = 30; 

player_x = 10; 
player_y = 10;

player_object = ""; 
block_img_object = ""; 

function player_update(){
   fabric.Image.fromURL("player.png", function(Img){
       player_object = Img; 
       player_object.scaleToWidth(150);
       player_object.scaleToWidth(140);
       player_object.set({
           top:player_y,
           left:player_x 

       });
       canvas.add(player_object);
   });

}

function new_image(get_Image){
    fabric.Image.fromURL(get_Image, function(Img){
        bolck_img_object = Img; 
        bolck_img_object.scaleToWidth(block_img_width);
        bolck_img_object.scaleToWidth(block_img_height);
        bolck_img_object.set({
            top:player_y,
            left:player_x 
 
        });
        canvas.add(block_img_object);
    });
}