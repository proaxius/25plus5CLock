import { BreakDecrement } from "./ClockComponents/Buttons/BreakDecrement";
import { BreakIncrement } from "./ClockComponents/Buttons/BreakIncrement";
import Reset from "./ClockComponents/Buttons/Reset.jsx";
import { SessionDecrement } from "./ClockComponents/Buttons/SessionDecrement.jsx";
import { SessionIncrement } from "./ClockComponents/Buttons/SessionIncrement";
import StartStop from "./ClockComponents/Buttons/startStop.jsx";
import Label from "./ClockComponents/Labels/Label.jsx";
import TimerLabel from "./ClockComponents/Labels/TimerLabel.jsx";
import TimerClock from "./ClockComponents/Timer/TimerClock.jsx";

export default function Clock() {
  return (
    <>
      <div className="magicCenter box-50 flex flex-col text-center ">
        <div className="flex flex-row text-black h-w-full justify-between ">
            {/* increment decrement Part */}
          <span className="flex flex-col justify-between  place-items-center p-1">
            <BreakDecrement  />
            <Label id="break-label" labelFor="Break" label="Break-Length" />
            <BreakIncrement />
          </span>
          <span className="flex flex-col justify-between place-items-center p-1">
            <SessionDecrement />
            <Label id="session-labelZ" labelFor="Session" label="Session-Length" />
            <SessionIncrement />
          </span>
        </div>
        {/* timer and Timer status */}
        <span className="container box-50 place-items-center justify-center flex flex-col line-height-3">
            <TimerLabel />
            <TimerClock />
        </span>
        {/* Button for stop resume and reset */}
        <span className="flex flex-row box-25 justify-between place-items-center ">
            <StartStop />
            <Reset />
        </span>
      </div>
    </>
  );
}
