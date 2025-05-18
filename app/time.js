import clock from "clock";
import { preferences } from "user-settings";

const zeroPad = (i) => i < 10 ? `0${i}` : i;

export function initializeClock(updateCallback) {
  // Update the clock every minute
  clock.granularity = "minutes";

  // Update the time every tick
  clock.ontick = (evt) => {
    let today = evt.date;
    let hours = today.getHours();
    if (preferences.clockDisplay === "12h") {
      // 12h format
      hours = hours % 12 || 12;
    } else {
      // 24h format
      hours = zeroPad(hours);
    }
    let mins = zeroPad(today.getMinutes());
    updateCallback(`${hours}:${mins}`);
  };
}
