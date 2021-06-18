$(document).ready(function() {
  $(".button#yesPlease").click(function() {
    $("#intro").fadeToggle();
		$("#inputName").fadeToggle();
  });

  $(".button#noThankYou").click(function() {
    $("#denyGreg").fadeToggle();
  });

  $(".button#giveName").click(function() {
    const userName = prompt("What is your name?");
  });

  $(".button#noName").click(function() {
    $("#anonymous").fadeToggle();
    $(".nameBox").fadeToggle();
  });

});