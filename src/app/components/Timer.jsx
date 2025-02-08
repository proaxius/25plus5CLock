'use client'
import { useState, useEffect, useRef } from "react";

// AccurateInterval.js (from the original code):
const accurateInterval = (fn, time) => {
  let cancel, nextAt, timeout, wrapper;
  nextAt = new Date().getTime() + time;
  timeout = null;
  wrapper = () => {
    nextAt += time;
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    fn();
  };
  cancel = () => {
    clearTimeout(timeout);
  };
  timeout = setTimeout(wrapper, nextAt - new Date().getTime());
  return {
    cancel,
  };
};

// Timer Component
const Timer = () => {
  const [brkLength, setBrkLength] = useState(5); // Break length
  const [seshLength, setSeshLength] = useState(25); // Session length
  const [timerState, setTimerState] = useState("stopped"); // Timer state (running or stopped)
  const [timerType, setTimerType] = useState("Session"); // Current phase (Session or Break)
  const [timer, setTimer] = useState(1500); // Time in seconds
  const [alarmColor, setAlarmColor] = useState("white"); // Alarm color for warning

  const intervalRef = useRef(null); // To store the interval ID
  const audioBeep = useRef(null); // Reference for the audio element

  useEffect(() => {
    // Ensures audio only plays on the client
    if (typeof window !== "undefined") {
      audioBeep.current = document.getElementById("beep");
    }
  }, []);

  const handleLengthChange = (type, sign) => {
    if (timerState === "running") return;

    if (timerType === "Session" && type === "seshLength") {
      if (sign === "-" && seshLength > 1) {
        setSeshLength(seshLength - 1);
      } else if (sign === "+" && seshLength < 60) {
        setSeshLength(seshLength + 1);
      }
    } else if (timerType === "Break" && type === "brkLength") {
      if (sign === "-" && brkLength > 1) {
        setBrkLength(brkLength - 1);
      } else if (sign === "+" && brkLength < 60) {
        setBrkLength(brkLength + 1);
      }
    }
  };

  const startStopTimer = () => {
    if (timerState === "stopped") {
      beginCountDown();
      setTimerState("running");
    } else {
      setTimerState("stopped");
      if (intervalRef.current) {
        intervalRef.current.cancel();
      }
    }
  };

  const beginCountDown = () => {
    intervalRef.current = accurateInterval(() => {
      decrementTimer();
      phaseControl();
    }, 1000);
  };

  const decrementTimer = () => {
    setTimer((prevTime) => prevTime - 1);
  };

  const phaseControl = () => {
    if (timer < 1) {
      if (intervalRef.current) {
        intervalRef.current.cancel();
      }
      if (timerType === "Session") {
        setTimerType("Break");
        setTimer(brkLength * 60); // Set break time
      } else {
        setTimerType("Session");
        setTimer(seshLength * 60); // Set session time
      }
      beginCountDown();
    }
    warning(timer);
    buzzer(timer);
  };

  const warning = (timer) => {
    if (timer < 61) {
      setAlarmColor("#a50d0d"); // Set warning color
    } else {
      setAlarmColor("white");
    }
  };

  const buzzer = (timer) => {
    if (timer === 0) {
      if (audioBeep.current) {
        audioBeep.current.play(); // Play beep sound when timer ends
      }
    }
  };

  const clockify = () => {
    if (timer < 0) return "00:00";
    const minutes = Math.floor(timer / 60);
    let seconds = timer - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes < 10 ? "0" + minutes : minutes}:${seconds}`;
  };

  const reset = () => {
    setBrkLength(5);
    setSeshLength(25);
    setTimerState("stopped");
    setTimerType("Session");
    setTimer(1500);
    setAlarmColor("white");
    if (intervalRef.current) {
      intervalRef.current.cancel();
    }
    if (audioBeep.current) {
      audioBeep.current.pause();
      audioBeep.current.currentTime = 0;
    }
  };

  return (
    <div className="flex justify-center place-content-center place-items-center">
      <h1 className="main-title">25 + 5 Clock</h1>

      <div className="length-control">
        <div id="break-label">Break Length</div>
        <button onClick={() => handleLengthChange("brkLength", "-")}>-</button>
        <div>{brkLength}</div>
        <button onClick={() => handleLengthChange("brkLength", "+")}>+</button>
      </div>

      <div className="length-control">
        <div id="session-label">Session Length</div>
        <button onClick={() => handleLengthChange("seshLength", "-")}>-</button>
        <div>{seshLength}</div>
        <button onClick={() => handleLengthChange("seshLength", "+")}>+</button>
      </div>

      <div className="timer" style={{ color: alarmColor }}>
        <div className="timer-wrapper">
          <div id="timer-label">{timerType}</div>
          <div id="time-left">{clockify()}</div>
        </div>
      </div>

      <div className="timer-control">
        <button onClick={startStopTimer}>
          {timerState === "stopped" ? "Start" : "Pause"}
        </button>
        <button onClick={reset}>Reset</button>
      </div>

      <audio id="beep" preload="auto">
        <source src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
      </audio>

     
    </div>
  );
};

export default Timer;
