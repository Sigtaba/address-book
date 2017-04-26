$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var firstnameInput = $("input#firstname").val();
    var lastnameInput = $("input#lastname").val();
    var streetaddressInput = $("input#streetaddress").val();
    var cityInput = $("input#city").val();
    var state = $("#state").val();
    var zipcodeInput = $("input#zipcode").val();
    var cellInput = $("input#cell").val();
    var workInput = $("input#work").val();
    var emailInput = $("input#email").val();
    var websiteInput = $("input#website").val();

    $("#output").append("<li>" + firstnameInput + "</li><li>" + lastnameInput + "</li><li>" + streetaddressInput + "</li><li>" + cityInput + "</li><li>" + state + "</li><li>" + zipcodeInput + "</li><li>" + cellInput + "</li><li>" + workInput + "</li><li>" + emailInput + "</li><li>" + websiteInput + "</li>" + "</br></br>");


    });
  });
