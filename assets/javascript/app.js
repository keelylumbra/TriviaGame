
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

//when start button clicked

    $('.btn').on('click', function(){


        $( ".container" ).empty().removeClass('container');

//q1

        $(".qanda1").css("text-align", "center",
    "width", "500px").append("<br><br<br>"+ trivia.question1+ "<br>");


        for (var i = 0; i < 4; i++) {
        if (i < 4)
        {
            $('.qanda1').append($('<input type="radio" name="q1" value="' + i + '" checked>' + trivia.answers.answers1[i] + '</input>'));
        };

    }



if ($('input:radio[name="q1"]') == 'back') {
    

             correct++;
          
        }

        else  {
        wrong++;
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

    


  if ($('input:radio[name="q2"]') == 'carbs') {

             correct++;
          
        }


        else  {
        wrong++;
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


if ($('input:radio[name="q3"]') == 'prostitute') {

             correct++;
          
        }

        else  {
        wrong++;
     };


       
    


//q4
    $(".qanda4").css("text-align", "center",
    "width", "500px").append("<br><br<br><br>"+ trivia.question4+ "<br>");


        for (var i = 0; i < 4; i++) {
        if (i < 4)
        {
            $('.qanda4').append($('<input type="radio" name="q4" value="' + i + '" checked>' + trivia.answers.answers4[i] + '</input>'));
        };
    }


if ($('input:radio[name="q4"]') == 'virgin' ){

             correct++;
          
        }

        else  {
        wrong++;
     }
    


 








})

})



    











//counter function
  $('.btn').click(function(){

    var counter = 30;
    setInterval(function() {
          
                counter--;

  
        if (counter >= 0) {
            $(".timer").html('<h2>CLOCKS TICKING: </h2>' + counter).css("text-align", "center",
    "width", "500px");

}

        if (counter === 0){


    function clearOut (){
    $(".qanda1").html("<br><Br><Br>Correct: " + correct + "<br><Br>Wrong: " + wrong +"<br><Br><br><img src='http://imgfave-herokuapp-com.global.ssl.fastly.net/image_cache/1405459469450934_animate.gif'</img>");
    $(".qanda2").empty();
    $(".qanda3").empty();
    $(".qanda4").empty();
}

    clearOut ();
            

        }
        }, 1000);
})

        
