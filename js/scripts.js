$(document).ready(function() {
  $(".button#yesPlease").click(function() {
    $("#intro").fadeToggle();
		$("#setName").fadeToggle();
  });

  $(".button#noThankYou").click(function() {
    $("#denyGreg").fadeToggle();
  });

  $(".button#provideName").click(function() {
    $("#submitName").fadeToggle();
  });

  $(".button#submitName").click(function() {
    $("#setName").fadeToggle();
    $("#nameProvided").fadeToggle();
  });

  $(".button#continue").click(function() {
    $("#nameProvided").fadeToggle();
    $("#bDay").fadeToggle();
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

  $(".button#noName").click(function() {
    $("#anonymous").fadeToggle();
    $("#nameBox").fadeToggle();
  });

  
});

