//Create a reference for canvas 
can1= document.getElementById('myCanvas');
ctx = can1.getContext('2d');
//Give specific height and width to the car image
car_width=75;
car_height=100;
background_image = "parkingLot.jpg";
car_image = "car2.png";
car_x=5;
car_y=225;
//Set initial position for a car image.

function add() {
	car_tag= new Image(); 
    car_tag.onload= uploadcar;
    car_tag.src = car_image;
    background_tag= new Image(); 
    background_tag.onload= uploadbackground;
    background_tag.src = background_image;
}

function uploadbackground() {
	ctx.drawImage(background_tag, 0, 0,can1.width,can1.height);

}

function uploadcar() {
	ctx.drawImage(car_tag,car_x,car_y,car_width,car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y>=0){
        car_y=car_y-10;
        console.log("up arrow pressed");
        uploadbackground();
        uploadcar();
    }
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
