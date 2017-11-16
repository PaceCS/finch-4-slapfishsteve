load("readline.js");
load("Finch.js");

// Gain access to our finch
let finch = new Finch();

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


// Have the Finch change the color of its nose back and forth every second until it detects a strong light


// Have the Finch do the sound and light show that you programmed previously until it detects an obstacle


// Have the Finch do the maze that you programmed earlier but have it stop if it detects an obstacle






































function wait(msecs, buffer) {
    var buf = buffer ? buffer : 100;
    var time1 = new Date().getTime();
    var time2 = new Date().getTime() ;
    while (time2 < time1 + msecs + buf) {
        time2 = new Date().getTime();
    }
}
