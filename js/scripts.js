$(document).ready(function() {
  $(".button#yesPlease").click(function() {
    $("#intro").fadeToggle();
		$("#setName").fadeToggle();
  });

  $(".button#noThankYou").click(function() {
    $("#denyGreg").fadeToggle();
  });

  $(".button#name").click(function() {
    const inputtedName = prompt("What is your name?");
  });

  $(".button#noName").click(function() {
    $("#setName").fadeToggle();
    $("#devDialog").fadeToggle();
  });

  $(".button#continueOne").click(function() {
    $("#devDialog").fadeToggle();
    $("#bDay").fadeToggle();
  });

  $(".button#continueTwo").click(function() {
    $("#bDay").fadeToggle();
    $("#beginQuiz").fadeToggle();
  });

  $(".button#continueThree").click(function() {
    $("#beginQuiz").fadeToggle();
    $("#suggestorForm").fadeToggle();
  });

  // const selectedName = $("#selectName").val();

  $(".button#noName").click(function() {
    $("#anonymous").fadeToggle();
    $("#nameBox").fadeToggle();
  });

  
});

