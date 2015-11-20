/*
 * js file for dgmd 20, project 3
 * November 20, 2015
 *
 * Kate de Bethune
 */

 $(document).ready(function() {
 	console.log("document ready")

 	/* Begin: click effect */ 
 	$('aside').click(function() {
 		console.log("aside was clicked.");

 		$('aside').css({
 			backgroundColor: "purple"
 		}).fadeOut(1000).fadeIn(2000);
	});
	/* End: click effect */
 	
	/* Begin: hover effect */
	$( "h2" ).hover(
	  function() {
	    $( this ).css({backgroundColor: "red"});
	  }, function() {
	    $( this ).css({backgroundColor: "green"});
	  }
	); 
	/* End hover effect */

	/* Begine: if else */
	if($("article p:nth-of-type(2)").attr('id') == 'suppliers'){
 
        $("article p:nth-of-type(2)").css({
        	backgroundColor: "pink"
        });
 
    } else {
 
        $("article p:nth-of-type(2)").css({
        	backgroundColor: "brown"
        });
 
    } 
    /* End: if else */
	
    /* Begin: filtering example */
	$("p:even").css({
		fontWeight: "bold"
	}); //filtering
	/* End: filtering example

	/* Begin: form examples */
	/* 1st form example & if else examples */
	$('#email').focusout(function(e) {
        var em = $('#email').val();
        /* credit for regex: http://www.jquerybyexample.net/2011/04/validate-email-address-using-jquery.html */
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        console.log(em);
        if ($.trim(em).length == 0) {
            $('#email + .error').html('Please enter your email address');	
            e.preventDefault();
        }
        if (em.match(filter)) {
        	 $('#email + .error').html(''); 
        	 e.preventDefault();
        }
        else {
        	$('#email + .error').html('Please enter a valid email address');
            e.preventDefault();
        }

    });
	/* second form example */
	/* blur on the comments field produces an alert and changed footer color */
	/* uses jquery contains function */
    $('#comments').blur(function(e) {
    	//var com = $('#comments').val();
    	if ($('#comments').val().contains("wild rice")) {
    		alert("I see you like wild rice!");
    		$('footer').css({
    			backgroundColor: "#ff69b4"
    		});
    	}
    });
    /* End: form examples */
	
	/* Begin: two additional effects */
	/* hover */
	$('img').hover(
		function() {
			$(this).css({border: "orange solid 10px"});
		}, function() {
			$(this).css({border: "none"});
		}
	);

	/* contains - will add an underline to p tags that contain the string 'wine'*/
	$("p:contains('wine')").css("text-decoration", "underline");
	/* End: two additional effects */
	
	/*************************/	
	/* Begin: Canvas effects */
	/*************************/
	
	/* Begin: Draw shapes simultaneously & Chaining */
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
		  fillStyle: '#589',
		  strokeStyle: '#000',
		  x: 200, y: 200,
		  radius: 50,
		  sides: 5,
		  rotate: 25
		});
	});
	/* End: Draw shapes simultaneously & Chaining */

	/* Begin: Clear canvas  */
	$('#clear').click(function(){
		$('#c1').clearCanvas();
	}); //end click-clear 
	/* End: Clear canvas  */

	
	/* Begin: Canvas + user interaction - select bass or treble clef for a stave of music*/
	/* stave canvas */
	$('#stave').drawLine
	({
	  strokeStyle: '#000',
	  strokeWidth: 2,
	  x1: 0, y1: 5,
	  x2: 400, y2: 5,
	  closed: true
	})
	.drawLine
	({
	  strokeStyle: '#000',
	  strokeWidth: 2,
	  x1: 0, y1: 15,
	  x2: 400, y2: 15,
	  closed: true
	})
	.drawLine
	({
	  strokeStyle: '#000',
	  strokeWidth: 2,
	  x1: 0, y1: 25,
	  x2: 400, y2: 25,
	  closed: true
	})
	.drawLine
	({
	  strokeStyle: '#000',
	  strokeWidth: 2,
	  x1: 0, y1: 35,
	  x2: 400, y2: 35,
	  closed: true
	})
	.drawLine
	({
	  strokeStyle: '#000',
	  strokeWidth: 2,
	  x1: 0, y1: 45,
	  x2: 400, y2: 45,
	  closed: true
	})
	.drawLine
	({
	  strokeStyle: '#000',
	  strokeWidth: 15,
	  x1: 400, y1: 5,
	  x2: 400, y2: 45,
	  closed: true
	});

	
	$("input:radio[name=clefRadioGroup]").click(function() {
	    var value = $(this).val();
	    alert(value);
	    if (value == "treble") {
		    	//alert("value is treble");
		    	$("#stave").removeLayer("bass").drawLayers();
		    	$('#stave').drawImage({
		    	layer: true,
		    	name: 'trb',
				source: 'treble.png',
				x: 30,
				y: 25
			})
		    .drawLine
		    ({
			  strokeStyle: '#000',
			  strokeWidth: 2,
			  x1: 0, y1: 5,
			  x2: 400, y2: 5,
			  closed: true
			})
			.drawLine
			({
			  strokeStyle: '#000',
			  strokeWidth: 2,
			  x1: 0, y1: 15,
			  x2: 400, y2: 15,
			  closed: true
			})
			.drawLine
			({
			  strokeStyle: '#000',
			  strokeWidth: 2,
			  x1: 0, y1: 25,
			  x2: 400, y2: 25,
			  closed: true
			})
			.drawLine
			({
			  strokeStyle: '#000',
			  strokeWidth: 2,
			  x1: 0, y1: 35,
			  x2: 400, y2: 35,
			  closed: true
			})
			.drawLine
			({
			  strokeStyle: '#000',
			  strokeWidth: 2,
			  x1: 0, y1: 45,
			  x2: 400, y2: 45,
			  closed: true
			})
			.drawLine
			({
			  strokeStyle: '#000',
			  strokeWidth: 15,
			  x1: 400, y1: 5,
			  x2: 400, y2: 45,
			  closed: true
			});
		}
	    else {
	    	//alert("value is bass");
	    		$("#stave").removeLayer("trb").drawLayers();
		    	$('#stave').drawImage({
		    	layer: true,
		    	name: 'bass',
				source: 'bass.png',
				Width: 32,
				Height: 45,
				x: 30,
				y: 25
			})
		     .drawLine
		    ({
			  strokeStyle: '#000',
			  strokeWidth: 2,
			  x1: 0, y1: 5,
			  x2: 400, y2: 5,
			  closed: true
			})
			.drawLine
			({
			  strokeStyle: '#000',
			  strokeWidth: 2,
			  x1: 0, y1: 15,
			  x2: 400, y2: 15,
			  closed: true
			})
			.drawLine
			({
			  strokeStyle: '#000',
			  strokeWidth: 2,
			  x1: 0, y1: 25,
			  x2: 400, y2: 25,
			  closed: true
			})
			.drawLine
			({
			  strokeStyle: '#000',
			  strokeWidth: 2,
			  x1: 0, y1: 35,
			  x2: 400, y2: 35,
			  closed: true
			})
			.drawLine
			({
			  strokeStyle: '#000',
			  strokeWidth: 2,
			  x1: 0, y1: 45,
			  x2: 400, y2: 45,
			  closed: true
			})
			.drawLine
			({
			  strokeStyle: '#000',
			  strokeWidth: 15,
			  x1: 400, y1: 5,
			  x2: 400, y2: 45,
			  closed: true
			});
	    }
	});
	/* End: Canvas + user interaction - select bass or treble clef for a stave of music*/

	/* Begin: pull an image into canvas 2 and overlay text - this is copies Jen's example too closely, but I left it in */
	$('#b2').click(function(e){
		var imgsrc = "http://lorempixel.com/300/300/"
		
		function cattext(){
			var l1 = $('#l1').val().toLowerCase();	
			
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
			
		} //end cattext


		/* create image and add text as a callback */
		$('#c2').drawImage({
			source: imgsrc,
			x: 100,
			y: 100,
			load: cattext
		});
		
		e.preventDefault();
	}); 
	/* End: pull an image into canvas 2 and overlay text */
    /**********************/
	/* End Canvas effects */
	/**********************/

 })