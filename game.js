
// var counter = 0
// $(document).keypress(function(action){

// 		if ((action.which == 32) && (counter < 5))  {
// 			var playerOne = $("#playerOne")
// 			$("#playerOne").remove()
// 			var $newBlock = $(".block").eq(counter + 1)
// 			$newBlock.append(playerOne)
// 			counter = (counter + 1)
// 		} else
	
	
// })

    
alert("Get ready because there is a Kitty killing everyone in space!!! You need to fly your Space Ship really fast to avoid getting eaten!! Are you ready??");

var playerOneName = prompt("What is Player Ones Name? To move your ship press the SPACEBAR key repeatedly as fast as you can!!")
var playerTwoName = prompt("What is Player Twos Name? To move your ship press the ENTER key repeatedly as fast as you can!!")
var counterOne = 0;
var counterTwo = 0;
var timeOne;
var timeId;
var numOfMoves = 30;
var stopGame = false
var stopTimePost = false
var clockTimer = true

$(document).keypress(function(e){
  		
  	if ((e.charCode == 32) && (counterOne < numOfMoves) && (e.charCode != 13)) {   
		$('.rocketShipOne').animate({"left": "+=20px"}, "fast") 
		counterOne = (counterOne + 1)
	}	else if ((counterOne === numOfMoves) && (stopGame === false)) {
		$(".winner").append(playerOneName + " Kicked Some Butt!!!")
		stopGame = true
		$(".text").remove()
		$(".rocketShipTwo").animate(  
            {  
                transform: 1440,  
                'width': '5px',  
                'height': '2px'  
            },  
            {  
                duration: 700,  
                step: function(now, fx) {  
                    if (fx.prop == "transform") {  
                        if (now > 360) {  // rotate and fade in when image already rotated 360deg
                            $(this).css({  
                                '-webkit-transform': 'rotate(' + now + 'deg)',  //Safari 3.1+, Chrome
                                '-moz-transform': 'rotate(' + now + 'deg)',     //Firefox 3.5-15
                                '-ms-transform': 'rotate(' + now + 'deg)',      //IE9+
                                '-o-transform': 'rotate(' + now + 'deg)',       //Opera 10.5-12.00
                                'transform': 'rotate(' + now + 'deg)',          //Firefox 16+, Opera 12.50+
                                'opacity': now / 1440  
                            })  
                        }  
                    }  
                }  
            }); 

	}

})

$(document).keypress(function(r){
  	if ((r.charCode == 13) && (counterTwo < numOfMoves) && (r.charCode != 32)) {   
		$('.rocketShipTwo').animate({"left": "+=20px"}, "fast") 
		counterTwo = (counterTwo + 1)		
	}	else if ((counterTwo === numOfMoves) && (stopGame === false)){
		$(".winner").append(playerTwoName + " Kicked Some Butt!!!")
		stopGame = true
		$(".text").remove()
			$(".rocketShipOne").animate(  
            {  
                transform: 1440,  
                'width': '5px',  
                'height': '2px'  
            },  
            {  
                duration: 700,  
                step: function(now, fx) {  
                    if (fx.prop == "transform") {  
                        if (now > 360) {  // rotate and fade in when image already rotated 360deg
                            $(this).css({  
                                '-webkit-transform': 'rotate(' + now + 'deg)',  //Safari 3.1+, Chrome
                                '-moz-transform': 'rotate(' + now + 'deg)',     //Firefox 3.5-15
                                '-ms-transform': 'rotate(' + now + 'deg)',      //IE9+
                                '-o-transform': 'rotate(' + now + 'deg)',       //Opera 10.5-12.00
                                'transform': 'rotate(' + now + 'deg)',          //Firefox 16+, Opera 12.50+
                                'opacity': now / 1440  
                            })  
                        }  
                    }  
                }  
            }); 
	}
})


