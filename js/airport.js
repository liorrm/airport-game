var boeingRelativePosTop = 305
var boeingRelativePosLeft = 50

var boeing = document.getElementById("boeing");
var terminal = document.getElementById("terminal");
var runway = document.getElementById("runway");
var airbus = document.getElementById("airbus");
var endOfRunway = document.getElementById("endOfRunway");

var boeing = {
  name: "Boeing 747-400",
  fuelLevel: 100,
  parked: false,
  crashed: false
}

var airbus = {
  fuelLevel: 100
  name: "Airbus A320",
  inWay: true
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
