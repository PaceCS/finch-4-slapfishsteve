load('readline.js');
load('Finch.js');

// Gain access to our finch
let finch = new Finch();

// -----------------------------------------------
// Don't change anything above the line

// Our first set of code will make the Finch move forward and backwards until it detects an obstacle
// while (!finch.getObstacleSensors().right && !finch.getObstacleSensors().left) {
//     finch.setWheelPower(100, 100);
//     wait(1000);
//     finch.setWheelPower(-100, -100);
//     wait(1000);
// }
// finch.setWheelPower(0, 0);
// wait(1000);

// Now we will make the Finch move side to side until it detects a strong light
// while (finch.getLightSensors().right < 100 && finch.getLightSensors().left < 100) {
//     finch.setWheelPower(100, 0);
//     finch.setLED(255, 0, 0);
//     wait(1000);
//     finch.setWheelPower(0, 100);
//     finch.setLED(0, 255, 0);
//     wait(1000);
// }
// finch.setWheelPower(0, 0);
// finch.setLED(0, 0, 0);
// wait(1000);

// Have the Finch change the color of its nose back and forth every second until it detects a strong light
// while (finch.getLightSensors().right < 100 && finch.getLightSensors().left < 100) {
//     finch.setLED(255, 0, 0);
//     wait(1000);
//     finch.setLED(0, 0, 255);
//     wait(1000);
// }
// finch.setLED(0, 0, 0);
// wait(1000);

// Have the Finch flash red and blue for 3 seconds if it detects an obstacle.  Have it disarm itself completely if it detects an strong light.
// while (finch.getLightSensors().right < 100 && finch.getLightSensors().left < 100) {
//     while(!finch.getObstacleSensors().right && !finch.getObstacleSensors().left) {
//         wait(100);
//     }
//     for (let i = 0; i < 3; i += 1) {
//         finch.setLED(255,0,0);
//         wait(500);
//         finch.setLED(0,0,255);
//         wait(500);
//     }
//     finch.setLED(0, 0, 0);
// }
// wait(2000);

// Have the Finch do the sound and light show that you programmed previously.  It should pause for a second if it detects an obstacle and it should stop completely if it detects a strong
const arr = [329.6, 293.7, 261.6, 293.7, 329.6, 329.6, 329.6, 293.7, 293.7, 293.7, 329.6, 392, 392, 329.6, 293.7, 261.6, 293.7, 329.6, 329.6, 329.6, 329.6, 293.7, 293.7, 329.6, 293.7, 261.6];
const time = [1000,1000,1000,1000,1000,1000,2000,1000,1000,2000,1000,1000,2000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000]


while (finch.getLightSensors().right < 100 && finch.getLightSensors().left < 100) {
    while(!finch.getObstacleSensors().right && !finch.getObstacleSensors().left) {
        for (let counter = 0; counter < time.length; counter += 1) {
            finch.playTone(arr[counter], time[counter]);
            wait(100);
            finch.setLED(255, 0, 255);
            wait(30);
            finch.setLED(255, 0, 0);
            wait(30);
            finch.setLED(255, 120, 0);
            wait(30);
            finch.setLED(0, 0, 255);
            wait(30);
            finch.setLED(0, 255, 255);
            wait(30);
            finch.setLED(255, 120, 0);
            wait(30);
            finch.setLED(120, 255, 0);
            wait(30);
            finch.setLED(255, 255, 255);
            wait(30);
            }
        finch.setLED(0, 0, 0);
        finch.playTone(0, 0);
        wait(1000);
        }
        finch.setLED(0, 0, 0);
        finch.playTone(0);
    }


// Have the Finch do the maze that you programmed earlier but have it pause if it detects an obstacle and stop completely if it detects a strong light

function wait(msecs, buffer) {
    var buf = buffer ? buffer : 100;
    var time1 = new Date().getTime();
    var time2 = new Date().getTime();
    while (time2 < time1 + msecs + buf) {
        time2 = new Date().getTime();
    }
}
