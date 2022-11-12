var canvas=new fabric.Canvas('myCanvas');
var player_obj="";
var player_x=15;
var player_y=20;
var gl_block="";
var gl_block_width=30;
var gl_block_height=30;

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
       player_obj=Img;
       player_obj.scaleToWidth(150);
       player_obj.scaleToHeight(140); 
       player_obj.set({
        top:player_y,left:player_x
       });
       canvas.add(player_obj);
    });
    
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
       gl_block=Img;
       gl_block.scaleToWidth(gl_block_width);
       gl_block.scaleToHeight(gl_block_height); 
       gl_block.set({
        top:player_y,left:player_x
       });
       canvas.add(gl_block);
    });
    
}
window.addEventListener("keydown",my_keyDown);
function my_keyDown(e){
    keyPressed=e.keyCode;
    if (keyPressed=="38"){
        up();
        console.log("up");
    }
    if (keyPressed=="40"){
        down();
    }
    if (keyPressed=="37"){
        left();
    }
    if (keyPressed=="39"){
        right();
    }
    if (keyPressed=="84"){
        new_image("trunk.jpg");
    }
    if (keyPressed=="68"){
        new_image("dark_green.png");
    }
    if (keyPressed=="76"){
        new_image("light_green.png");
    }
    if (keyPressed=="71"){
        new_image("ground.png");
    }
    if (keyPressed=="87"){
        new_image("wall.jpg");
    }
    if (keyPressed=="89"){
        new_image("yellow_wall.png");
    }
    if (keyPressed=="82"){
        new_image("roof.jpg");
    }
    if (keyPressed=="67"){
        new_image("cloud.jpg");
    }
    if (keyPressed=="85"){
        new_image("unique.png");
    }
    if (keyPressed=="80" && e.shiftKey==true){
        gl_block_width+=10;
        gl_block_height+=10;
        document.getElementById("current_width").innerHTML=gl_block_width;
        document.getElementById("current_height").innerHTML=gl_block_height;
    }
    if (keyPressed=="77" && e.shiftKey==true){
        gl_block_width-=10;
        gl_block_height-=10;
        document.getElementById("current_width").innerHTML=gl_block_width;
        document.getElementById("current_height").innerHTML=gl_block_height;
    }
        
}
function up(){
    if (player_y>=0){
        player_y=player_y-gl_block_height;
        canvas.remove(player_obj);
        player_update();
    }
}
function down(){
    if (player_y<=450){
        player_y=player_y+gl_block_height;
        canvas.remove(player_obj);
        player_update();
    }
}
function left(){
    if (player_x>=0){
        player_x=player_x-gl_block_width;
        canvas.remove(player_obj);
        player_update();
    }
}
function right(){
    if (player_x<=850){
        player_x=player_x+gl_block_width;
        canvas.remove(player_obj);
        player_update();
    }
}

