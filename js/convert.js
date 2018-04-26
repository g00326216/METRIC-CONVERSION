
// METERS
function fToM(){

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.3048;//CALCULATION
  var message = measure + ' feet converts to ' + meters + ' meters.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}

//INCHES TO CENT
function fToC(){

  var measure = parseInt(document.getElementById("value1").value);

  var centimeters = measure * 2.54;//CALCULATION
  var message = measure + ' inches converts to ' + centimeters + ' centimeters';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}

//YARDS TO MET
function fToY(){

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.9144;//CALCULATION
  var message = measure + ' yards converts to ' + meters + ' meters';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}
//MILES TO KILO
function fToK(){

  var measure = parseInt(document.getElementById("value1").value);

  var kilometers = measure * 1.60934;//CALCULATION
  var message = measure + ' miles converts to ' + kilometers + ' kilometers';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}