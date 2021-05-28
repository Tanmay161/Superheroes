canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
player_object = "";
function player_Update(){
    fabric.Image.fromURL("player.png",function(img){
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top:player_y,left:player_x});
        canvas.add(player_object);
    });
}