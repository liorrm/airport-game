var boeing      = document.getElementById("boeing");
var airbus      = document.getElementById("airbus");
var runway      = document.getElementById("runway");
var terminal    = document.getElementById("terminal");
var endOfRunway = document.getElementById("endOfRunway");
var boeingImg   = document.getElementById("boeingImg");

var boeingData = {
  name: "Boeing 747-400",
  fuelLevel: 100,
  parked: false,
}

var airbusData = {
  fuelLevel: 100,
  name: "Airbus A320",
  inWay: false
}

function move(e) {
  if (e.keyCode === 38 && fuelLevel > 0) {
    boeingRelativePosTop -= 30;
    boeing.style.top = boeingRelativePosTop + "px";
    boeing.fuelLever -= 10;
  }
}

function clearWay(object) {
  object.inWay = false
}

function park(object) {
  object.parked = true
}

function crash(object) {
  object.crashed = true
}
