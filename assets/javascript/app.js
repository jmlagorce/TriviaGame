var correct = 0;
var wrong = 0;
var counter = 5;

$(document).ready( function (){

var userChoice = [];
var answers = ["true", "false"];








$("#start").on("click", function(event){
    event.preventDefault();
    $("#qForm").show();
    $("#results").hide();
    $("#start").hide();


})




$("#submitBtn").on("click", function(event){
    event.preventDefault();
    $("#qForm").hide();
    $("#results").show();
    $("#start").hide();


   
    var val = $('input[name=Q1]:checked').val();
    var val2 = $('input[name=Q2]:checked').val();

  userChoice.push(val, val2);
    console.log(userChoice);

   if (userChoice[0] === answers[0]){
       correct++;
    console.log("hello");
   } else {
       wrong++;
   }

   if (userChoice[1] === answers[1]){
       correct++;

   }else {
       wrong++;
   }

   $("#correct").text("Correct: " + correct);
   $("#incorrect").text("Incorrect: " + wrong);
    

   
    
})
$("#results").hide();
$("#qForm").hide();




}) 
//dont code under this line//