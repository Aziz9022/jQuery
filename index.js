$(document).ready(function () {

   // Fade Functions

   $("#btn1").click(function (e) {
      $("h1").fadeOut(1000);
   });
  
   $("#btn2").click(function (e) {
      $("h1").fadeIn();
   });

   $("#btn3").click(function (e) {
      $("h1").fadeToggle();
   });

   $("#btn4").click(function (e) {
      $("h1").fadeTo(1000, 0.5);
   });

   // Slide Function

   $("#btn5").click(function (e) {
      $("h1").slideUp(1000,function () {  
         alert('done');
      });
   });

   $("#btn6").click(function (e) {
      $("h1").slideDown();
   });

   $("#btn7").click(function (e) {
      $("h1").slideToggle();
   });

   // Animate Function -> animate({params} , speed , callback)

   $("#btn8").click(function (e) {
      $("h1").animate({width:"+=300" , height: "+=300" , left : "200px"},300, function () {  
         $("h1").animate(
            {width:"300px" , height: "300px" , left:"0", borderRadius : "10px"},300
         );
      });
   });


   $("#btn9").click(function (e) {
      var x = $("#inp1").val();
      // console.log("value is " + x);
      $("h1").text("value is " + x);
   });

});