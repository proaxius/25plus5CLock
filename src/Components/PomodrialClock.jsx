
//import { useEffect, useRef, useState } from "react";

//export default function PomodialClock() {
//  const [Session, setSession] = useState(25);
//  const [Break, setBreak] = useState(5);
//  const [Timer, setTimer] = useState("Stopped");
//  const [TimerType, setTimeType] = useState("SessionType");
//  const [seconds, setSeconds] = useState(25 * 60);
//  const [TickTick, setTickTick] = useState();
//  const [TimerTypeSession, setTimerTypeSession] = useState("Session");
//  const [TimeLeft, setTimeLeft] = useState(1500 % 60);
//  const TimeLeftRef = useRef(null);
//  const AudioRef = useRef(null);

//    useEffect(() => {
//        const minutes = Math.floor(seconds / 60);
//        const remainingSeconds = seconds % 60;
//        const min = minutes.toString()
//        const sec = remainingSeconds.toString()
//        setTickTick(
//            `${min.padStart(2, "0")}:${sec.padStart(2, "0") }`) 
//  }, [seconds]);

//  //for incrementing and decrementing number of length
//  const handleClick = (param, param2) => {
//    if (Timer === "running") {
//      return;
//    }
//    if (param === "break") {
//      // for break length
//      if (param === "break" && param2 === "-") {
//        if (Break === 1 || Break <= 1) {
//          return;
//        } else {
//          return setBreak( Break - 1);
//        }
//      } else if (param === "break" && param2 === "+") {
//        if (Break === 60 || Break >= 60) {
//          return;
//        } else {
//          return setBreak( Break + 1);
//        }
//      }
//    }
//    // for session length
//    else if (param === "session") {
//      if (param === "session" && param2 === "-") {
//        if (Session === 1 || Session <= 1) {
//          return;
//        } else {
//          setSession( Session - 1);
//          return;
//        }
//      } else if (param === "session" && param2 === "+") {
//        if (Session === 60 || Session >= 60) {
//          return;
//        } else {
//          return setSession( Session + 1);
//        }
//      }
//    }
//  };
//  //for changing timer with change in session
//  useEffect(() => {
//    const remainingSeconds = 0;
//      setSeconds((Session * 60));
//      const sec = remainingSeconds.toString()
      
//      setTickTick(
//          (`${(Session.toString() ).padStart(2, "0")}:${(
//          sec
//        ).padStart(2, "0")}`)
//    );
//  }, [Session]);

//  const handleTimerClick = () => {
//    if (Timer === "running") {
//      return setTimer("Paused");
//    } else if (Timer === "Paused") {
//      return setTimer("running");
//    } else if (Timer === "Stopped") {
//      return setTimer("running");
//    }
//  };

//  const handleReset = () => {
//    if (Timer === "running" || Timer === "Paused") {
//      setTimer(( "Stopped"));
//      setSeconds((25 * 60));
//      // const minutes = Math.floor(seconds / 60);
//      // const remainingSeconds = seconds % 60;
//      setTickTick("25:00");
//    }

//    setTimeType(("SessionType"));
//    if (AudioRef.current) {
//      AudioRef.current.pause();
//    }
//    setTimerTypeSession("Session");
//    setSession((25));
//    setBreak((5));
//  };

//  // most of the work is done only timer and audio test have been pending
//  //so the timer shoudl be displayed in MM:SS format as in past we followed the simple approach for following time and decrementing by 1 every second it didnt work so this time iam going to use math.floor method
//  //i think useRef,useEffect and  setInterval can be used to create a timer

//  useEffect(() => {
//    //converting session and break length to seconds
//      if (TimerType === "SessionType" && Timer === "running") {
//          return;
//    } else if (TimerType === "BreakType" && Timer == "Paused") {
//      setSeconds(( Break * 60));
//    }

//    if (Timer === "running" || Timer === "BreakRunning") {
//      //now what i want to do is if timer is session type then set session length to timer in seconds
//      TimeLeftRef.current = setInterval(() => {
//        setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
//        setTimeLeft(( Math.floor(seconds / 60)));
//        const sec = seconds % 60;
//        setTickTick(
//          ( `${String(TimeLeft).padStart(2, "0")}:${String(
//              sec
//            ).padStart(2, "0")}`)
//        );
//      }, 1000);
//      return () => clearInterval(TimeLeftRef.current);
//    } else {
//      clearInterval(TimeLeftRef.current);
//    }
//  }, [TimerType, Timer, Break, Session, seconds, TimeLeft]);
//  useEffect(() => {
//    if (seconds === 0) {
//      if (TimerType === "SessionType" && Timer === "running") {
//        setTimeType("BreakType");
//        setTimeout(() => {
          
//          setSeconds(Break * 60);
//          setTimerTypeSession("Break")
//        }, 3000);
//        setTimer(( "running"));
//      } else if (TimerType === "BreakType" && Timer === "running") {
//        setTimeType("SessionType");
//        setTimeout(() => {
          
//          setSeconds(Session * 60);
//          setTimerTypeSession("Session")
//        },3000);
//        setTimer(( "running"));
//      }
//    }
//  }, [TimerType, TimeLeft, seconds, Timer, Break, Session, TimerTypeSession]);

