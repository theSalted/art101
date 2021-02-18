/*
 * Author: Yuhao Chen <ychen514@ucsc.edu>
 * Created: 18 February
 * License: Public Domain
 */

$("#challenge").append("<button id=challenge-button>challenge");

$("#problem").append("<button id=problems-button>problem");

$("#result").append("<button id=results-button>result");

$("#challenge-button").click(function () {
  alert("Go away.");
  $("#output").append("<p>challenge button is pushed</p>");
  $("#problems-button").css("color", "green");
  $("#challenge-button").css("color", "black");
});

$("#problems-button").click(function () {
  alert("Stop!!!");
  $("#output").append("<p>problem button is pushed</p>");
  $("#results-button").css("color", "blue");
  $("#problems-button").css("color", "black");
});

$("#results-button").click(function () {
  alert("Stop it already!");
  $("#output").append("<p>result button is pushed</p>");
  $("#challenge-button").css("color", "yellow");
  $("#results-button").css("color", "black");
});
