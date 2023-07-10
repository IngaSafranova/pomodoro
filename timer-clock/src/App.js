
import React,{useState} from 'react'
import Settings from './components/settings';
import SettingsContext from './components/settingsContext';
import Timer from './components/timer';

function App() {

  const [onBreak, setOnBreak]= useState(false);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState (5);
const [displayTime, setDisplayTime] = useState (1500)
const [timerOn, setTimerOn] = useState(false)

const changeTime = (amount, type) => {
  if (type === "break") {
    //check if time not going to be less than 60sec
    if (breakLength <= 1 && amount < 0) {
      return;
    }
    setBreakLength((prev) => prev + amount);
  } else {
    if (sessionLength <= 1 && amount < 0) {
      return;
    }
    setSessionLength((prev) => prev + amount);
    if (!timerOn) {
      setDisplayTime(displayTime + amount);
    }
  }
};

  return (
    <main className="App">
    <SettingsContext.Provider value = {{
      //provide default values for session and breakAfter: 
      sessionLength,
      breakLength,
      setSessionLength,
      setBreakLength,
      onBreak,
      setOnBreak,
      displayTime,setDisplayTime,
      timerOn,
      setTimerOn

    }}>
    <Settings changeTime = {changeTime}/>

    <Timer onBreak = {onBreak}/>
</SettingsContext.Provider>


    </main>
  );
}

export default App;
