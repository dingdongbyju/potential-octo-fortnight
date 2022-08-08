canvas = document.getElementById(myCanvas);
ctx = canvas.getConext("2d");

var car_height = 75;
var car_width = 100;

background_image = "parkingLot.jpg";
car_image = "car2.png";

car_x = 5;
car_y = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground();
	background_imgTag.src = background_image;

	car_imgTag = new Image();
	car_imgTag.onload = uploadCar();
	car_imgTag.src = car_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadCar() {
	ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height)
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
	if(car_y >= 0) {
		car_y = car_y - 10;
		uploadBackground();
		uploadCar();
	}
}

function down()
{
	if(car_y <= 500) {
		car_y = car_y + 10;
		uploadBackground();
		uploadCar();
	}
}

function left()
{
	if(car_x >= 0) {
		car_x = car_x - 10;
		uploadBackground();
		uploadCar();
	}
}

function right()
{
	if(car_x <= 700) {
		car_x = car_x - 10;
		uploadBackground();
		uploadCar();
	}
}