//  // useEffect(() => {
//  //   if (TickTick === "00:00") {
//  //     if (TimerType === "SessionType" && Timer === "running") {
//  //       setTimerTypeSession("Break");
//  //     } else if (TimerType === "BreakType" && Timer === "running") {
//  //       setTimerTypeSession("Session");
//  //     }
//  //   }
//  // }, [seconds, TimerType, Timer, TickTick]);
//  useEffect(() => {
//    if (AudioRef.current) {
//      console.log("Audio loaded");
//    } else {
//       console.log("Audio Not Loaded")
//    }
//  }, []);
//  useEffect(() => {
//    if (seconds < 1) {
//      if (AudioRef.current) {
//        AudioRef.current.play();

//        setTimeout(() => {
//          if (AudioRef.current) {
//            AudioRef.current?.pause();
//            AudioRef.current.currentTime = 0;
//          } else {
//            console.log("Audio was not Loaded");
//          }
//        }, 3000);
//      } else {
//        console.error("Audio is not loaded");
//      }
//    }
//  }, [seconds]);

//  //view error log for info i think something is wrong with the timerType and sessionType state
//  //for error finding only
//  //   useEffect(()=>{
//  // console.log("Timer:",Timer)
//  // console.log("TimerType",TimerType)
//  // console.log("Break count",Break)
//  //     console.log("Session count",Session)
//  //     console.log("Seconds ",seconds)
//  //     console.log("TICK-Tick",TickTick)
//  //     console.log("TimeLeft",TimeLeft)
//  //   },[Timer,TimerType,Break,Session,seconds,TickTick,TimeLeft])

//  return (
//    <div className=" h-screen w-[80%]  flex flex-row justify-center place-items-center">
      
//      <div className="container flex bg-teal-600 rounded-lg flex-col justify-center place-items-center h-[50vh] w-[50vw]]">
//        <h1>25+5 clock</h1>
//        <span className="w-[60%] justify-around flex">
//          <span className="flex flex-col justify-around w-full place-items-center">
//            <label htmlFor="break-length" id="break-label">
//              BREAK-LENGTH
//            </label>
//            <span className=" flex flex-col gap-4 p-2 ">
//              {/* Increment decrement for the break between the sessions  */}
//              <button
//                onClick={() => handleClick("break", "-")}
//                className="text-3xl font-extrabold"
//                id="break-decrement"
//              >
//                -
//              </button>
//              <h1 id="break-length" className="text-center text-4xl">
//                {Break}
//              </h1>
//              <button
//                onClick={() => {
//                  handleClick("break", "+");
//                }}
//                className="text-3xl font-extrabold"
//                id="break-increment"
//              >
//                +
//              </button>
//            </span>
//          </span>
//          <span className="flex flex-col justify-around w-[80%] place-items-center">
//            <label htmlFor="Session-Length" id="session-label">
//              Session-Length
//            </label>
//            <span className=" flex flex-col gap-4 p-2 ">
//              {/* Increment decrement  for the session timer how long a session gonana last*/}
//              <button
//                onClick={() => {
//                  handleClick("session", "-");
//                }}
//                className="text-3xl font-extrabold"
//                id="session-decrement"
//              >
//                -
//              </button>
//              <div id="session-length" className="text-center text-4xl">
//                {Session}
//              </div>
//              <button
//                onClick={() => {
//                  handleClick("session", "+");
//                }}
//                className="text-3xl font-extrabold"
//                id="session-increment"
//              >
//                +
//              </button>
//            </span>
//          </span>
//        </span>
//        {/* increment decrmenet settings end here */}

//        {/* for the main timer part */}
//        <span className="flex flex-col place-items-center justify-center w-full">
//          <label className="text-3xl" htmlFor="" id="timer-label">
//            {TimerTypeSession}
//          </label>
//          <span className="w-full flex justify-center">
//            {/* CLOCK timer */}
//            <div
//              className={`text-7xl text-center rounded-xl p-4 w-[80%] transition-all duration-300 ${
//                TimerType === "SessionType" ? "bg-emerald-400" : "bg-red-600"
//              }`}
//              id="time-left"
//            >
//              {TickTick}
//            </div>
//          </span>
//          {/* button for ruuning and stopping */}
//          <span className="w-[60vw] flex flex-col place-items-center justify-center ">
//            <button
//              className={`p-4  transition-all text-center duration-500 rounded-md w-[40%] hover:shadow-md  shadow-white  ${
//                Timer === "Paused"
//                  ? "bg-red-700 hover:bg-slate-200 hover:text-black"
//                  : Timer === "running"
//                  ? "bg-green-700 hover:bg-blue-200 hover:text-sky-700"
//                  : "bg-sky-700 hover:bg-blue-200 hover:text-sky-700)"
//              } `}
//              onClick={handleTimerClick}
//              id="start_stop"
//            >
//              {Timer === "Stopped"
//                ? `Stopped`
//                : Timer === "Paused"
//                ? `Paused`
//                : `Running`}
//            </button>
//            <button
//              id="reset"
//              className=" rounded-md h-[10vh] w-[30%] hover:shadow-md shadow-slate-700 bg-green-500 hover:bg-red-500  transition-all duration-500 hover:text-2xl"
//              onClick={handleReset}
//            >
//              Reset
//            </button>
//            <div></div>
//          </span>
//        </span>

//        {/* audio beep for timer end  */}
//        <span>
//          <audio ref={AudioRef} id="beep" preload="auto">
//            <source src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
//          </audio>
//        </span>
//      </div>
//    </div>
//  );
//}
