/*
 * Author: Yuhao Chen <ychen514@ucsc.edu>
 * Created: 4 March
 * License: Public Domain
 */

var requestButton = document.getElementById("activate");
var output = document.getElementById("output");

requestButton.addEventListener("click", function () {
  $.ajax({
    type: "GET",
    url: "http://worldtimeapi.org/api/timezone/Europe/London",
    success: function (data) {
      console.log(data.datetime);
      output.innerHTML = data.datetime;
    },
    error: function () {
      console.log("Fail Loading API");
      output.innerHTML = "Fail Loading API";
    },
  });
});
