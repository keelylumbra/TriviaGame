
$(document).ready(function (){





	$('.btn').click(function() {
    	$( ".container" ).empty();



    	var counter = 30;
		setInterval(function() {
    		counter--;
    	if (counter >= 0) {
    		$(".container").html("CLOCKS TICKING: " + counter);
    }

    	if (counter === 0){
    		alert('GET IN LOSER, WERE GOING SHOPPING');
    		clearInterval(counter);
    	}
		}, 1000);

		

		setInterval ();





	})

})

