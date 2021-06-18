$(document).ready(function() {
  $(".btn#yes").click(function() {
    $(".inputName").show();
  });

  $(".btn#giveName").click(function() {
    const unserName = prompt("What is your name?");
  });
});