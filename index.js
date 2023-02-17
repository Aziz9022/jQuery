$(document).ready(function () {
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

   $("#btn5").click(function (e) {
      $("h1").slideUp();
   });

   $("#btn6").click(function (e) {
      $("h1").slideDown();
   });

   $("#btn7").click(function (e) {
      $("h1").slideToggle();;
   });

});