$(document).keypress(function(z){
	if (((z.charCode == 32) || (z.charCode == 13)) && ((counterOne === 1) || (counterTwo === 1))) {
		timeOne= (new Date ($.now()))
		
		timerId = window.setInterval(function(){
		var $clock = $("#total-time").text( ( ($.now()) - timeOne )/1000 )
		})
	} else if (((counterOne === numOfMoves) || (counterTwo === numOfMoves)) && ((clockTimer === true) && (stopTimePost === false))) {
		stopTimePost = true
		timeTwo= ($.now())
		$("#total-time").text((timeTwo - timeOne)/1000)
		$('.winner').after("<div class='timeColor'> The Winning Time Is " + ((timeTwo - timeOne)/1000) + " Seconds </div>")
		clockTimer = false
		
	}	
})




	
		window.setInterval(function(){
		  
		  $('.planet1').animate({"right": "+=10px"}, 'slow')
		}, 20)

		window.setInterval(function(){
		  
		  $('.planet2').animate({"right": "+=10px"}, 'fast')
		}, 20)
		
		window.setInterval(function(){
		 
		  $('.cat').animate({"left": "+=5px"}, 'fast')
		}, 20)


// if(counterOne === numOfMoves) {
 
//     $(".rocketShipTwo")  
//             .animate(  
//             {  
//                 transform: 1440,  
//                 'width': '50px',  
//                 'height': '60px'  
//             },  
//             {  
//                 duration: 700,  
//                 step: function(now, fx) {  
//                     if (fx.prop == "transform") {  
//                         if (now > 360) {  // rotate and fade in when image already rotated 360deg
//                             $(this).css({  
//                                 '-webkit-transform': 'rotate(' + now + 'deg)',  //Safari 3.1+, Chrome
//                                 '-moz-transform': 'rotate(' + now + 'deg)',     //Firefox 3.5-15
//                                 '-ms-transform': 'rotate(' + now + 'deg)',      //IE9+
//                                 '-o-transform': 'rotate(' + now + 'deg)',       //Opera 10.5-12.00
//                                 'transform': 'rotate(' + now + 'deg)',          //Firefox 16+, Opera 12.50+
//                                 'opacity': now / 1440  
//                             })  
//                         }  
//                     }  
//                 }  
//             });  
 
// } else if ( counterTwo === numOfMoves) {
	 
//     $(".rocketShipOne")  
//             .animate(  
//             {  
//                 transform: 1440,  
//                 'width': '50px',  
//                 'height': '60px'  
//             },  
//             {  
//                 duration: 700,  
//                 step: function(now, fx) {  
//                     if (fx.prop == "transform") {  
//                         if (now > 360) {  // rotate and fade in when image already rotated 360deg
//                             $(this).css({  
//                                 '-webkit-transform': 'rotate(' + now + 'deg)',  //Safari 3.1+, Chrome
//                                 '-moz-transform': 'rotate(' + now + 'deg)',     //Firefox 3.5-15
//                                 '-ms-transform': 'rotate(' + now + 'deg)',      //IE9+
//                                 '-o-transform': 'rotate(' + now + 'deg)',       //Opera 10.5-12.00
//                                 'transform': 'rotate(' + now + 'deg)',          //Firefox 16+, Opera 12.50+
//                                 'opacity': now / 1440  
//                             })  
//                         }  
//                     }  
//                 }  
//             });  
// (jQuery); 
// }






// } else if ((counter%2 !== 0) && (action.which == 32)){
// 			timeTwo= ($.now())
// 			counter = counter + 1
// 			$("#total-time").text((timeTwo - timeOne)/1000)
// 			$('h2').after("<li>"+((timeTwo - timeOne)/1000)+"</li>")
// 			clearInterval(timerId)
// 		}

//this works
// $(document).keypress(function(z){
// 	if ((z.charCode == 32) || (z.charCode == 13)) {
// 		timeOne= (new Date ($.now()))
// 		alert(timeOne)
// 		timerId = window.setInterval(function(){
// 		$("#total-time").text( ( ($.now()) - timeOne )/1000 )
// 		})
// 	}
// })


			

// window.setInterval(function(){
//   console.log('here')
//   $('.cloud').animate({"right": "+=20px"}, 'fast')
// }, 20)


// $("span").on("click",function handleClick(event) {
// var text = $(this).text();
//   $("ul").append("<li>"+text+"</li>");
// });