import React from "react";
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from "./playButton";
import Reset from "./resetButton";

const red = '#f54e4e';
const green =' #4aec8c';


function Timer({onBreak}){
    return (
        <div className="timer">
            
          
<h2 id="timer-label">{onBreak? "Break": "Session"}</h2>
<CircularProgressbar value={25} maxValue={1} text={`${25}%`} 
    styles = {buildStyles({rotation : 0.25,
    strokeLinecap : 'but',
    textColor: '#ffff',
    pathColor: red,
    trailColor: '#ffff'
    })}
/>
<div className="buttons">
< PlayButton/>
<Reset/>
</div>

        </div>
    )
}
export default Timer;