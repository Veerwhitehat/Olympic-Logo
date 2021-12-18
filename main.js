var canavas= document.getElementById("myCanvas");
var pen= canavas.getContext('2d')
pen.beginPath();
pen.lineWidth="2";
pen.strokestyle="black"
pen.rect(60,200,501,200);
pen.stroke();
//pen down
pen.beginPath();
//pencolour
pen.strokeStyle="blue"
//pen width
pen.lineWidth= 3
//tell the shape to draw
pen.arc(200,300,40,0,360);
//draw the shape
pen.stroke();
//pen down
pen.beginPath();
//pencolour
pen.strokeStyle="yellow"
//pen width
pen.lineWidth= 3
//tell the shape to draw
pen.arc(250,330,40,0,360);
//draw the shape
pen.stroke();
//pen down
pen.beginPath();
//pencolour
pen.strokeStyle="black"
//pen width
pen.lineWidth= 3
//tell the shape to draw
pen.arc(300,300,40,0,360);
//draw the shape
pen.stroke();
//pen down
pen.beginPath();
//pencolour
pen.strokeStyle="green"
//pen width
pen.lineWidth= 3
//tell the shape to draw
pen.arc(350,330,40,0,360);
//draw the shape
pen.stroke();
//pendown
pen.beginPath();
//pencolour
pen.strokeStyle="red"
//pen width
pen.lineWidth= 3
//tell the shape to draw
pen.arc(400,300,40,0,360);
//draw the shape
pen.stroke();
//pen down
