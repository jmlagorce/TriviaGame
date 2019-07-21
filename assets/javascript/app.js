var correct = 0;
var wrong = 0;
var counter = 5;

$(document).ready( function (){

var userChoice = [];
var answers = ["true", "false", "true", "false"];


var number = 20;









$("#start").on("click", function(event){
    event.preventDefault();
    $("#qForm").show();
    $("#results").hide();
    $("#start").hide();

    function decrement() {
        var val = $('input[name=Q1]:checked').val();
        var val2 = $('input[name=Q2]:checked').val();
        var val3 = $('input[name=Q3]:checked').val();
        var val4 = $('input[name=Q4]:checked').val();
        number--;
    
        //  Show the number in the #show-number tag.
        $("#timer").text("Time left: " + number);
    
    
        //  Once number hits zero...
        if (number === 0) {
    
          //  ...run the stop function.
          stop();
    
          //  Alert the user that time is up.
          $("#timer").text("Times up!");

          $("#results").show();
          $("#qForm").hide();

          userChoice.push(val, val2, val3, val4);

          if (userChoice[0] === answers[0]){
            correct++;
         
        } else {
            wrong++;
        }
     
        if (userChoice[1] === answers[1]){
            correct++;
     
        }else {
            wrong++;
        }
        if (userChoice[2] === answers[2]){
         correct++;
     
         }else {
         wrong++;
         }
         if (userChoice[3] === answers[3]){
             correct++;
      
         }else {
             wrong++;
         }
     
     
        $("#correct").text("Correct: " + correct);
        $("#incorrect").text("Incorrect: " + wrong);

         
          
        }
      }

      function run() {
         intervalId = setInterval(decrement, 1000);
      }

      function stop() {

      
        clearInterval(intervalId);
      }

      run();



    })









$("#submitBtn").on("click", function(event2){
    event2.preventDefault();
    $("#qForm").hide();
    $("#results").show();
    $("#start").hide();
    stop();


   
    var val = $('input[name=Q1]:checked').val();
    var val2 = $('input[name=Q2]:checked').val();
    var val3 = $('input[name=Q3]:checked').val();
    var val4 = $('input[name=Q4]:checked').val();

  userChoice.push(val, val2, val3, val4);
    

   if (userChoice[0] === answers[0]){
       correct++;
    
   } else {
       wrong++;
   }

   if (userChoice[1] === answers[1]){
       correct++;

   }else {
       wrong++;
   }
   if (userChoice[2] === answers[2]){
    correct++;

    }else {
    wrong++;
    }
    if (userChoice[3] === answers[3]){
        correct++;
 
    }else {
        wrong++;
    }


   $("#correct").text("Correct: " + correct);
   $("#incorrect").text("Incorrect: " + wrong);
    

   
    
})


$("#retryBtn").on("click", function(event3){
    event3.preventDefault();
    
    wrong = 0;
    correct = 0;
    $("#qForm").show();
    $("#results").hide();
    $("#start").hide();
    userChoice = [];
    number = 30;
    $("#timer").text("Time left: " + number);
    decrement();
    run();

})



$("#results").hide();
$("#qForm").hide();




}) 
//dont code under this line//