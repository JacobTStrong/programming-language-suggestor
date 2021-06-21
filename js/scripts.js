$(document).ready(function() {
  $("#submitForm").click(function(event) {
    const techStuff = parseInt($("input:radio[name=techStuff]:checked").val());
    const seasons = parseInt($("input:radio[name=seasons]:checked").val());
    const hobbies = parseInt($("input:radio[name=hobbies]:checked").val());
    const hogwarts = parseInt($("input:radio[name=hogwarts]:checked").val());
    const getaway = parseInt($("input:radio[name=getaway]:checked").val());
    const total = (techStuff + seasons + hobbies + hogwarts + getaway);

    if (total <=10) {
    $('#jScript').show();
    } else if (total >=14) {
      $('#python').show();
    } else {
      $('#swift').show();
    }
    event.preventDefault();
  });
});

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
    $(".button#submitForm").fadeToggle();
  });

  $(".button#noName").click(function() {
    $("#anonymous").fadeToggle();
    $("#nameBox").fadeToggle();
  });

  $(".button#submitForm").click(function() {
    $("#suggestorForm").fadeToggle();
    $(".button#refreshQuiz").fadeToggle();
  });

  $(".button#refreshQuiz").click(function() {
    location.reload()
  });

});
