/*
 * Author: Yuhao Chen <ychen514@ucsc.edu>
 * Created: 28 January
 * License: Public Domain
 */

//Define Variables
myMainDrive = {
  make: "Toyota",
  model: "Toyota Camry",
  color: "SuperSonic Red",
  year: 2019,
  age: function () {
    return 2019 - age;
  },
};
myTransport = ["Drive", "Cycling", "Bus", "Walking"];

// output
document.writeln("Kinds of transportation I use: ", myTransport, "<br>");
document.writeln(
  "My Main Ride: <pre>",
  JSON.stringify(myMainDrive, null, "\t"),
  "</pre>"
);
