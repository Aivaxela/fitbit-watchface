import * as document from "document";
import { display } from "display";
import { initializeClock } from "./time";
import { updateHeartRateSensorCommand } from "./heart-rate";
// Get a handle on the <text> element
const time = document.getElementById("time");
const heartRate = document.getElementById("heartRate");

// Initialize the clock with a callback to update the label
initializeClock((timeString) => {
  time.text = timeString;
});

display.addEventListener("change", () => {
  // Automatically stop the sensor when the screen is off to conserve battery
  display.on
    ? updateHeartRateSensorCommand((newHeartRate) => {
        heartRate.text = newHeartRate;
      })
    : updateHeartRateSensorCommand(null);
});
