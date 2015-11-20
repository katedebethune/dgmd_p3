//canvas effects
$(document).ready(function() {	
	console.log("document ready");

	$('#b1').click(function(){
		$('#c1').drawArc({
		  strokeStyle: '#dde',
		  strokeWidth: 5,
		  x: 50, y: 50,
		  radius: 25,
		  fillStyle: '#a00'
		})
		.drawEllipse({
		  strokeStyle: '#36c',
		  strokeWidth: 4,
		  x: 150, y: 125,
		  width: 200, height: 100
		})
		.drawPolygon({
		  /*layer: true,
		  name: 'poly',*/
		  fillStyle: '#589',
		  strokeStyle: '#000',
		  x: 200, y: 200,
		  radius: 50,
		  sides: 5,
		  rotate: 25
		});
	}); //end click


$('#clear').click(function(){
	$('#c1').clearCanvas();
}); //end click-clear 

$('#b2').click(function(){
		//var imgsrc = $('#image').val();
		var imgsrc = "http://lorempixel.com/300/300/"
		
		
		function cattext(){
			var l1 = $('#l1').val().toUpperCase();	
		
			console.log($('#l1').val().toUpperCase());
			
			$('#c2').drawText({
					fillStyle: '#fff',
					strokeStyle: '#fff',
					strokeWidth: 3,
					x: 100,
					y: 100,
					fontSize: '1.5em',
					fontFamily: 'Arial, sans-serif',
					text: l1
				}); 
			
		} //end cattext */

		//make the magic happen and write to web page!
		$('#c2').drawImage({
			source: imgsrc,
			//source: 'http://lorempixel.com/180/300/',
			x: 150,
			y: 150,
			load: cattext
		});
	});//end click

	/* stave canvas */
	$('#stave').drawLine({
	  strokeStyle: '#000',
	  strokeWidth: 5,
	  x1: 0, y1: 0,
	  x2: 300, y2: 0,
	  x3: 20, y3: 300,
	  x4: 30, y4: 300
	});
});