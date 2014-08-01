
function doFirst(){
	//39 - Working with Text and Shadows
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d'); //without var means its a global variable
	
	canvas.shadowOffsetX=4;
	canvas.shadowOffsetY=4;
	canvas.shadowBlur=6;
	canvas.shadowColor='rgba(0,0,255,.5)';
	
	canvas.font="bold 36px Tahoma";
	canvas.textAlign="end";
	//canvas.strokeText("omgwtfbbq?", 300,100);
	canvas.fillText("omgwtfbbq?", 300,100);
	
	//Sample 8 point Star code
	// eightPointStart(200,100,70,20,8);
	
	// var x = document.getElementById('canvas');
	// canvas = x.getContext('2d'); //without var means its a global variable
	// canvas.beginPath(); 
	// canvas.moveTo(20,20); 
	// canvas.lineTo(60,50);	
	// canvas.lineTo(70,0); 
	// canvas.lineTo(80,50); 
	// canvas.lineTo(120,20); 
	// canvas.lineTo(100,60); 
	// canvas.lineTo(150,70); 
	// canvas.lineTo(100,85); 
	// canvas.lineTo(130,120); 
	// canvas.lineTo(80,100); 
	// canvas.lineTo(70,150); 
	// canvas.lineTo(60,100); 
	// canvas.lineTo(10,120); 
	// canvas.lineTo(40,85); 
	// canvas.lineTo(0,75); 
	// canvas.lineTo(42,63);
	// canvas.closePath();	
	// canvas.stroke();
	
	
	// 38 - Making Sweet Custom Shapes!
	// var x = document.getElementById('canvas');
	// canvas = x.getContext('2d'); //without var means its a global variable
	// canvas.beginPath();
	// canvas.moveTo(50,50);
	// canvas.lineTo(70,250);
	// canvas.lineTo(300,200);
	// canvas.closePath();
	// canvas.stroke();
	
	// 37 - Gradients on the Canvas
	// var x = document.getElementById('canvas');
	// canvas = x.getContext('2d'); //without var means its a global variable
	// var g = canvas.createLinearGradient(0,0,100,100);
	// g.addColorStop(.0,"blue");
	// g.addColorStop(.5,"green");
	// g.addColorStop(1,"red");
	// canvas.fillStyle=g;
	// canvas.fillRect(0,0,100,100);
	
	// 36 - Drawing Shapes on the Canvas
	// var x = document.getElementById('canvas');
	// canvas = x.getContext('2d'); //without var means its a global variable
	// canvas.fillStyle="blue";
	// canvas.strokeStyle="red";
	// canvas.strokeRect(10,10,100,100);
	// canvas.fillRect(10,120,100,100);
	// canvas.clearRect(20,130,45,65);
	
}

window.onload=doFirst;

//Sample 8 point Star code
function eightPointStart(x,y,R,r,n) {
   /* ctx.moveTo(x+R,y);*/
    var canvas = document.getElementById('canvas');
    var result = document.getElementById('result');
    // if(canvas.getContext('2d')){
        var ctx = canvas.getContext('2d');
    for(var i = 0;i < n ;i++) {
        var X1 = x+R*Math.cos(i*Math.PI/(n/2));
        var Y1 = y+R*Math.sin(i*Math.PI/(n/2));
        var k = 2*i + 1;
        var x1 = x+r*Math.cos(k*Math.PI/n);
        var y1 = y+r*Math.sin(k*Math.PI/n);
        var z = i+1;
        var X2 = x+R*Math.cos(z*Math.PI/(n/2));
        var Y2 = y+R*Math.sin(z*Math.PI/(n/2));
        ctx.moveTo(X1,Y1);
        ctx.lineTo(x1,y1);
        ctx.lineTo(X2,Y2);
        ctx.stroke();
        
        };
       
    // }
}

