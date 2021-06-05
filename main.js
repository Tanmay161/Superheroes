var canvas = new fabric.Canvas('myCanvas');
block_image_height = 30;
block_image_width = 30;
player_x = 0;
player_y = 0;
var block_image_object = ""; 
var player_object = "";
function player_update() { 
    fabric.Image.fromURL("player.png", function(Img) { 
        player_object = Img; 
        player_object.scaleToWidth(150); 
        player_object.scaleToHeight(140); 
        player_object.set({top:player_y,left:player_x}); 
        canvas.add(player_object); 
    
    }); }
 function new_image(get_image) { 
         fabric.Image.fromURL(get_image, function(Img) { 
             block_image_object = Img; 
             block_image_object.scaleToWidth(block_image_width); 
             block_image_object.scaleToHeight(block_image_height); 
             block_image_object.set({top:player_y,left:player_x}); 
             canvas.add(block_image_object); 
}); }

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80') { 
        console.log("p and shift pressed together"); 
        block_image_width = block_image_width + 10; 
        block_image_height = block_image_height + 10; 
        document.getElementById("current_Width").innerHTML = block_image_width; 
        document.getElementById("current_Height").innerHTML = block_image_height; 
    } 
    if(e.shiftKey == true && keyPressed == '77') { 
        console.log("m and shift pressed together"); 
        block_image_width = block_image_width - 10; 
        block_image_height = block_image_height - 10; 
        document.getElementById("current_Width").innerHTML = block_image_width; 
        document.getElementById("current_Height").innerHTML = block_image_height; 
    }
    if(keyPressed == "70"){
        console.log("f key pressed");
        new_image('hulk_face.png');
    }
    if(keyPressed == "66"){
        console.log("b key pressed");
        new_image('ironman_body.png');
    }
    if(keyPressed == "76"){
        console.log("i key pressed");
        new_image('spiderman_legs.png');
    }
    if(keyPressed == "82"){
        console.log("r key pressed");
        new_image('thor_right_hand.png');
    }
    if(keyPressed == "72"){
        console.log("h key pressed")
        new_image('captain_america_left_hand.png');
    }
    if(keyPressed == "38"){
        console.log("up arrow pressed");
        up();
    }
    if(keyPressed == "40"){
        console.log("down arrow pressed");
        down();
    }
    if(keyPressed == "37"){
        console.log("left arrow pressed");
        left();
    }
    if(keyPressed == "39"){
        console.log("right arrow pressed");
        right();
    }
}