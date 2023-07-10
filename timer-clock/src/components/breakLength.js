import React, { useContext } from "react";
import SettingsContext from "./settingsContext";

function BreakLength({settingsInfo ,breakLength,changeTime, type, title}){

 settingsInfo = useContext(SettingsContext);

    return (
        <div className='break-container'>
        <label id="break-label">{title}</label>
        <div className='controls-container'>
        
        <button id='break-decrement' className='btn-level' value= "-" onClick={() => changeTime(-1, type)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
   
        </button>
        <h3 id='break-length'>{settingsInfo.breakLength}</h3>
        <button id='break-increment' className='btn-level' value= "+" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
  
        </button>
        </div>
        </div>
    )
}
export default BreakLength