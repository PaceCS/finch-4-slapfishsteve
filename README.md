# Finch Sensor

You will be experimenting with using the Finch's sensors to make it respond to its environment.  

### Understanding Finch Sensors
The Finch has multiple sensors it can use to detect its environment.  The ones we will be using are its light sensor and its obstacles sensor.  However, it also has a temperature sensor and a 3-axis accelerometer.  

There are 2 obstacle sensors on the Finch located in its eyes.  These sensors can be accessed with `finch.getObstacleSensors().left` and `finch.getObstacleSensors().right`.  If there is an object in front of the sensor, then its value is `true`; otherwise, its value is `false`.

The are 2 light sensors on the Finch located above its eyes.  These sensors can be accessed with `finch.getLightSensors().left` and `finch.getLightSensors().right`.  They return a value between 0 - 255 where higher values correspond to the greater the intensity of the light.

### Coding the Finch
You will be experimenting with some code to create different actions based on the sensor.

1. **Back and Forth Forever?** - Have the Finch move forward for 1 second then backwards for 1 second until it detects an obstacle in front of it.  If it detects an object, then it stops and waits for a second.
```
while (!finch.getObstacleSensors().right && !finch.getObstacleSensors().left) {
    finch.setWheelPower(100, 100);
    wait(1000);
    finch.setWheelPower(-100, -100);
    wait(1000);
}
finch.setWheelPower(0, 0);
wait(1000);
```
2. **Side to Side Forever?** - Have the Finch move side to side until it detects a strong light.  If it detects a strong light, then it stops and waits for a second.
```
while (finch.getLightSensors().right < 100 && finch.getLightSensors().left < 100) {
    finch.setWheelPower(100, 0);
    wait(1000);
    finch.setWheelPower(0, 100);
    wait(1000);
}
finch.setWheelPower(0, 0);
wait(1000);
```
2. **Light Swap Forever?** - Have the Finch change the color of its nose back and forth until it detects a strong light.

4. **Alarm System** - Have the Finch do nothing until it detects an obstacle.  If it detects an obstacle, have it flash red and blue for 3 seconds.  Have the Finch disarm itself (i.e. stop) completely if it detects a strong light.

4. **Sound & Light Show w/ Snooze** - Have the Finch put on the sound & light show you developed previously but have it pause for 1 second if it detects a strong light.  Have it stop completely if it detects an obstacle.

4. **Maze Runner w/ Obstacle Detection** - Create a maze and have the Finch successfully navigate it but have it wait if it detects an obstacle.
