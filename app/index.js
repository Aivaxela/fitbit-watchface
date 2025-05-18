import * as document from "document";
import { initializeClock } from "./time";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");

// Initialize the clock with a callback to update the label
initializeClock((timeString) => {
  myLabel.text = timeString;
});