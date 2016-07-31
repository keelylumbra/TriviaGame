
$(document).ready(function (){



var trivia = 
{
     "question1": "Good, its settled. So you can go shave your ____ now.",
     "question2": "It just burns up all your _____.",
     "question3": "You smell like a baby ______",
     "question4": "I was half a _____ when I met him",
    "answers": {
         "answers1": ["ass","mom","face","back"],
         "answers2": ["pubes","carbs","porn","leaves"],
         "answers3": ["prostitute","diaper","butt","bottle"],
         "answers4": ["hot dog","virgin","man","slut"]
     },

   }


correct = 0
wrong = 0



 $( ".gif" ).hide('gif');
//when start button clicked

    $('.btn').click(function reset() {


        $( ".container" ).hide('container');

//q1

        $(".qanda1").css("text-align", "center",
    "width", "500px").append("<br><br<br>"+ trivia.question1+ "<br>");


        for (var i = 0; i < 4; i++) {
        if (i < 4)
        {
            $('.qanda1').append($('<input type="radio" name="q1" id="#q1" value="' + i + '" checked>' + trivia.answers.answers1[i] + '</input>'));
        };

    }





   
    


//q2
    $(".qanda2").css("text-align", "center",
    "width", "500px").append("<br><br<br><br>"+ trivia.question2+ "<br>");


        for (var i = 0; i < 4; i++) {
        if (i < 4)
        {
            $('.qanda2').append($('<input type="radio" name="q2" value="' + i + '" checked>' + trivia.answers.answers2[i] + '</input>'));
        }

    }

    



    



    //q3

        $(".qanda3").css("text-align", "center",
    "width", "500px").append("<br><br<br><br>"+ trivia.question3+ "<br>");


        for (var i = 0; i < 4; i++) {
        if (i < 4)
        {
            $('.qanda3').append($('<input type="radio" name="q3" value="' + i + '" checked>' + trivia.answers.answers3[i] + '</input>'));
        };
}




       
    


//q4
    $(".qanda4").css("text-align", "center",
    "width", "500px").append("<br><br<br><br>"+ trivia.question4+ "<br>");


        for (var i = 0; i < 4; i++) {
        if (i < 4)
        {
            $('.qanda4').append($('<input type="radio" name="q4" value="' + i + '" checked>' + trivia.answers.answers4[i] + '</input>'));
        };
    }




 







})

})



    











//counter function

  $('.btn').click(function(){

    var counter = 20;
    setInterval(function() {
          
                counter--;

  
        if (counter >= 0) {
            $(".timer").html('<h2>CLOCKS TICKING: </h2>' + counter).css("text-align", "center",
    "width", "500px");

}

        if (counter === 0){


 

if ($('input[name="q1"]:checked', '.qanda1').val() == 3) { correct++;
}else { wrong++;
}

if ($('input[name="q2"]:checked', '.qanda2').val() == 1) { correct++;
}else { wrong++;
}

if ($('input[name="q3"]:checked', '.qanda3').val() == 0) { correct++;
}else { wrong++;
}

if ($('input[name="q4"]:checked', '.qanda4').val() == 1) { correct++;
}else { wrong++;
}

  $('.gif').on('click', function(){
   window.location.href=window.location.href
})

   function clearOut (){
    $(".qanda1").html("<br><Br><Br>Correct: " + correct + "<br><Br>Wrong: " + wrong +"<br><Br><br>");
    $(".qanda2").empty();
    $(".qanda3").empty();
    $(".qanda4").empty();
    $(".gif").show();
    
}

    clearOut ();

  
            

        }
        }, 1000);
})



    



        
