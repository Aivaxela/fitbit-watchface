import { HeartRateSensor } from "heart-rate";

export function updateHeartRateSensorCommand(onHeartRateUpdate) {
  if (HeartRateSensor) {
    const hrm = new HeartRateSensor({ frequency: 1 });
    hrm.addEventListener("reading", () => {
      if (hrm.heartRate) {
        onHeartRateUpdate(hrm.heartRate);
      }
    });
    hrm.start();
  }
}

export function stopReadingHeartRate() {
  if (HeartRateSensor) {
    const hrm = new HeartRateSensor({ frequency: 1 });
    hrm.stop();
  }
}
