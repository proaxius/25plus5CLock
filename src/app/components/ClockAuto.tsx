// 'use client'
// import { useState, useEffect, useRef } from 'react';
// const BEEP = './beep-06.mp3'

// const PomodoroClock: React.FC = () => {
//   const [breakLength, setBreakLength] = useState<number>(5);
//   const [sessionLength, setSessionLength] = useState<number>(25);
//   const [timerLabel, setTimerLabel] = useState<string>('Session');
//   const [timeLeft, setTimeLeft] = useState<number>(sessionLength * 60);
//   const [isActive, setIsActive] = useState<boolean>(false);
//   const [isBreak, setIsBreak] = useState<boolean>(false);
//   const audioRef = useRef<HTMLAudioElement>(null);

//   const decrementBreakLength = () => {
//     setBreakLength((prevLength) => Math.max(prevLength - 1, 1));
//   };

//   const incrementBreakLength = () => {
//     setBreakLength((prevLength) => Math.min(prevLength + 1, 60));
//   };

//   const decrementSessionLength = () => {
//     setSessionLength((prevLength) => Math.max(prevLength - 1, 1));
//     setTimeLeft((prevTime) => Math.max(prevTime - 60, 60));
//   };

//   const incrementSessionLength = () => {
//     setSessionLength((prevLength) => Math.min(prevLength + 1, 60));
//     setTimeLeft((prevTime) => prevTime + 60);
//   };

//   const resetTimer = () => {
//     setIsActive(false);
//     setIsBreak(false);
//     setTimerLabel('Session');
//     setBreakLength(5);
//     setSessionLength(25);
//     setTimeLeft(25 * 60);
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//   };

//   const toggleTimer = () => {
//     setIsActive(!isActive);
//   };

//   useEffect(() => {
//     let intervalID: NodeJS.Timeout;

//     if (isActive && timeLeft > 0) {
//       intervalID = setInterval(() => {
//         setTimeLeft((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (isActive && timeLeft === 0) {
//       if (audioRef.current) {
//         audioRef.current.play();
//       }

//       if (isBreak) {
//         setTimerLabel('Session');
//         setTimeLeft(sessionLength * 60);
//       } else {
//         setTimerLabel('Break');
//         setTimeLeft(breakLength * 60);
//       }
//       setIsBreak(!isBreak);
//     }

//     return () => clearInterval(intervalID);
//   }, [isActive, timeLeft, isBreak, sessionLength, breakLength]);

//   return (
//     <div className="container text-center">
//       <h1>Pomodoro Clock</h1>
//       <div className="length-controls">
//         <div>
//           <label id="break-label">Break Length</label>
//           <button id="break-decrement" onClick={decrementBreakLength}>
//             -
//           </button>
//           <span id="break-length">{breakLength}</span>
//           <button id="break-increment" onClick={incrementBreakLength}>
//             +
//           </button>
//         </div>
//         <div>
//           <label id="session-label">Session Length</label>
//           <button id="session-decrement" onClick={decrementSessionLength}>
//             -
//           </button>
//           <span id="session-length">{sessionLength}</span>
//           <button id="session-increment" onClick={incrementSessionLength}>
//             +
//           </button>
//         </div>
//       </div>
//       <div className="timer">
//         <h2 id="timer-label">{timerLabel}</h2>
//         <div id="time-left">{`${Math.floor(timeLeft / 60)
//           .toString()
//           .padStart(2, '0')}:${(timeLeft % 60).toString().padStart(2, '0')}`}</div>
//         <button id="start_stop" onClick={toggleTimer}>
//           {isActive ? 'Pause' : 'Start'}
//         </button>
//         <button id="reset" onClick={resetTimer}>
//           Reset
//         </button>
//       </div>
//       <audio id="beep" ref={audioRef} src={BEEP}></audio>
     
//     </div>
//   );
// };

// export default PomodoroClock;