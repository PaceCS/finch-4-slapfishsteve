"use strict";

load("readline.js");
load("Finch.js");

// Gain access to our finch
var finch = new Finch();

// -----------------------------------------------
// Don't change anything above the line

// Our first set of code will make the Finch move forward and backwards until it detects an obstacle
while (!finch.getObstacleSensors().right && !finch.getObstacleSensors().left) {
    finch.setWheelPower(100, 100);
    wait(1000);
    finch.setWheelPower(-100, -100);
    wait(1000);
}
finch.setWheelPower(0, 0);
wait(1000);

// Now we will make the Finch move side to side until it detects a strong light
while (finch.getLightSensors().right < 100 && finch.getLightSensors().left < 100) {
    finch.setWheelPower(100, 0);
    finch.setLED(255, 0, 0);
    wait(1000);
    finch.setWheelPower(0, 100);
    finch.setLED(0, 255, 0);
    wait(1000);
}
finch.setWheelPower(0, 0);
finch.setLED(0, 0, 0);
wait(1000);

// Have the Finch repeat the motion of moving back and forth 3 more times


// Now make the Finch turn to the right for half a second


// Now make the Finch turn to the left for half a second


// Now make the Finch turn to the right for half a second but make it turn more quickly than before


// Now make the Finch turn to the left for half a second but make it turn more quickly than before


// Now create a maze with at least two turns and have the Finch follow that path


function wait(msecs, buffer) {
    var buf = buffer ? buffer : 100;
    var time1 = new Date().getTime();
    var time2 = new Date().getTime();
    while (time2 < time1 + msecs + buf) {
        time2 = new Date().getTime();
    }
}
