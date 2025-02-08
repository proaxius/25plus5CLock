// 'use client'

// import { useState, useEffect } from "react";

// const Clock = () => {
//     const [inputBreak, SetInputBreak] = useState(5)
//     const [ChangeToggle, setChangeToggle] = useState(false)
//     const [inputSession, SetInputSession] = useState(25)
//     const [ClockTimerMinutes, setClockTimerMinutes] = useState(inputSession)
//     const [ClockTimerSeconds,setClockTimerSeconds] = useState(0)
//     const [timerType,setTimerType]= useState(false)
//     const ResetTimer = () => {
//         SetInputBreak(5)
//         SetInputSession(25)
//         setChangeToggle(false)
//         setClockTimerMinutes(25)
//         setClockTimerSeconds(0)

//     }  
//     const clockTimer = () => {

//     }
//     const breakTimer = () => {

//     }

//     useEffect(

//         () => {
//             let intervalID:any;
//             setClockTimerMinutes(inputSession )
            
//             if(ChangeToggle === true){
//                 clearInterval(intervalID);
//                intervalID =setInterval(
//                 ()=>{ 
//                     if (ClockTimerMinutes <= 0 && ClockTimerSeconds <= 0 ) {
//                         // Timer finished, update timer type and stop the interval
//                         setTimerType(!timerType);
//                         clearInterval(intervalID)
                       
//                       } else if (ClockTimerSeconds === 0) {
//                         // Decrement minutes and set seconds to 59
//                         setClockTimerMinutes((ClockTimerMinutes) => ClockTimerMinutes - 1);
//                         setClockTimerSeconds(59);
//                       } else {
//                         // Decrease seconds
//                         setClockTimerSeconds((ClockTimerSeconds) => ClockTimerSeconds - 1);
//                       }
//                 console.log(ClockTimerSeconds)
//             }
//                ,1000)
//             }
//             return ()=>{
//                 clearInterval(intervalID)
//             }
         
//         }

    
//     ,[ChangeToggle])



  
    

//     return (
//         <div className="flex justify-center place-items-center h-[100vh] outline-dashed outline-2 outline-red-600  " >
//             <div className="flex flex-col  justify-center text-3xl gap-5  w-[40%]">
//                 <div className="gap-4 p-2 flex justify-around">
//                     <label id="session-label">Session-Length</label>
//                     <label id="break-label">Break-Length</label>
//                 </div>
//                 <div className="gap-4 p-2 flex justify-around">
//                     <button id="session-decrement" onClick={() => { inputSession > 1 ? SetInputSession(inputSession - 1) : SetInputSession(1) ;
                    
//                     }} className="p-4">-</button>
//                     <button id="break-decrement" onClick={() => { inputBreak > 1 ? SetInputBreak(inputBreak - 1) : SetInputBreak(1) }} className="p-4">-</button>
//                 </div>
//                 <div className="flex flex-row justify-around ">
//                     <input id="session-length" type="number" min="1" max="60" value={inputSession} onChange={(e) => SetInputSession(parseInt(e.target.value))} className=" dark:text-white text-white text-center bg-transparent w-[20%] " />
//                     <input id="break-length" type="number" min="1" max="60" value={inputBreak} onChange={(e) => SetInputBreak(parseInt(e.target.value))} className=" dark:text-white text-white text-center bg-transparent w-[20%] " />
//                 </div>
//                 <div className="gap-4 p-2 flex justify-around">
//                     <button id="session-increment" onClick={() => { inputSession <= 59 ? SetInputSession(inputSession + 1) : SetInputSession(60); console.log("this is session" + inputSession) }} className="p-3">+</button>
//                     <button id="break-increment" onClick={() => { inputBreak <= 59 ? SetInputBreak(inputBreak + 1) : SetInputBreak(60); console.log("this is break" + inputBreak) }} className="p-3">+</button>
//                 </div>
//                 <div className=" text-center ">

//                     <h2 id="timer-label">Session</h2>
//                     <div id="time-left" className=" p-2 flex  justify-center">
//                         {String(ClockTimerMinutes).padStart(2,'0') }:{String(ClockTimerSeconds).padStart(2,'0')}

//                     </div>
//                     <div className="p-2" >
//                         <button onClick={()=>{
//                             setChangeToggle(!ChangeToggle)
                            
//                             console.log(ChangeToggle)
//                         }} id="start_stop">
//                            { ChangeToggle === false ?  <div className="text-emerald-600">START
//                            </div>
//                             :<span><div className="text-red-600">PAUSE</div>{timerType == true ? <div>Break-Timer is Running </div>:<div>Clock-Timer is running</div>}</span>}
//                         </button>

                   
//                     </div>
//                     <div className="p-2">
//                         <button onClick={ResetTimer} id="reset">Reset</button>
//                     </div>
//                 </div>


//             </div>

//         </div>
//     );
// }
// export default Clock;
